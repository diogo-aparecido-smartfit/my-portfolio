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
    github: "https://github.com/DiogoAMV/my-portfolio",
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
      "Sistema automatizado de criação de orçamentos e notas fiscais para uma oficina mecânica.",
    enShortDescription:
      "Automated system for creating budgets and invoices for a mechanical workshop.",
    github: "",
    deploy: "",
    exampleUrl: "rener-force.com.br",
    image: "experience-images/logo/rener-force.svg",
    mockupImage: "experience-images/mockup/exp-renerforce.svg",
    technologies: [],
  },
];

export const educations = [
  {
    id: "uniube",
    date: "2023 - agora",
    enDate: "2023 - now",
    name: "Análise e Desenvolvimento de Sistemas",
    enName: "Analysis and Systems Development",
    description: (
      <div className="data-styles">
        <p>
          Estou matriculado no curso de Tecnólogo em Análise e Desenvolvimento
          de Sistemas na Universidade de Uberlândia (UNIUBE), com início em
          fevereiro de 2023 e previsão de conclusão para julho de 2025. Este
          curso representa uma oportunidade emocionante para aprimorar minhas
          habilidades e conhecimentos na área de tecnologia da informação e
          desenvolvimento de software.
        </p>
        <p>
          Atualmente, estou focado em várias disciplinas e tópicos que estão
          moldando minha base de conhecimento. Estes incluem SQL Server, onde
          estou aprendendo a gerenciar bancos de dados relacionais, programação
          em C, que me permite explorar os fundamentos da programação de baixo
          nível, e programação em Python, que é uma linguagem versátil
          amplamente utilizada em diversas aplicações.
        </p>
        <p>
          Além disso, estou estudando gestão de projetos, o que me dará as
          habilidades necessárias para liderar e coordenar projetos de
          desenvolvimento de software de forma eficaz, e sistemas distribuídos,
          que envolvem a compreensão de como aplicativos funcionam em ambientes
          distribuídos e em rede.
        </p>
      </div>
    ),
    enDescription: (
      <div className="data-styles">
        <p>
          I am enrolled in the Bachelor's program in Analysis and Systems
          Development at the University of Uberlândia (UNIUBE), with a start
          date in February 2023 and an expected completion date in July 2025.
          This course represents an exciting opportunity to enhance my skills
          and knowledge in the field of information technology and software
          development.
        </p>
        <p>
          Currently, I am focused on various subjects and topics that are
          shaping my knowledge base. These include SQL Server, where I am
          learning to manage relational databases, programming in C, which
          allows me to explore the fundamentals of low-level programming, and
          programming in Python, which is a versatile language widely used in
          various applications.
        </p>
        <p>
          Additionally, I am studying project management, which will provide me
          with the necessary skills to lead and coordinate software development
          projects effectively, and distributed systems, which involve
          understanding how applications operate in distributed and networked
          environments.
        </p>
      </div>
    ),
    shortDescription:
      "Tecnólogo em Análise e Desenvolvimento de Sistemas na Universidade de Uberlândia (UNIUBE).",
    enShortDescription:
      "Technologist in Systems Analysis and Development at the University of Uberlândia (UNIUBE).",
    exampleUrl: "uniube.br",
    image: "education-images/uniube.png",
  },
  {
    id: "jstack",
    date: "2022 - agora",
    enDate: "2022 - now",
    name: "JStack",
    enName: "JStack",
    description: (
      <div className="data-styles">
        <p>
          Além da faculdade, também estou fazendo cursos por fora como o curso
          de desenvolvimento fullstack que estou fazendo na JStack, ministrado
          pelo professor Mateus Silva. O curso é muito abrangente e está me
          ensinando uma variedade de tecnologias essenciais para o
          desenvolvimento web e de aplicativos.
        </p>
        <p>
          Desde que comecei o curso em junho de 2022, aprendi muito. No
          back-end, aprendi a usar Node.js, TypeScript, Express, Docker, API
          REST e MongoDB. Com isso, consigo criar servidores robustos e
          escaláveis e entender como desenvolver APIs RESTful.
        </p>
        <p>
          No front-end, aprendi a usar ReactJS. Com isso, consigo criar
          interfaces de usuário interativas e dinâmicas. Mas ainda não estou
          satisfeito. Quero aprofundar meu conhecimento em React Native para
          poder desenvolver aplicativos móveis e explorar todo o potencial do
          desenvolvimento fullstack.
        </p>
      </div>
    ),
    enDescription: (
      <div className="data-styles">
        <p>
          I am very excited about the full-stack development course I am taking
          at JStack, taught by Professor Mateus Silva. The course is very
          comprehensive and is teaching me a variety of essential technologies
          for web and app development.
        </p>
        <p>
          Since I started the course in June 2022, I have learned a lot. On the
          backend, I learned how to use Node.js, TypeScript, Express, Docker,
          REST API, and MongoDB. With this, I can create robust and scalable
          servers and understand how to develop RESTful APIs.
        </p>
        <p>
          On the frontend, I learned how to use ReactJS. With this, I can create
          interactive and dynamic user interfaces. But I'm not satisfied yet. I
          want to deepen my knowledge in React Native so I can develop mobile
          apps and explore the full potential of full-stack development.
        </p>
      </div>
    ),
    shortDescription:
      "Curso fullstack abrangente que aborda uma ampla gama de tecnologias essenciais no desenvolvimento web e de aplicativos.",
    enShortDescription:
      "This is a comprehensive fullstack course that covers a wide range of essential technologies in web and app development.",
    exampleUrl: "jstack.com.br",
    image: "education-images/jstack.png",
  },
  {
    id: "ignite",
    date: "nov 2021 - abr 2022",
    enDate: "nov 2021 - apr 2022",
    name: "Ignite - ReactJS",
    enName: "Ignite - ReactJS",
    description: (
      <div className="data-styles">
        <p>
          Concluí com êxito o curso "Ignite - ReactJS" oferecido pela renomada
          instituição RocketSeat. Este bootcamp abrangente foi uma jornada
          intensiva de aprendizado projetada para aprimorar minhas habilidades
          em ReactJS e TypeScript, duas tecnologias fundamentais no
          desenvolvimento de aplicações web modernas.
        </p>
        <p>
          O curso teve início em novembro de 2021 e foi concluído em abril de
          2022, proporcionando um ambiente de aprendizado imersivo e prático.
          Durante esse período, adquiri competências valiosas em uma variedade
          de tecnologias essenciais, incluindo Webpack, Babel.js,
          Styled-components, SASS, HTML, CSS, JavaScript e React.js.
        </p>
      </div>
    ),
    enDescription: (
      <div className="data-styles">
        <p>
          I have successfully completed the "Ignite - ReactJS" course offered by
          the renowned institution RocketSeat. This comprehensive bootcamp was
          an intensive learning journey designed to enhance my skills in ReactJS
          and TypeScript, two fundamental technologies in modern web application
          development.
        </p>
        <p>
          The course started in November 2021 and concluded in April 2022,
          providing an immersive and hands-on learning environment. During this
          period, I acquired valuable competencies in a variety of essential
          technologies, including Webpack, Babel.js, Styled-components, SASS,
          HTML, CSS, JavaScript, and React.js.
        </p>
      </div>
    ),
    shortDescription:
      "Bootcamp oferecido pela Rocketseat com objetivo de aprimorar habilidades em ReactJS & TypeScript.",
    enShortDescription:
      "Bootcamp offered by Rocketseat in order to improve skills in ReactJS & TypeScript.",
    exampleUrl: "rocketseat.com.br",
    image: "education-images/rocketseat.jpg",
  },
  {
    id: "balta",
    date: "jun 2023 - jul 2023",
    enDate: "jun 2023 - jul 2023",
    name: "Fundamentos do C# - Balta.io",
    enName: "C# Fundamentals - Balta.io",
    description: (
      <div className="data-styles">
        <p>
          Terminei o curso de C# Básico do balta.io e estou super feliz com o
          que aprendi. O curso foi muito completo e me deu uma base sólida para
          começar minha carreira como programador C#.
        </p>
        <p>Aqui estão os principais pontos que aprendi:</p>
        <ul>
          <li>
            <strong>Conceitos Fundamentais do C#</strong>: Aprendi os conceitos
            básicos da linguagem, como variáveis, tipos de dados, operadores e
            estruturas de controle. Isso me permitiu criar programas simples e
            funcionais.
          </li>
          <li>
            <strong>Princípios Universais de Programação</strong>: Aprendi
            conceitos de programação que são aplicáveis a qualquer linguagem,
            como algoritmos, estruturas de dados e depuração. Isso me tornou um
            programador mais versátil.
          </li>
          <li>
            <strong>Linguagens e Compiladores</strong>: Aprendi como funcionam
            linguagens de programação e compiladores. Isso me deu uma
            compreensão mais profunda de como o código C# é transformado em
            programas executáveis.
          </li>
          <li>
            <strong>História do C# e .NET</strong>: Aprendi sobre a história do
            C# e os frameworks .NET da Microsoft. Isso me deu uma compreensão
            mais profunda da linguagem e do ecossistema de desenvolvimento C#.
          </li>
          <li>
            <strong>Preparação do Ambiente de Desenvolvimento</strong>: Aprendi
            a configurar um ambiente de desenvolvimento eficaz para trabalhar
            com C#. Isso me permitiu começar a codificar rapidamente.
          </li>
          <li>
            <strong>Manipulação de Dados</strong>: Aprendi a manipular strings,
            datas, moedas e arrays. Isso me deu a capacidade de lidar com
            diversos tipos de dados em meus programas.
          </li>
          <li>
            <strong>Conversão de Tipos de Dados</strong>: Aprendi como converter
            tipos de dados de maneira eficiente. Isso me permitiu integrar
            diferentes tipos de informações em meus programas.
          </li>
          <li>
            <strong>Operadores</strong>: Aprendi a usar operadores aritméticos,
            de atribuição, de comparação e lógicos para criar lógica em meus
            programas. Isso me deu mais controle sobre o fluxo de execução dos
            meus programas.
          </li>
          <li>
            <strong>Estruturas Condicionais e de Repetição</strong>: Aprendi a
            usar estruturas condicionais e de repetição para tomar decisões e
            iterar sobre dados. Isso me permitiu criar programas mais complexos
            e sofisticados.
          </li>
          <li>
            <strong>Métodos e Funções</strong>: Aprendi a escrever métodos e
            funções seguindo as melhores práticas de programação. Isso me ajudou
            a organizar meu código e torná-lo mais reutilizável.
          </li>
          <li>
            <strong>Structs e Enums</strong>: Aprendi a usar Structs e Enums
            para organizar e representar dados de maneira eficiente. Isso me deu
            mais flexibilidade e controle sobre meu código.
          </li>
          <li>
            <strong>Exceções</strong>: Aprendi a lidar com erros de forma
            eficaz. Isso me ajudou a criar programas mais robustos e confiáveis.
          </li>
          <li>
            <strong>Aplicações Console com C#</strong>: Aprendi a criar
            aplicações Console usando a linguagem C#. Isso me deu uma base para
            começar a criar aplicativos mais complexos.
          </li>
        </ul>
      </div>
    ),
    enDescription: (
      <div className="data-styles">
        <p>
          I completed the Basic C# course at balta.io and I'm thrilled with what
          I've learned. The course was very comprehensive and provided me with a
          solid foundation to kickstart my career as a C# developer.
        </p>
        <p>Here are the key points I've learned:</p>
        <ul>
          <li>
            <strong>Fundamental C# Concepts</strong>: I learned the basic
            concepts of the language, such as variables, data types, operators,
            and control structures. This enabled me to create simple and
            functional programs.
          </li>
          <li>
            <strong>Universal Programming Principles</strong>: I learned
            programming concepts that are applicable to any language, such as
            algorithms, data structures, and debugging. This made me a more
            versatile programmer.
          </li>
          <li>
            <strong>Languages and Compilers</strong>: I learned how programming
            languages and compilers work. This gave me a deeper understanding of
            how C# code is transformed into executable programs.
          </li>
          <li>
            <strong>History of C# and .NET</strong>: I learned about the history
            of C# and Microsoft's .NET frameworks. This provided me with a
            deeper understanding of the language and the C# development
            ecosystem.
          </li>
          <li>
            <strong>Development Environment Setup</strong>: I learned to set up
            an effective development environment for working with C#. This
            allowed me to start coding quickly.
          </li>
          <li>
            <strong>Data Manipulation</strong>: I learned to manipulate strings,
            dates, currencies, and arrays. This gave me the ability to handle
            various types of data in my programs.
          </li>
          <li>
            <strong>Data Type Conversion</strong>: I learned how to efficiently
            convert data types. This allowed me to integrate different types of
            information into my programs.
          </li>
          <li>
            <strong>Operators</strong>: I learned to use arithmetic, assignment,
            comparison, and logical operators to create logic in my programs.
            This gave me more control over the execution flow of my programs.
          </li>
          <li>
            <strong>Conditional and Loop Structures</strong>: I learned to use
            conditional and loop structures to make decisions and iterate over
            data. This allowed me to create more complex and sophisticated
            programs.
          </li>
          <li>
            <strong>Methods and Functions</strong>: I learned to write methods
            and functions following best programming practices. This helped me
            organize my code and make it more reusable.
          </li>
          <li>
            <strong>Structs and Enums</strong>: I learned to use Structs and
            Enums to organize and represent data efficiently. This gave me more
            flexibility and control over my code.
          </li>
          <li>
            <strong>Exceptions</strong>: I learned to handle errors effectively.
            This helped me create more robust and reliable programs.
          </li>
          <li>
            <strong>Console Applications with C#</strong>: I learned to create
            Console applications using the C# language. This provided me with a
            foundation to start building more complex applications.
          </li>
        </ul>
      </div>
    ),
    shortDescription:
      "Curso básico oferecido pelo balta.io que ensina os fundamentos do C#.",
    enShortDescription:
      "Basic course offered by balta.io that teaches the fundamentals of C#.",
    exampleUrl: "balta.io",
    image: "education-images/balta.jpg",
  },
];
