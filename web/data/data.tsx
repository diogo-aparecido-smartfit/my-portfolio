import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiDotnet } from "react-icons/si";

export const projects = [
  {
    id: "pr1",
    date: "2023 - present",
    enDate: "2023 - present",
    name: "Meu portfólio pessoal",
    enName: "My personal portfolio",
    description: (
      <div className="data-styles">
        <p>
          Desenvolvi um portfólio pessoal utilizando ReactJS, TypeScript e
          TailwindCSS. O portfólio é acessível pelo PC ou mobile e conta com as
          seguintes funcionalidades:
        </p>
        <ul>
          <li>
            <strong>Menu de navegação e interação personalizado</strong>: O site
            possui um sistema de commmand-menu personalizado para aprimorar a
            experiência do usuário.
          </li>
          <li>
            <strong>Lista de projetos</strong>: Os projetos são exibidos em uma
            lista com título, descrição, imagem e data de criação.
          </li>
          <li>
            <strong>Detalhes do projeto</strong>: Ao clicar em um projeto, é
            exibida uma página com mais informações, incluindo uma descrição
            detalhada, uma galeria de imagens do projeto e links para os
            repositórios dos projetos.
          </li>
          <li>
            <strong>Adicionar, editar e deletar projeto</strong>: Eu posso
            adicionar, editar e deletar novos projetos no portfólio através do
            back-end criado em NodeJS.
          </li>
        </ul>
        <p>As tecnologias utilizadas no projeto WEB foram:</p>
        <ul>
          <li>
            <strong>ReactJS</strong>: A base do front-end, proporcionando uma
            interface interativa e dinâmica.
          </li>
          <li>
            <strong>TypeScript</strong>: Fortalece o código JavaScript,
            adicionando tipagem estática para maior segurança e manutenção.
          </li>
          <li>
            <strong>TailwindCSS</strong>: Facilita a estilização e a
            responsividade, permitindo um design atraente.
          </li>
          <li>
            <strong>Axios</strong>: Utilizado para fazer requisições à API
            personalizada desenvolvida para o projeto.
          </li>
          <li>
            <strong>Kbar-menu</strong>: Um menu de comandos de navegação que
            simplifica a interação com diferentes seções da página, incluindo a
            capacidade de alternar entre temas e idiomas.
          </li>
          <li>
            <strong>react-toastify</strong>: Fornece notificações de alerta
            estilizadas para melhorar a experiência do usuário.
          </li>
          <li>
            <strong>lottie-react</strong>: Permite a incorporação de ícones
            animados para tornar o site mais dinâmico e atrativo.
          </li>
        </ul>
        <p>Já no back-end, as tecnologias utilizadas foram:</p>
        <ul>
          <li>
            <strong>Node.js</strong>: A base do back-end, permitindo a
            construção de uma aplicação robusta e escalável.
          </li>
          <li>
            <strong>TypeScript</strong>: Reforça a qualidade do código
            JavaScript, introduzindo tipagem estática para maior segurança e
            manutenção.
          </li>
          <li>
            <strong>Docker</strong>: Facilita a criação e o gerenciamento de
            contêineres, tornando a implantação e escalabilidade mais
            eficientes.
          </li>
          <li>
            <strong>MongoDB</strong>: Serve como o banco de dados para
            armazenamento de dados, fornecendo flexibilidade para esquemas de
            dados não estruturados.
          </li>
          <li>
            <strong>Express</strong>: Utilizado para criar rotas e manipular
            solicitações HTTP de maneira eficiente, agilizando o desenvolvimento
            do back-end.
          </li>
          <li>
            <strong>Firebase</strong>: Integração poderosa para armazenamento e
            gerenciamento de imagens de projeto, aprimorando a experiência
            visual e de armazenamento de dados.
          </li>
        </ul>
      </div>
    ),
    enDescription: (
      <div className="data-styles">
        <p>
          I have developed a personal portfolio using ReactJS, TypeScript, and
          TailwindCSS. The portfolio is accessible on both PC and mobile devices
          and features the following functionalities:
        </p>
        <ul>
          <li>
            <strong>Custom navigation and interaction menu</strong>: The website
            includes a custom command-menu system to enhance the user
            experience.
          </li>
          <li>
            <strong>List of projects</strong>: Projects are displayed in a list
            with titles, descriptions, images, and creation dates.
          </li>
          <li>
            <strong>Project details</strong>: Clicking on a project reveals a
            page with more information, including a detailed description, a
            gallery of project images, and links to project repositories.
          </li>
          <li>
            <strong>Add, edit, and delete project</strong>: I can add, edit, and
            delete new projects in the portfolio through the back-end created in
            Node.js.
          </li>
        </ul>
        <p>The technologies used in the WEB project were:</p>
        <ul>
          <li>
            <strong>ReactJS</strong>: The foundation of the front-end, providing
            an interactive and dynamic interface.
          </li>
          <li>
            <strong>TypeScript</strong>: Strengthens JavaScript code by adding
            static typing for increased security and maintenance.
          </li>
          <li>
            <strong>TailwindCSS</strong>: Facilitates styling and
            responsiveness, allowing for an attractive design.
          </li>
          <li>
            <strong>Axios</strong>: Used to make requests to the custom API
            developed for the project.
          </li>
          <li>
            <strong>Kbar-menu</strong>: A command navigation menu that
            simplifies interaction with different sections of the page,
            including the ability to switch between themes and languages.
          </li>
          <li>
            <strong>react-toastify</strong>: Provides stylized alert
            notifications to improve the user experience.
          </li>
          <li>
            <strong>lottie-react</strong>: Allows the incorporation of animated
            icons to make the site more dynamic and appealing.
          </li>
        </ul>
        <p>As for the back-end, the technologies used were:</p>
        <ul>
          <li>
            <strong>Node.js</strong>: The foundation of the back-end, enabling
            the construction of a robust and scalable application.
          </li>
          <li>
            <strong>TypeScript</strong>: Reinforces the quality of JavaScript
            code by introducing static typing for increased security and
            maintenance.
          </li>
          <li>
            <strong>Docker</strong>: Facilitates container creation and
            management, making deployment and scalability more efficient.
          </li>
          <li>
            <strong>MongoDB</strong>: Serves as the database for data storage,
            providing flexibility for unstructured data schemas.
          </li>
          <li>
            <strong>Express</strong>: Used to create routes and handle HTTP
            requests efficiently, streamlining back-end development.
          </li>
          <li>
            <strong>Firebase</strong>: Powerful integration for storing and
            managing project images, enhancing the visual and data storage
            experience.
          </li>
        </ul>
      </div>
    ),
    shortDescription:
      "Meu portfólio pessoal feito utilizando ReactJS, TypeScript e TailwindCSS. O portfólio possui um back-end básico com funções de CRUD para gerenciar os projetos.",
    enShortDescription:
      "My personal portfolio made using ReactJS, TypeScript, and TailwindCSS. The portfolio has a basic back-end with CRUD functions to manage projects.",
    image: "logo.png",
    mockupImage: "projects-images/pr-portfolio.svg",
    exampleUrl: "diogomv.com.br",
    github: "",
    deploy: "https://diogomv.com.br",
    technologies: [
      <BiLogoTypescript />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <SiDotnet />,
    ],
  },
];

export const experience = [
  {
    id: "rener-force",
    date: "2023 - agosto",
    enDate: "2023 - august",
    name: "Sistema de orçamentos para oficina mecânica",
    enName: "Mechanic workshop quote system",
    description: (
      <div className="data-styles">
        <p>
          Desenvolvi um projeto voluntário para uma oficina mecânica utilizando
          ReactJS e TypeScript com o objetivo de automatizar o processo de
          criação de orçamentos e notas fiscais para clientes. Antes, os
          orçamentos eram feitos a mão e no papel, o que era um processo lento e
          sujeito a erros.
        </p>
        <p>
          O sistema que desenvolvi é acessível pelo PC ou mobile, e conta com as
          seguintes funcionalidades:
        </p>
        <ul>
          <li>
            <strong>Criação de orçamentos</strong>: os funcionários da oficina
            podem inserir os dados dos clientes, dos serviços prestados e dos
            preços.
          </li>
          <li>
            <strong>Emissão de notas fiscais</strong>: a partir dos orçamentos
            criados, o sistema pode emitir notas fiscais de acordo com as
            necessidades dos clientes.
          </li>
          <li>
            <strong>Armazenamento de dados</strong>: todos os orçamentos e notas
            fiscais são armazenados em um banco de dados, o que facilita a
            consulta e o controle das informações.
          </li>
        </ul>
        <p>As tecnologias utilizadas no projeto foram:</p>
        <ul>
          <li>
            <strong>File-saver</strong>: para salvar os orçamentos no
            dispositivo do usuário.
          </li>
          <li>
            <strong>Firebase</strong>: para conectar o sistema ao banco de
            dados.
          </li>
          <li>
            <strong>Html-to-image</strong>: para salvar a tabela gerada em html
            para o formato de imagem (png).
          </li>
          <li>
            <strong>Jspdf</strong>: para salvar a tabela gerada em png pelo
            html-to-image em pdf.
          </li>
          <li>
            <strong>Tailwindcss</strong>: para estilizar o site e a tabela de
            orçamentos/nota fiscal.
          </li>
        </ul>
        <p>
          O projeto foi desenvolvido em aproximadamente 6 meses, e foi bem
          recebido pelos funcionários da oficina, que consideram o sistema mais
          prático e eficiente.
        </p>
        <h2>Benefícios do projeto:</h2>
        <ul>
          <li>
            Automatização do processo de criação de orçamentos e notas fiscais,
            o que reduz o tempo e o esforço necessários.
          </li>
          <li>
            Maior controle das informações, pois todos os orçamentos e notas
            fiscais são armazenados em um banco de dados.
          </li>
          <li>
            Maior eficiência, pois o sistema é acessível pelo PC ou mobile.
          </li>
          <li>
            Melhor experiência para os clientes, pois os orçamentos e notas
            fiscais são emitidos de forma mais rápida e precisa.
          </li>
        </ul>
      </div>
    ),
    enDescription: (
      <div className="data-styles">
        <p>
          I developed a volunteer project for a mechanical workshop using
          ReactJS and TypeScript in order to automate the process of creation of
          budgets and invoices for customers. Before, the budgets were done by
          hand and on paper, which was a slow and subject to errors.
        </p>
        <p>
          The system I developed is accessible from a PC or mobile device, and
          has the following features:
        </p>
        <ul>
          <li>
            <strong>Estimate creation</strong>: Shop employees can enter
            customer data, services provided, and prices.
          </li>
          <li>
            <strong>Invoice generation</strong>: Based on the estimates created,
            the system can generate invoices according to customer needs.
          </li>
          <li>
            <strong>Data storage</strong>: All estimates and invoices are stored
            in a database, which makes it easy to query and control information.
          </li>
        </ul>
        <p>The technologies used in the project were:</p>
        <ul>
          <li>
            <strong>File-saver</strong>: To save estimates on the user's device.
          </li>
          <li>
            <strong>Firebase</strong>: To connect the system to the database.
          </li>
          <li>
            <strong>Html-to-image</strong>: To save the HTML-generated table to
            the image format (png).
          </li>
          <li>
            <strong>Jspdf</strong>: To save the table generated in png by
            html-to-image in pdf.
          </li>
          <li>
            <strong>Tailwindcss</strong>: To style the site and the
            estimate/invoice table.
          </li>
        </ul>
        <p>
          The project was developed in approximately 6 months, and was
          well-received by shop employees, who find the system more practical
          and efficient.
        </p>
        <h2>Project benefits:</h2>
        <ul>
          <li>
            Automation of the process of creating estimates and invoices, which
            reduces the time and effort required.
          </li>
          <li>
            Greater control of information, as all estimates and invoices are
            stored in a database.
          </li>
          <li>
            Greater efficiency, as the system is accessible from a PC or mobile
            device.
          </li>
          <li>
            Better customer experience, as estimates and invoices are issued
            more quickly and accurately.
          </li>
        </ul>
      </div>
    ),
    shortDescription:
      "Sistema automatizado de criação de orçamentos e notas fiscais para uma oficina mecânica. O sistema substituiu o processo manual anterior, melhorando a eficiência e a organização da oficina.",
    enShortDescription:
      "Automated system for creating budgets and invoices for a mechanical workshop. The system replaced the previous manual process, improving efficiency and organization in the workshop.",
    github: "",
    deploy: "",
    exampleUrl: "rener-force.com.br",
    image: "experience-images/logo/rener-force.svg",
    mockupImage: "experience-images/mockup/exp-renerforce.svg",
    technologies: [],
  },
];
