import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import ReturnBackButton from "../components/ReturnBackButton";
import ProjectSearchBar from "../components/ProjectSearchBar";

import useProject from "../hooks/useProject";

export default function Projects({ repos = [] }) {
  const { search, hStyle, searchChange, findRepos, sortOption, sortChange } =
    useProject(repos);

  return (
    <Layout mainStyle={`${hStyle} bg-stone-900 flex flex-col gap-5`}>
      <h1 className="font-bold text-center text-green-500 text-7xl">
        Projects
      </h1>

      <ProjectSearchBar
        inputValue={search}
        inputChange={searchChange}
        selectValue={sortOption}
        selectChange={sortChange}
      />

      <section className="grid gap-7 lg:gap-4">
        {findRepos.map((repo, index) => (
          <ProjectItem key={index} {...repo} />
        ))}
      </section>

      <ReturnBackButton />
    </Layout>
  );
}

export async function getServerSideProps() {
  const URL = "https://api.github.com/users/SummaryPuppet/repos";
  const TOKEN = "token " + process.env.GITHUB_TOKEN;

  const repos = [];

  const res = await fetch(URL, {
    headers: {
      Authorization: TOKEN,
    },
  });

  if (res.status == 401) {
    repos.push({ name: "Error github token is not defined" });

    return {
      props: {
        repos,
      },
    };
  }

  const data = await res.json();

  data.map((repo) => {
    const {
      name,
      clone_url,
      forks,
      language,
      description,
      created_at,
      homepage,
    } = repo;

    repos.push({
      name,
      clone_url,
      forks,
      language,
      description,
      created_at,
      homepage,
    });
  });

  return {
    props: {
      repos,
    },
  };
}
