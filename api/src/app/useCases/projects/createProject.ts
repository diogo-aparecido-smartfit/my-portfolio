import { Request, Response } from "express";
import { Project } from "../../models/Project";
import { bucket } from "../../firebaseConfig";

export async function createProject(req: Request, res: Response) {
  try {
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).send("No file uploaded.");
    }

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

    // Faz o upload da imagem no Firebase Cloud Storage
    const filePath = `uploads/${Date.now()}-${imageFile.originalname}`;
    const bucketFile = bucket.file(filePath);

    await bucketFile.save(imageFile.buffer, {
      metadata: {
        contentType: imageFile.mimetype,
      },
    });

    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(filePath)}?alt=media`;

    const product = await Project.create({
      date,
      name,
      description,
      image: imageUrl,
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
