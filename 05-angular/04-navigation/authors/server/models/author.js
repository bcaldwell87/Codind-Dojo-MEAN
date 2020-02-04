const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please enter a name'],
      minLength: 3,
    },
  },
  { timestamps: true }
);

mongoose.model('Author', authorSchema);
