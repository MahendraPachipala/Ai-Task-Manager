import { google } from "googleapis";

const AddCalenderEvent = async (
  description,
  start_time,
  end_time,
  date,
  session
) => {
  const accessToken = session.user.accessToken;
  const refreshToken = session.user.refreshToken;

  const email = session.user.email;

  try {
    const client = new google.auth.OAuth2();

    client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    const calendar = google.calendar({ version: "v3", auth: client });



    const event = {
      summary: description,
      location: "",
      description: description,
      start: {
        dateTime: `${date}T${start_time}:00+05:30`,
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: `${date}T${end_time}:00+05:30`,
        timeZone: "Asia/Kolkata",
      },
      attendees: [{ email: email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const response = calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });


    return new Response(JSON.stringify({ response }), { status: 201 });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return new Response(
      JSON.stringify({ rror: "Failed to fetch calendar events" })
    );
  }
};

export default AddCalenderEvent;
