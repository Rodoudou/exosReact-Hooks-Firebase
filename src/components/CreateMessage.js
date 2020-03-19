import React, { useContext } from "react";
import { FirebaseContext } from "../firebase";
import MessageForm from "./MessageForm";
import useForm from "../hooks/useForm";
import validateMessage from "./../utils/validateMessage";

const INITIAL_STATE = {
  message: ""
};

const CreateMessage = () => {
  const { user } = useContext(FirebaseContext);

  const handleCreateMessage = () => {
    const { message } = values;
    const newMessage = {
      message,
      postedBy: {
        id: user.uid,
        name: user.displayName
      },
      likes: [],
      createAt: Date.now(),
      photo: user.photoURL
    };
    console.log("newMessage dans createMessage=>", newMessage);
  };
  const { handleSubmit, handleKeyDown, handleChange, values, errors } = useForm(
    INITIAL_STATE,
    validateMessage,
    handleCreateMessage
  );
  return (
    user && (
      <MessageForm
        handleKeyDown={handleKeyDown}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        errors={errors}
      />
    )
  );
};

export default CreateMessage;
