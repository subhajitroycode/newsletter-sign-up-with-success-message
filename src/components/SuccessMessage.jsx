const SuccessMessage = ({ email }) => {
  return (
    <div style={successMessageStyle}>
      <p>Thanks for subscribing!</p>
      <p>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button onClick={() => window.location.reload()}>Dismiss message</button>
    </div>
  );
};

const successMessageStyle = {
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  maxWidth: "400px",
  margin: "auto",
  marginTop: "50px",
};

export default SuccessMessage;
