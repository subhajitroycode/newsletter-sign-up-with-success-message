const SuccessMessage = ({ email }) => {
  return (
    <section className="success-container">
      <img src="/icon-success.svg" alt="success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="btn" onClick={() => window.location.reload()}>
        Dismiss message
      </button>
    </section>
  );
};

export default SuccessMessage;
