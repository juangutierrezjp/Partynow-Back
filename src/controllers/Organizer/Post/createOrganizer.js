const {Organizer } = require("../../../db");
require("dotenv").config();
const { EMAIL_ADMIN, PASS_ADMIN } = process.env;


const createOrganizer = async ({sub, email,name, photo, password}) => {
  const organizer = await Organizer.findOne({ where: { sub: sub } });
  const hashNum = 10;

  if (user) {
    return null;
  }

  const newObjUser = {
    sub,
    email,
    name,
    photo
  };

  if (password !== undefined) {
    newObjUser.password = password;

    //console.log('SOY PASSWORD', password);
    if (newObjUser.email === EMAIL_ADMIN && newObjUser.password === PASS_ADMIN) {
      newObjUser.rol = "superAdmin";
    }
    const hashPassword = await bcrypt.hash(newObjUser.password, hashNum);
    newObjUser.password = hashPassword;
  }

  const newUser = await User.create(newObjUser);
  const findProfile = await Profile.findOne({ where: { userSub: sub } });

  if (!findProfile) {
    await Profile.create({ userSub: sub });
  }

  await sendRegisterEmail(newUser);
  return newUser;
};

module.exports = createOrganizer;