import { Request, Response } from "express";

import { Project } from "../../models/Project";

export async function listProjects(req: Request, res: Response) {
  try {
    const projects = await Project.find();

    res.json(projects);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
