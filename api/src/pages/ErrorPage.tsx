import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center gap-2 p-4"
      id="contact"
    >
      <h1>
        Ops... <i>{error.statusText || error.message}</i>
      </h1>
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
