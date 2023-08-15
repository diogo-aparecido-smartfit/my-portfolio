import Lottie from "lottie-react";
import { useRef } from "react";
import { Link, useRouteError } from "react-router-dom";
import notFoundIcon from "../../public/icons/404-icon.json";
import errorIcon from "../../public/icons/error-icon.json";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  const errorRef = useRef(null);
  const notFoundRef = useRef(null);

  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center gap-2 p-4"
      id="contact"
    >
      <h1>
        Ops... <i>{error.statusText || error.message}</i>
      </h1>
      {error.statusText === "Not Found" ? (
        <Lottie
          lottieRef={notFoundRef}
          className="w-48 h-48"
          animationData={notFoundIcon}
          loop={true}
          autoplay={true}
        />
      ) : (
        <Lottie
          lottieRef={errorRef}
          className="w-48 h-48"
          animationData={errorIcon}
          loop={true}
          autoplay={true}
        />
      )}
      <Link to={`/`}>
        <a className="group/edit flex flex-row font-medium text-base max-w-fit hover:brightness-50 transition-all gap-2">
          Back to home
          <span className="group-hover/edit:translate-x-1 transition-all">
            →
          </span>
        </a>
      </Link>
    </section>
  );
}
