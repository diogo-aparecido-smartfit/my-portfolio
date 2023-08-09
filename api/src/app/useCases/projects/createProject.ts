import { Request, Response } from "express";

import { Project } from "../../models/Project";

export async function createProject(req: Request, res: Response) {
  try {
    const {
      date,
      name,
      description,
      imagePath,
      technologies,
      deployLink,
      githubLink,
      category,
    } = req.body;

    const project = await Project.create({
      date,
      name,
      description,
      imagePath,
      technologies,
      deployLink,
      githubLink,
      category,
    });

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
