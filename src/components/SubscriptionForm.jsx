import { useEffect, useRef, useState } from "react";
import SuccessMessage from "./SuccessMessage";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const errorMessageRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (isSubscribed) {
      console.log(isSubscribed);
    }
  }, [isSubscribed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.trim())) {
      setIsSubscribed(true);
      errorMessageRef.current.style.display = "none";
      emailRef.current.classList.remove("error-input");
      setEmail("");
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default SubscriptionForm;
