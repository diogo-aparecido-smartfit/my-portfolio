import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../App";
import ProjectCard from "./ProjectCard";
import api from "../services/api";
import ProjectCardLoading from "./ProjectCardLoading";
import { ToastContainer, toast } from "react-toastify";

interface ProjectListProps {
  renderNumber: number;
}

interface Project {
  id: string;
  portugueseDate: string;
  portugueseName: string;
  portugueseDescription: string;
  portugueseView: string;
  image: string;
  date: string;
  name: string;
  description: string;
  view: string;
  deploy: string;
  technologies: JSX.Element[];
}

export default function ProjectList({ renderNumber }: ProjectListProps) {
  const [data, setData] = useState<Project[]>();
  const [loading, setLoading] = useState(true);
  const language = useContext(LanguageContext);

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />;
        setLoading(false);
      });
  }, []);

  console.log(loading);

  return (
    <article className="flex flex-col gap-8">
      {loading ? (
        <ProjectCardLoading />
      ) : (
        data
          ?.slice(0, renderNumber)
          .map((project) => (
            <ProjectCard
              key={project.id}
              projects={project}
              language={language}
            />
          ))
      )}
    </article>
  );
}
