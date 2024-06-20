import mongoose, { Schema, Document } from "mongoose";
import { IRegisterUser } from "@/types/registeruser";

const userRegistrationSchema: Schema<IRegisterUser & Document> = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.altenticatedUsers || mongoose.model<IRegisterUser & Document>("altenticatedUsers", userRegistrationSchema);
export default User;
