import React from "react";

const Contact = () => {
  const form = () => {
    return (
      <>
        <form className="form">
          <div className="input-field">
            <input type="text" name="name" id="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email" name="email" id="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <textarea
              name="message"
              className="materialize-textarea"
              id="message"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button
            type="button"
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
                <div id="contact-aside" className="col s12 m5">
                  <div className="valign-wrapper">
                    Drop some words by filling the form
                  </div>
                </div>
                <div
                  id="contact-form-container"
                  className="col s12 m6 offset-m1"
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
