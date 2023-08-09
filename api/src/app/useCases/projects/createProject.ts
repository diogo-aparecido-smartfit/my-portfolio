import { Request, Response } from "express";

import { Project } from "../../models/Project";

export async function createProject(req: Request, res: Response) {
  try {
    // const {
    //   date,
    //   name,
    //   description,
    //   imagePath,
    //   technologies,
    //   deployLink,
    //   githubLink,
    //   category,
    // } = req.body;

    // const project = await Project.create({
    //   date,
    //   name,
    //   description,
    //   imagePath,
    //   technologies,
    //   deployLink,
    //   githubLink,
    //   category,
    // });

    // res.status(201).json(project);

    const image = req.file?.filename;

    const {
      date,
      name,
      description,
      technologies,
      deployLink,
      githubLink,
      category,
    } = req.body;

    const product = await Project.create({
      date,
      name,
      description,
      image,
      technologies,
      deployLink,
      githubLink,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
