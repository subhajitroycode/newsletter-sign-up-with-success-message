import { useRef, useState } from "react";

const SubscriptionForm = ({ setIsSubscribed, setEmail }) => {
  const [emailInput, setEmailInput] = useState("");
  const errorMessageRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.trim())) {
      setIsSubscribed(true);
      setEmail(emailInput.trim());
      errorMessageRef.current.style.display = "none";
      emailRef.current.classList.remove("error-input");
      setEmailInput("");
    } else {
      setIsSubscribed(false);
      errorMessageRef.current.style.display = "block";
      emailRef.current.classList.add("error-input");
    }
  };

  return (
    <form className="subscription-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <div className="error-container" ref={errorMessageRef}>
        <p className="error-message">Valid email required</p>
      </div>
      <input
        type="text"
        placeholder="email@company.com"
        id="email"
        ref={emailRef}
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <button className="btn" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default SubscriptionForm;
