import "../index.css";
import React from "react";

interface NotificationProps {
  notification: {
    message: string;
    isError: boolean;
  };
}

const Notification = ({ notification }: NotificationProps) => {
  const { message, isError } = notification;

  if (!message) {
    return null;
  }

  const notificationStyle: React.CSSProperties = {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    width: "300px",
    zIndex: 1000,
    backgroundColor: isError ? "#ff6961" : "#90ee90",
  };

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
