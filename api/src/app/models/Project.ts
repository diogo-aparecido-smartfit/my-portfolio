import { model, now, Schema } from "mongoose";

export const Project = model(
  "Project",
  new Schema({
    date: {
      type: String,
    },
    portugueseDate: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    portugueseName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    portugueseDescription: {
      type: String,
      required: true,
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
