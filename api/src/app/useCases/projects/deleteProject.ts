import { Request, Response } from "express";

import { Project } from "../../models/Project";

export async function deleteProject(req: Request, res: Response) {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
