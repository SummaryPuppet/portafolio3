import { AiOutlineFork } from "react-icons/ai";
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiPython,
  SiGoland,
} from "react-icons/si";

const icons = {
  Go: <SiGoland />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Css: <SiCss3 />,
  Python: <SiPython />,
  default: <p></p>,
};

export default function ProjectItem({
  name = "",
  clone_url = "",
  description,
  forks = 0,
  language = "",
  homepage = "",
  created_at = "",
}) {
  const created = created_at.split("T")[0];

  return (
    <article className="flex flex-col p-2 gap-2 hover:ring-2 hover:ring-green-700 ">
      <a
        href={clone_url}
        className="text-3xl font-semibold text-green-700 hover:text-green-400"
        rel="noopener noreferrer"
        target="_blank"
      >
        {name}
      </a>

      <section className="text-md text-neutral-600">
        <p>{description}</p>

        <a
          href={homepage}
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-neutral-200"
        >
          {homepage}
        </a>

        <div className="flex">
          <p>{forks}</p>
          <AiOutlineFork />
        </div>

        <div className="flex gap-2">
          <h3>Language: {language}</h3>
          {icons[language || "default"]}
        </div>

        <p>{created}</p>
      </section>
    </article>
  );
}
