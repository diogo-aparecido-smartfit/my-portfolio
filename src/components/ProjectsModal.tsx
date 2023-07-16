import { Dispatch, SetStateAction, useContext } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projects";
import { LanguageContext } from "../App";

interface ProjectsModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function ProjectsModal({ setShowModal }: ProjectsModalProps) {
  const language = useContext(LanguageContext);

  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-white">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Project List</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}

              <div className="flex flex-col gap-8 my-4 p-6">
                {/* <ProjectCard language={language} projects={projects} /> */}
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    projects={project}
                    language={language}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 "></div>
      </>
    </>
  );
}
