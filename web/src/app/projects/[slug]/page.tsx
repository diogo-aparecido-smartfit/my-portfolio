import { Metadata } from "next";
import ClientComponent from "./ClientComponent";

export const metadata: Metadata = {
  title: "Experiência | Diogo Marques",
};

export default function Post() {
  return <ClientComponent />;
}
