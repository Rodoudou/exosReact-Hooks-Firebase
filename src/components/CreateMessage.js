import React from "react";
import MessageForm from "./MessageForm";
import useForm from "../hooks/useForm";
import validateMessage from "./../utils/validateMessage";

const INITIAL_STATE = {
  message: ""
};

const CreateMessage = () => {
  const handleCreateMessage = () => {
    const { message } = values;
    const newMessage = {
      message,
      postedBy: {
        id: "123456",
        name: "Redouane Amrani"
      },
      likes: [],
      createAt: Date.now(),
      photo: `https://media-exp1.licdn.com/dms/image/C4D03AQHMWF7hsdeysA/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=PAwjmKbDUCIf3RZOhPzTJOBOzr0qpPDsyR32VNxhDQs`
    };
    console.log(newMessage);
  };
  const { handleSubmit, handleKeyDown, handleChange, values } = useForm(
    INITIAL_STATE,
    validateMessage,
    handleCreateMessage
  );
  return (
    <MessageForm
      handleKeyDown={handleKeyDown}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
    />
  );
};

export default CreateMessage;
