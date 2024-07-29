import React from "react";
import SubscriptionForm from "./SubscriptionForm";

const Newsletters = () => {
  return (
    <section className="newsletter-container">
      <div className="signup-container">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src="/icon-list.svg" alt="list icon" />
            Product discovery and building what matters
          </li>
          <li>
            <img src="/icon-list.svg" alt="list icon" />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src="/icon-list.svg" alt="list icon" />
            And much more!
          </li>
        </ul>
        <SubscriptionForm />
      </div>
      <div className="image-container">
        <picture>
          <source
            media="(max-width: 650px)"
            srcSet="/illustration-sign-up-mobile.svg"
          />
          <img
            src="illustration-sign-up-desktop.svg"
            alt="illustration of sign up"
          />
        </picture>
      </div>
    </section>
  );
};

export default Newsletters;
