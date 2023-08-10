import { Request, Response } from "express";

import { Project } from "../../models/Project";

export async function updateProject(req: Request, res: Response) {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedProject);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
