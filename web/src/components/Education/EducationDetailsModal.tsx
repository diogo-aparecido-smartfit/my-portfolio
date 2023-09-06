import { PiPuzzlePieceFill } from "react-icons/pi";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosClose,
} from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { BiSolidLockAlt } from "react-icons/bi";
import safariIcon from "../../../public/icons/safari-icon.svg";
import { LiaArrowCircleDownSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useContext } from "react";
import { DarkModeContext } from "../../App";

interface EducationDetailsModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  education: {
    id: string;
    date: string;
    enDate: string;
    name: string;
    enName: string;
    description: JSX.Element;
    enDescription: JSX.Element;
    shortDescription: string;
    enShortDescription: string;
    exampleUrl: string;
    image: string;
  };
}

export default function EducationDetails({
  setIsModalOpen,
  education,
}: EducationDetailsModalProps) {
  const theme = useContext(DarkModeContext);
  const { i18n } = useTranslation();
  const language = i18n.language;

  const handleClickOutside = (event: any) => {
    if (event.target === document.querySelector("#modal")) {
      setIsModalOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 27) {
      setIsModalOpen(false);
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return (
    <>
      <div
        id="modal"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl bg-zinc-900/90"
      >
        <div className="relative mx-2 lg:scale-100 w-auto my-6 max-w-7xlxl ">
          {/*content*/}
          <div
            className={`border-0 rounded-2xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none ${
              theme === true ? "bg-[#464646]" : "bg-[#f8f8f8]"
            }`}
          >
            {/*header*/}
            <header
              className={`hidden md:flex md:min-w-[752px] lg:min-w-[810px] items-center justify-around h-[52px] rounded-t-xl ${
                theme === true ? "bg-[#363636]" : "bg-white"
              }`}
            >
              <div
                className={`flex absolute w-full items-center justify-center cursor-text  ${
                  theme === true
                    ? "bg-[#F1F1F133] text-[#F1F1F1]"
                    : "bg-black/10 text-[#3D3D3D]"
                } max-w-md rounded-md  h-[28px]`}
              >
                <h1 className="flex items-center gap-1 text-sm font-normal ">
                  {education.exampleUrl}
                  <BiSolidLockAlt />
                </h1>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex gap-2 items-center ml-4 transition-all">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="group/edit cursor-default flex items-center justify-center bg-[#ED6A5F] rounded-full w-[12px] h-[12px] hover:brightness-50 transition-all"
                    >
                      <span className="hidden group-hover/edit:flex font-bold text-red-700">
                        <IoIosClose />
                      </span>
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="group/edit cursor-default flex items-center justify-center bg-[#F5BF4F] rounded-full w-[12px] h-[12px] hover:brightness-50 transition-all"
                    >
                      <span className="hidden group-hover/edit:flex font-bold text-yellow-700">
                        -
                      </span>
                    </button>
                    <button className="group/edit cursor-default flex items-center justify-center bg-[#61C554] rounded-full w-[12px] h-[12px] hover:brightness-50 transition-all"></button>
                  </div>
                  <div className="flex gap-1 ml-6 items-center">
                    <img
                      className={`cursor-pointer transition-all ${
                        theme === true ? "brightness-100" : "brightness-[.2]"
                      }`}
                      src={safariIcon}
                      alt="icon"
                    />
                    <div className="w-[1px] h-[18px] bg-white/20 "></div>
                    <span className="text-xs hover:text-[#3478F6] cursor-pointer transition-all">
                      <IoIosArrowDown />
                    </span>
                  </div>
                  <div className="flex ml-1 transition-all hover:text-[#3478F6]  cursor-pointer">
                    <IoIosArrowBack />
                  </div>
                </div>

                <div className="flex gap-3 items-center ml-2 mr-4">
                  <button className=" transition-all hover:text-[#3478F6]  cursor-pointer">
                    <IoShareOutline />
                  </button>
                  <button className=" transition-all hover:text-[#3478F6]  cursor-pointer">
                    <LiaArrowCircleDownSolid />
                  </button>
                  <button className=" transition-all hover:text-[#3478F6]  cursor-pointer">
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </header>
            {/*body*/}
            <div
              className={`relative p-6 flex-auto max-h-[70vh] xl:max-h-[35rem]  overflow-y-auto rounded-t-xl md:rounded-t-none md:rounded-b-xl justify-center items-center text-center ${
                theme === true ? "" : "bg-[#f8f8f8]"
              }`}
            >
              <header>
                <div className="flex justify-center max-w-sm md:max-w-none">
                  <img
                    className="rounded-2xl md:max-w-sm"
                    src={education.image}
                    max-width="100%"
                    alt="Imagem do projeto"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-xs opacity-50">
                    {language === "pt-BR" ? education.date : education.enDate}
                  </p>
                  <h1 className="font-medium text-lg">
                    {language === "pt-BR" ? education.name : education.enName}
                  </h1>
                </div>
              </header>
              <div className="flex items-center justify-center mt-4 w-full ">
                <p className="max-w-xs leading-relaxed text-left">
                  {language === "pt-BR"
                    ? education.description
                    : education.enDescription}
                </p>
              </div>
            </div>

            {/* mobile header */}
            <header
              className={`md:hidden w-full flex items-center flex-col h-[132px]  rounded-b-xl shadow-mobileNavShadow z-50 ${
                theme ? "bg-[#313131]" : "bg-white"
              }`}
            >
              <div
                className={`flex mt-[7px] max-w-[334px] min-w-[334px] items-center justify-between px-3 shadow-lg h-[44px] rounded-xl ${
                  theme ? "bg-[#4B4B4B]" : "bg-[#FDFDFD]"
                }`}
              >
                <p className="text-white flex items-center">
                  <span className="text-xs ">A</span>A
                  <span className="ml-1 text-[#8E8E92]">
                    <PiPuzzlePieceFill />
                  </span>
                </p>
                <div className="flex items-center mr-7 ">
                  <span className="text-[#ABABB0] mr-1">
                    <BiSolidLockAlt />
                  </span>
                  <h1 className="text-base">{education.exampleUrl}</h1>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="hover:brightness-50 text-2xl"
                >
                  <IoIosClose />
                </button>
              </div>
              <div className="flex flex-row justify-around w-full mt-3">
                <button className="text-[#5A91F7] hover:brightness-75 text-xl">
                  <IoIosArrowBack />
                </button>
                <button className="text-[#5A91F7] hover:brightness-75 text-xl">
                  <IoIosArrowForward />
                </button>
                <button className="text-[#5A91F7] hover:brightness-75 text-xl">
                  <IoShareOutline />
                </button>
                <button className="text-[#5A91F7] hover:brightness-75 text-xl">
                  <HiOutlineBookOpen />
                </button>
                <button className="text-[#5A91F7] hover:brightness-75 text-xl">
                  <FiCopy />
                </button>
              </div>
              <div className="mt-7 bg-white w-[134px] h-1 rounded-full"></div>
            </header>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}