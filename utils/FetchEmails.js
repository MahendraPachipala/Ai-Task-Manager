import { google } from "googleapis";
import gemini from "./GeminiEmails";
import Deadlines from "@models/EmailDeadlines";

const FetchEmails = async (session) => {
  const accessToken = session.user.accessToken;
  const refreshToken = session.user.refreshToken;
  const clientId = process.env.GOOGLE_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const userId = session.user.id;

  try {
    const client = new google.auth.OAuth2(clientId, clientSecret);
    client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    const gmail = google.gmail({ version: 'v1', auth: client });

    const listUnreadEmails = async () => {
      const userDeadlineData = await Deadlines.findOne({ userId });
      const lastEmailId = userDeadlineData ? userDeadlineData.lastid : null;
      console.log(`Last Processed Email ID: ${lastEmailId}`);

      const res = await gmail.users.messages.list({
        userId: 'me',
        maxResults: 5, 
      });

      const messages = res.data.messages;
      if (!messages || messages.length === 0) {
        console.log('No unread emails found.');
        return;
      }

      console.log('Processing unread emails...');
      for (const message of messages) {
        if (message.id === lastEmailId) {
          console.log('Reached last processed email. Stopping further processing.');
          break;
        }

        const msg = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
        });

        const headers = msg.data.payload.headers;
        const subjectHeader = headers.find(header => header.name === 'Subject');
        const fromHeader = headers.find(header => header.name === 'From');

        const subject = subjectHeader ? subjectHeader.value : 'No Subject';
        const from = fromHeader ? fromHeader.value : 'Unknown Sender';

        let body = '';
        if (msg.data.payload.parts) {
          const part = msg.data.payload.parts.find(part => part.mimeType === 'text/plain');
          if (part && part.body && part.body.data) {
            body = Buffer.from(part.body.data, 'base64').toString('utf-8');
          } else {
            const htmlPart = msg.data.payload.parts.find(part => part.mimeType === 'text/html');
            if (htmlPart && htmlPart.body && htmlPart.body.data) {
              body = Buffer.from(htmlPart.body.data, 'base64').toString('utf-8');
            }
          }
        } else if (msg.data.payload.body && msg.data.payload.body.data) {
          body = Buffer.from(msg.data.payload.body.data, 'base64').toString('utf-8');
        }

        const response = await gemini(subject + body);
        if (response.trim() != "false") {
          console.log(response);

          const taskDetails = response.split(",");
          const [description, time, date] = taskDetails;

          const existingDeadline = await Deadlines.findOne({ userId: userId });

          if (existingDeadline) {
            existingDeadline.Deadlines.push({ subject, description, time, date });
            existingDeadline.lastid = message.id; 
            await existingDeadline.save();
          } else {
            const newDeadline = new Deadlines({
              userId: userId,
              lastid: message.id, 
              Deadlines: [{ subject, description, time, date }]
            });
            await newDeadline.save();
          }
        }
      }

      const latestMessageId = messages[0].id; 
      const existingDeadline = await Deadlines.findOne({ userId });
      if (existingDeadline) {
        existingDeadline.lastid = latestMessageId;
        await existingDeadline.save();
      } else {
        const newDeadline = new Deadlines({
          userId,
          lastid: latestMessageId,
          Deadlines: [],
        });
        await newDeadline.save();
      }
    };

    await listUnreadEmails();

    return new Response(
      JSON.stringify({ message: "Fetched and processed unread emails successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching emails:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch unread emails" }),
      { status: 500 }
    );
  }
};

export default FetchEmails;
