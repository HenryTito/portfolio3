"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import "./AboutSection.css";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <div className="skills-container">
        <ul className="skills-column">
          <p className="paragrafo-hard">Hard skills:</p>
          <li>
            <a>Node.js</a>
            <img
              className="icon"
              src="/images/node.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            JavaScript{" "}
            <img
              className="icon"
              src="/images/javascript.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Java{" "}
            <img
              className="icon"
              src="/images/java.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Aws{" "}
            <img
              className="icon"
              src="/images/aws.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Google Cloud{" "}
            <img
              className="icon"
              src="/images/googlecloud.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            C#{" "}
            <img
              className="icon"
              src="/images/csharp.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Python{" "}
            <img
              className="icon"
              src="/images/python.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            React{" "}
            <img
              className="icon"
              src="/images/react.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            MySQL{" "}
            <img
              className="icon"
              src="/images/mysql.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Figma{" "}
            <img
              className="icon"
              src="/images/figma.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Docker{" "}
            <img
              className="icon"
              src="/images/docker.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            MongoDB{" "}
            <img
              className="icon"
              src="/images/mongodb.png"
              width={20}
              height={19}
            />
          </li>
        </ul>

        <ul className="skills-column">
          <p className="paragrafo-soft">Soft skills:</p>
          <li>
            Trabalho em equipe{" "}
            <img
              className="icon"
              src="/images/teamwork.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Comunicação eficaz{" "}
            <img
              className="icon"
              src="/images/com.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Resolução de problemas{" "}
            <img
              className="icon"
              src="/images/problems.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Adaptabilidade{" "}
            <img
              className="icon"
              src="/images/adaptable2.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Proatividade{" "}
            <img
              className="icon"
              src="/images/solution2.png"
              width={20}
              height={19}
            />
          </li>
          <li>
            Empatia{" "}
            <img
              className="icon"
              src="/images/empathy.png"
              width={20}
              height={19}
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Educação",
    id: "educacao",
    content: (
      <ul className="custom-list">
        <li className="about">Colégio Elo Educacional 2013-2024</li>
         <li className="about">
          Desenvolvimento de Software Multiplataforma | FATEC | (cursando, atualmente no 2º Semestre)
        </li>
        <li className="about">
  Desenvolvimento Web | Alura |<br />
  JavaScript DOM, React, REST API e Node.js. POO aplicada em aplicações web.
</li>

<li className="about">
  POO Multilínguas | Alura |<br />
  Fundamentos e práticas de orientação a objetos com JavaScript, Java, C# e Python.
</li>

<li className="about">
  Imersão Backend | Alura |<br />
  MySQL, PostgreSQL, MongoDB. Criação de REST APIs com foco em integração e boas práticas.
</li>

<li className="about">
  Automação com Python | Hashtag |<br />
  Automação com PyAutoGUI, Pandas e OpenPyXL. Projetos de cadastro e manipulação de dados.
</li>

<li className="about">
  Imersão Fullstack | Hashtag |<br />
  Aplicação fullstack com React.js, Next.js e MySQL. Projeto réplica do Spotify.
</li>

<li className="about">
  DevOps | Alura + Google Cloud |<br />
  Deploy com Docker no GCP. CI/CD com GitHub Actions e pipelines de entrega contínua.
</li>
       
      </ul>
    ),
  },
  {
    title: "Projetos",
    id: "projetos",
    content: (
      <ul className="custom-list">
        <li className="about">Réplica do Spotify com React.JS e MySQL (projeto freelancer)</li>
        <li className="about">Sistema de controle de vendas com Java e MySQL (aplicação desktop)</li>
<li className="about">Frontend para software de reconhecimento de tráfego urbano</li>
<li className="about">Aplicativo de tempo e clima com consumo de API</li>
<li className="about">Criação de REST APIs com integração a bancos de dados</li>
<li className="about">
  Plataforma web interativa para análise de dados públicos de comércio exterior dos municípios de SP (2019–2025)
</li>
<li className="about">Automatização de cadastros com Python, PyAutoGUI e planilhas (OpenPyXL)</li>
<li className="about">Desenvolvimento de aplicações com bancos de dados em nuvem (Google Cloud Platform, AWS)</li>
      </ul>
    ),
  },
  {
    title: "Redes sociais",
    id: "redessociais",
    content: (
      <ul className="custom-list2">
        <li>
          <div className="social-link">
            <img
              src="/images/icons8.png"
              width={20}
              height={20}
              alt="Instagram Logo"
            />
            <a
              className="link_texto"
              href="https://www.instagram.com/htito.og/"
            >
              Instagram
            </a>
          </div>
        </li>
        <li>
          <div className="social-link">
            <img
              src="/images/linked.png"
              width={20}
              height={20}
              alt="LinkedIn Logo"
            />
            <a
              className="link_texto"
              href="https://www.linkedin.com/in/henry-tito-989b4b354/"
            >
              LinkedIn
            </a>
          </div>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Sobre mim</h2>
          <p className="about-text">
            Olá! Me chamo Henry Vilela Silva Tito, tenho 18 anos e sou estudante
            de Desenvolvimento de Software Multiplataforma na FATEC. Sempre
            gostei muito da área de tecnologia, e foi na programação que
            encontrei meu verdadeiro interesse. Gosto de transformar ideias em
            soluções práticas e criativas, explorando diferentes linguagens,
            ferramentas e tecnologias. Sou uma pessoa curiosa e determinada,
            sempre buscando aprender mais, melhorar minhas habilidades e
            enfrentar novos desafios. Fora do universo tech, gosto de jogar
            bola, aproveitar o tempo com amigos e me manter ativo. Me considero
            prestativo, comunicativo e proativo, sempre disposto a colaborar,
            aprender e contribuir com o time.
          </p>
          <div className="tab-buttons">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="tab-content">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
