import mongoose from "mongoose";

export const createDbConnection = (dbURL: string) => {
  mongoose.connect(dbURL);
  mongoose.connection.on("error", () => console.log("error on db conecction"));
  mongoose.connection.once("connected", () => console.log("db connected"));
};
