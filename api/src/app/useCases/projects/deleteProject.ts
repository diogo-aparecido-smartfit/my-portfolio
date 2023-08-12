import { Request, Response } from "express";
import { bucket } from "../../firebaseConfig";
import path from "path";

import { Project } from "../../models/Project";

export async function deleteProject(req: Request, res: Response) {
  try {
    const projectId = req.params.id;

    // Fetch project details to get the image URL
    const project = await Project.findById(projectId);

    if (!project) {
      return res.sendStatus(404); // Project not found
    }

    // Delete image from Firebase Storage
    if (project.image) {
      const imageUrl = bucket.file(project.image).name;
      const imageName = path
        .basename(decodeURIComponent(imageUrl))
        .replace(/\?alt=media$/, "");
      await bucket.file("uploads/" + imageName).delete();
    }

    // Delete the project from the database
    await Project.findByIdAndDelete(projectId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
