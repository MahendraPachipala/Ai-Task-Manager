import { useEffect } from 'react';

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({}); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert, setAlert]);

  if (!alert.message) return null;
  
  const color = {
    500: "text-red-700",
    201: "text-green-500"
  };

  //console.log(color[alert.status]);

  return (
    <div className={`glassmorphism fixed bottom-10 right-10 p-6 ${color[alert.status]}`}>
      {alert.message}
    </div>
  );
};

export default Alert;
