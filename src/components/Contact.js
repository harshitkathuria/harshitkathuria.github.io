import React from "react";
import { useForm } from "@formspree/react";
import { action } from "../config";

const Contact = () => {
  const [state, handleSubmit] = useForm(action);
  if (state.succeeded) {
    document.querySelector("form input#name").value = "";
    document.querySelector("form input#email").value = "";
    document.querySelector("form #message").value = "";
    document.querySelector("form button").innerHTML =
      "<i class='material-icons left'>check</i>Sent";
    setTimeout(() => {
      document.querySelector("form button").innerHTML =
        "<i class='material-icons left'>send</i>Send";
    }, 2000);
  }

  const form = () => {
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" name="name" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <textarea
              name="message"
              className="materialize-textarea"
              id="message"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button
            type="submit"
            className="btn-large white black-text waves-effect waves-light"
          >
            <i className="material-icons left">send</i>Send
          </button>
        </form>
      </>
    );
  };

  return (
    <div id="contact" className="section">
      <div className="row center">
        <div className="col s12">
          <div className="heading-primary">Contact Me</div>
          <div className="subtitle-container">
            <p className="subtitle">Would love to talk with you.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div id="contact-card" className="card black white-text">
            <div className="card-content">
              <div className="row">
                <div id="contact-aside" className="col s12 l5">
                  <div>
                    Have something to say?
                    <br />
                    <div className="small">
                      Drops some words by filling the form
                    </div>
                  </div>
                </div>
                <div
                  id="contact-form-container"
                  className="col s12 l6 offset-l1"
                >
                  {form()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
