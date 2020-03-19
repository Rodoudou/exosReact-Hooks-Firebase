import React, { useContext } from "react";
import FirebaseContext from "./../firebase/context";
import {
  FiHeart,
  FiX,
  FiMessageCircle,
  FiUpload,
  FiRefreshCw
} from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import IconContainer from "./IconContainer";
const Message = ({ message }) => {
  const { user } = useContext(FirebaseContext);
  const isOwner = user && user.uid === message.postedBy.id;
  return (
    <div className="message-container">
      <div>
        <img className="profil-picture" src={message.photo} alt="Profile" />
      </div>
      <div className="message">
        <header>
          <h3>{message.postedBy.name} </h3>
          <span>.{formatDistanceToNow(message.createAt, { locale: fr })}</span>
        </header>
        <p>{message.message}</p>
        {user && (
          <footer>
            <IconContainer color="blue">
              <FiMessageCircle />
            </IconContainer>

            <IconContainer color="blue">
              <FiRefreshCw />
            </IconContainer>

            <IconContainer color="red" count={message.likes.length}>
              <FiHeart />
            </IconContainer>

            <IconContainer color="blue">
              <FiUpload />
            </IconContainer>

            {isOwner && (
              <IconContainer color="blue">
                <FiX />
              </IconContainer>
            )}
          </footer>
        )}
      </div>
    </div>
  );
};
export default Message;
