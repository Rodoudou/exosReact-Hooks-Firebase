import React from "react";

const MessageForm = ({
  handleSubmit,
  handleKeyDown,
  handleChange,
  values,
  errors
}) => {
  return (
    <form onSubmit={handleSubmit} className="message-form-container">
      <div className="message-form">
        <div>
          <img
            className="profil-picture"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHMWF7hsdeysA/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=PAwjmKbDUCIf3RZOhPzTJOBOzr0qpPDsyR32VNxhDQs"
            alt="Profile"
          />
        </div>
        <textarea
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          name="message"
          value={values.message}
          placeholder="Quoi de neuf ?"
        />
      </div>
      {/*       {errors.message && <p className="error-text">{errors.message}</p>} */}
      <footer>
        <p>{280 - values.message.length}</p>
        <button
          type="submit"
          disabled={values.message.length > 280 || values.message.length === 0}
        >
          Tweeter
        </button>
      </footer>
    </form>
  );
};

export default MessageForm;
