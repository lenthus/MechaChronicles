'use strict';

/** @type {import('sequelize-cli').Migration} */
const {User, Weapon} = require('../models')
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const userWeapons = [
  {
    username: 'Shalakar',
    weapons: [{
      name:"Boyce Fist MK.1",
      description:"Sometimes one good punch is all it takes",
      type: "missle",
      ammo: 20,
      heatGen: -50,
      roll: 10,
      minRange: 0,
      maxRange: 300,
      damage: 2,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
      name:"Boyce Cannon MK.1",
      description:"If I attack its going to hurt",
      type: "missle",
      ammo: 10,
      heatGen: 20,
      roll: 1,
      minRange: 0,
      maxRange: 300,
      damage: 6,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
      name:"Boyce Missle Launcher MK.1",
      description:"I love the silence that follows explosions",
      type: "missle",
      ammo: 10,
      heatGen: 20,
      roll: 6,
      minRange: 0,
      maxRange: 900,
      damage: 1,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
  },]
  },
  {
    username: 'michaeltest',
    weapons: [    {
      name:"Shuler Sniper Lazer MK.1",
      description:"The suns rays are beautiful, but dont hold them too closely.",
      type: "lazer",
      ammo: 10,
      heatGen: 30,
      roll: 1,
      minRange: 600,
      maxRange: 900,
      damage: 12,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
      name:"Shuler Rifle MK.1",
      description:"Few survive the heat of devotion.",
      type: "lazer",
      ammo: 10,
      heatGen: 10,
      roll: 3,
      minRange: 0,
      maxRange: 900,
      damage: 2,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
      name:"Shuler Lazer Launcher MK.1",
      description:"The light of the moon shone down, and the unworthy were purified.",
      type: "lazer",
      ammo: 10,
      heatGen: 30,
      roll: 6,
      minRange: 0,
      maxRange: 900,
      damage: 2,
      weight: 15,
      value: 2000,
      userId: null,
      level: 1,
  }]
  },
  {
    username: 'GaimerGai',
    weapons: [    {
      name:"Richards Rifle MK.1",
      description:"Say hello to my little friend",
      type: "balistic",
      ammo: 15,
      heatGen: 10,
      roll: 3,
      minRange: 0,
      maxRange: 300,
      damage: 2,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
  },
  {
      name:"Richards Gattling Gun MK.1",
      description:"He who shoots 100 times never misses.",
      type: "balistic",
      ammo: 15,
      heatGen: 20,
      roll: 15,
      minRange: 0,
      maxRange: 600,
      damage: 1,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
  },
  {
      name:"Richards Sniper Riffle MK.1",
      description:"Not to be that guy, but my sniper riffles shoot twice.",
      type: "balistic",
      ammo: 15,
      heatGen: 20,
      roll: 2,
      minRange: 0,
      maxRange: 900,
      damage: 8,
      weight: 10,
      value: 1500,
      userId: null,
      level: 1,
  },]
  },
  {
    username: 'Store',
    weapons:[{
      name:"Boyce Fist MK.1",
      description:"Sometimes one good punch is all it takes",
      type: "missle",
      ammo: 20,
      heatGen: -50,
      roll: 10,
      minRange: 0,
      maxRange: 300,
      damage: 2,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
      name:"Boyce Cannon MK.1",
      description:"If I attack its going to hurt",
      type: "missle",
      ammo: 10,
      heatGen: 20,
      roll: 1,
      minRange: 0,
      maxRange: 300,
      damage: 6,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
      name:"Boyce Missle Launcher MK.1",
      description:"I love the silence that follows explosions",
      type: "missle",
      ammo: 10,
      heatGen: 20,
      roll: 6,
      minRange: 0,
      maxRange: 900,
      damage: 1,
      weight: 8,
      value: 2000,
      userId: null,
      level: 1,
  },
  {
    name:"Shuler Sniper Lazer MK.1",
    description:"The suns rays are beautiful, but dont hold them too closely.",
    type: "lazer",
    ammo: 10,
    heatGen: 30,
    roll: 1,
    minRange: 600,
    maxRange: 900,
    damage: 12,
    weight: 15,
    value: 2000,
    userId: null,
    level: 1,
},
{
    name:"Shuler Rifle MK.1",
    description:"Few survive the heat of devotion.",
    type: "lazer",
    ammo: 10,
    heatGen: 10,
    roll: 3,
    minRange: 0,
    maxRange: 900,
    damage: 2,
    weight: 15,
    value: 2000,
    userId: null,
    level: 1,
},
{
    name:"Shuler Lazer Launcher MK.1",
    description:"The light of the moon shone down, and the unworthy were purified.",
    type: "lazer",
    ammo: 10,
    heatGen: 30,
    roll: 6,
    minRange: 0,
    maxRange: 900,
    damage: 2,
    weight: 15,
    value: 2000,
    userId: null,
    level: 1,
},
{
  name:"Richards Rifle MK.1",
  description:"Say hello to my little friend",
  type: "balistic",
  ammo: 15,
  heatGen: 10,
  roll: 3,
  minRange: 0,
  maxRange: 300,
  damage: 2,
  weight: 10,
  value: 1500,
  userId: null,
  level: 1,
},
{
  name:"Richards Gattling Gun MK.1",
  description:"He who shoots 100 times never misses.",
  type: "balistic",
  ammo: 15,
  heatGen: 20,
  roll: 15,
  minRange: 0,
  maxRange: 600,
  damage: 1,
  weight: 10,
  value: 1500,
  userId: null,
  level: 1,
},
{
  name:"Richards Sniper Riffle MK.1",
  description:"Not to be that guy, but my sniper riffles shoot twice.",
  type: "balistic",
  ammo: 15,
  heatGen: 20,
  roll: 2,
  minRange: 0,
  maxRange: 900,
  damage: 8,
  weight: 10,
  value: 1500,
  userId: null,
  level: 1,
},]
    }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Weapons';


for (let userWeapon of userWeapons){
  const {username, weapons} = userWeapon
  const theUser = await User.findOne({where:{username}})

  for( let weaponInfo of weapons){
    await Weapon.create({ ...weaponInfo, userId: theUser.id})
  }
}

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Weapons';

    for (let userWeapon of userWeapons){
      const {username, weapons} = userWeapon
      const theUser = await User.findOne({where:{username}})
    
      for( let weaponInfo of weapons){
        await Weapon.destroy({where:{ ...weaponInfo, userId: theUser.id}})
      }
    }
  }
};