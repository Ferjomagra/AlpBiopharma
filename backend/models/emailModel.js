const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  from_name: { type: String, required: true },
  from_email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;