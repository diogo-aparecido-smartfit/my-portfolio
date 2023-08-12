import { model, now, Schema } from "mongoose";

export const Project = model(
  "Project",
  new Schema({
    portugueseDate: {
      type: String,
      default: Date.now,
    },
    date: {
      type: String,
    },
    portugueseName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    portugueseDescription: {
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
