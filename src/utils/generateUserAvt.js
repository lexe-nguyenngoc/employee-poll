import userAvt from "../assets/images/user_avt.png";

const generateUserAvt = (avatarURL) => {
  return avatarURL || userAvt;
};

export default generateUserAvt;
