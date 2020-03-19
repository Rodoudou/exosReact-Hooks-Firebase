import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "./../firebase/context";
import Message from "./Message";

const MessageListe = () => {
  const { firebase } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);

  const handleSnapshot = snapshot => {
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMessages(messages);
  };

  useEffect(() => {
    const getMessages = () => {
      firebase.db
        .collection("messages") // creation collection "messages"
        .orderBy("createAt", "desc") // classer les messages par ordre
        .onSnapshot(handleSnapshot);
    };
    return getMessages();
  }, [firebase]);

  return (
    <div>
      {messages.map((message, i) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
export default MessageListe;
