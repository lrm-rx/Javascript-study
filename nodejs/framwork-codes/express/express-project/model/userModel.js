const mongoose = require('mongoose')
const md5 = require('md5')
const basicModel = require('./basicModel')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value),
    select: false
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  avatar: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  cover:{
    type: String,
    default: null
  },
  channeldes:{
    type: String,
    default: null
  },
  subscribeCount:{
    type:Number,
    default:0
  },
  ...basicModel
})

module.exports = userSchema