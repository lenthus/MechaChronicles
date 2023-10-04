// backend/routes/api/users.js
const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Body, Head, LeftArm, LeftLeg, Mech, RightArm, RightLeg, Shield, Weapon } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

router.post(
    '',
    validateSignup,
    async (req, res) => {
      const { email, password, username } = req.body;
      const hashedPassword = bcrypt.hashSync(password);
      const level = 1
      const currentXp = 0
      const money = 0
      
      // const weaponOne = await Weapon.create(wepOnjOne)
      // const weaponTwo = await Weapon.create(wepOnjTwo)
      // const currentMech = await Mech.create()
      const user = await User.create({ 
        email, username, hashedPassword, level, currentXp, money,
        Mech:{
          Head:{
            name:"Hasbee MK.1",
            description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
            health: 100,
            armor: 10,
            weight: 10,
            longRange: 10,
            midRange: 10,
            shortRange: 10,
            value: 1000,
            level: 1,
          },
          Body:{
            name:"Hasbee MK.1",
            description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
            health: 100,
            armor: 10,
            weight: 100,
            speed: 10,
            value: 1000,
            level: 1,
          },
          LeftLeg:{
            name:"Hasbee MK.1",
            description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
            health: 100,
            armor: 10,
            weight: 100,
            speed: 10,
            value: 1000,
            level: 1,
          },
          RightLeg:{
            name:"Hasbee MK.1",
            description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
            health: 100,
            armor: 10,
            weight: 100,
            speed: 10,
            value: 1000,
            level: 1,
          },
          LeftArm:{
            name:"Hasbee MK.1",
            description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
            health: 100,
            armor: 10,
            weight: 10,
            value: 1000,
            level: 1,
            Weapon:{
              name:"Hasbee laser MK.1",
              description:"As far as lasers go its not good, but it does make a cool pew pew sound.",
              type: "laser",
              ammo: 10,
              heatGen: 10,
              roll: 1,
              minRange: 0,
              maxRange: 600,
              damage: 4,
              weight: 10,
              value: 1000,
              level: 1,
            }
          },
          RightArm:{
            name:"Hasbee MK.1",
            description:"As far as mech parts go Hasbee products are known for being little better than plastic.",
            health: 100,
            armor: 10,
            weight: 10,
            value: 1000,
            level: 1,
            Weapon:{
              name:"Hasbee Rifle MK.1",
              description:"As far as riffles go its not good, but it does make a cool ack ack sound.",
              type: "ballistic",
              ammo: 10,
              heatGen: 10,
              roll: 2,
              minRange: 0,
              maxRange: 300,
              damage: 2,
              weight: 10,
              value: 1000,
              level: 1,
            }
          }
        }
      });


      const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      await setTokenCookie(res, safeUser);
const theMechs = await Mech.findAll({where:{userId: user.id}})
      return res.json({
        user: safeUser,
        theMechs
      });
    }
  );

module.exports = router;
