import { Request, Response } from "express";

import { Project } from "../../models/Project";

export async function createProject(req: Request, res: Response) {
  try {
    const image = req.file?.filename;

    const technologiesInput = req.body.technologies;
    const technologiesArray = technologiesInput
      .split(",")
      .map((tech: string) => tech.trim());

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
      technologies: technologiesArray,
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
