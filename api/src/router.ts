import { Router } from "express";
import { listProjects } from "./app/useCases/projects/listProjects";
import { createProject } from "./app/useCases/projects/createProject";

export const router = Router();

// List projects
router.get("/projects", listProjects);

// Create project
router.post("/projects", createProject);

// Update project
router.put("/projects/:id", (req, res) => {
  res.send("OK");
});

// Delete project
router.get("/projects/:id", (req, res) => {
  res.send("OK");
});

// List projects by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});
