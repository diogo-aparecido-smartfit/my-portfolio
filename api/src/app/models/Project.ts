import { model, now, Schema } from "mongoose";

export const Project = model(
  "Project",
  new Schema({
    date: {
      type: Date,
      default: Date.now,
    },
    time: {
      type: String,
    },
    englishTime: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    englishName: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    englishDescription: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
    },
    deployLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  })
);
