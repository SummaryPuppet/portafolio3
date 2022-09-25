import Layout from "../components/Layout";
import ReturnBackButton from "../components/ReturnBackButton";

import { SiExpress, SiPython, SiNextdotjs } from "react-icons/si";
import { DiReact, DiNodejs, DiMongodb, DiLinux } from "react-icons/di";

export default function About() {
  const subTitleStyle = "text-xl font-semibold";
  const tecIconConfig = {
    size: "4em",
  };

  const tecIcons = [
    {
      name: "React",
      icon: <DiReact {...tecIconConfig} />,
      link: "https://reactjs.org/",
    },
    {
      name: "Nextjs",
      icon: <SiNextdotjs {...tecIconConfig} />,
      link: "https://nextjs.org/"
    },
    {
      name: "Nodejs",
      icon: <DiNodejs {...tecIconConfig} />,
      link: "https://nodejs.org/",
    },
    {
      name: "Expressjs",
      icon: <SiExpress {...tecIconConfig} />,
      link: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb {...tecIconConfig} />,
      link: "https://www.mongodb.com/",
    },
    {
      name: "Python",
      icon: <SiPython {...tecIconConfig} />,
      link: "https://www.python.org/",
    },
    {
      name: "Linux",
      icon: <DiLinux {...tecIconConfig} />,
      link: "https://www.linux.org/",
    },
  ];

  return (
    <Layout mainStyle="h-full lg:h-screen bg-stone-900 text-neutral-200 text-center flex flex-col gap-9">
      <h1 className="text-5xl font-bold text-red-500 lg:text-6xl">About me</h1>

      <section className="text-lg grid lg:grid-cols-3 gap-9 lg:gap-32">
        <article>
          <h2 className={subTitleStyle}>General info</h2>

          <p>I love coding.</p>
          <p>I coding from 2020.</p>
          <p>I&#8217;m 18 years old.</p>
          <p>I&#8217;m from Peru.</p>
        </article>

        <article>
          <h2 className={subTitleStyle}>Hobies</h2>

          <ul className="list-disc">
            <li>Ride bike</li>
            <li>Code</li>
            <li>Taekwoondo</li>
          </ul>
        </article>

        <article>
          <h2 className={subTitleStyle}>Studies</h2>

          <p>I&#8217;m studing Software enginer</p>
          <p>in Universidad Tecnologica del Peru</p>
        </article>

        <article className="col-start-1 lg:col-end-4 flex flex-col gap-2">
          <h2 className={subTitleStyle}>I learn this technologies</h2>

          <section className="grid place-content-center grid-cols-2 lg:flex lg:flex-row gap-1 lg:gap-9">
            {tecIcons.map((tecIcon, index) => (
              <a
                key={index}
                href={tecIcon.link}
                rel="noopener noreferrer"
                target="_blank"
                className="px-4 py-2 flex flex-col items-center rounded hover:ring hover:ring-red-500"
              >
                {tecIcon.icon}
                <p>{tecIcon.name}</p>
              </a>
            ))}
          </section>
        </article>
      </section>

      <ReturnBackButton />
    </Layout>
  );
}
