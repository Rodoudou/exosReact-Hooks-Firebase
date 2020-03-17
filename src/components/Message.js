import React from "react";
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
const Message = () => {
  return (
    <div className="message-container">
      <div>
        <img
          className="profil-picture"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHMWF7hsdeysA/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=PAwjmKbDUCIf3RZOhPzTJOBOzr0qpPDsyR32VNxhDQs"
          alt="Profile"
        />
      </div>
      <div className="message">
        <header>
          <h3>Amrani Redouane </h3>
          <span>.{formatDistanceToNow(1584445587237, { locale: fr })}</span>
        </header>
        <p>
          Lorem ipsumyrytyuuiogfdrsdfghioyètrutfjgkjljuyotiyfujhkjlkjiyfgjvhbjlj
          tdfghjopuoyuigyklkjmkpuoyuihjmkpiouh.
        </p>
        <footer>
          <IconContainer color="blue">
            <FiMessageCircle />
          </IconContainer>

          <IconContainer color="blue">
            <FiRefreshCw />
          </IconContainer>

          <IconContainer color="red" count="4">
            <FiHeart />
          </IconContainer>

          <IconContainer color="blue">
            <FiUpload />
          </IconContainer>

          <IconContainer color="blue">
            <FiX />
          </IconContainer>
        </footer>
      </div>
    </div>
  );
};
export default Message;
