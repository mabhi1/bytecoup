interface EmailTemplateProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

export const MessageTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ senderEmail, senderName, message }) => {
  return (
    <div>
      <div>Hello, Admin!</div>
      <p>
        You got a new bytecoup enquiry from{" "}
        <span style={{ color: "rgb(30, 41, 59)", textDecoration: "underline" }}>
          {senderName} ({senderEmail})
        </span>
        . You can reply to this email to send a response.
      </p>
      <p style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}>{message}</p>
      <p>Thanks&#44;</p>
      <img src="https://www.bytecoup.com/logo-small.png" alt="Bytecoup" style={{ width: "30px", aspectRatio: "1/1" }} />
      <div>Bytecoup team</div>
    </div>
  );
};
