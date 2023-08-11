import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password_digest: { type: String, required: true },
  favoriteCocktails: [{ type: Schema.Types.ObjectId, ref: "favoriteCocktails" }]
}, { timestamps: true });

export default mongoose.model("users", UserSchema);