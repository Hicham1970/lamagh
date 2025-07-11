import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}, { timestamps: true, collection: 'contacts' }); // Added collection option

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);