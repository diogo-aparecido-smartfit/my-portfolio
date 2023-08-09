import { Router } from "express";
import path from "node:path";
import { listProjects } from "./app/useCases/projects/listProjects";
import { createProject } from "./app/useCases/projects/createProject";
import multer from "multer";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List projects
router.get("/projects", listProjects);

// Create project
router.post("/projects", upload.single("image"), createProject);

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
