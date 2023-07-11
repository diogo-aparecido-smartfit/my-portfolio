export default function Contact() {
  return (
    <section
      className="flex flex-col items-center text-center gap-2 p-4 mb-16"
      id="contact"
    >
      <h1 className="text-white opacity-70 text-base">Contato</h1>

      <ul className="flex flex-row gap-4 underline text-[15px]">
        <li className="hover:brightness-50">
          <a href="">LinkedIn</a>
        </li>
        <li className="hover:brightness-50">
          <a href="">Instagram</a>
        </li>
        <li className="hover:brightness-50">
          <a href="">GitHub</a>
        </li>
        <li className="hover:brightness-50">
          <a href="">Email</a>
        </li>
      </ul>
    </section>
  );
}
