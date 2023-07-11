import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="px-8 flex flex-col gap-28">
        <Home />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
