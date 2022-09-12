import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import ReturnBackButton from "../components/ReturnBackButton";

export default function Projects({ repos }) {
  return (
    <Layout mainStyle="bg-stone-900 flex flex-col gap-5 h-full">
      <h1 className="font-bold text-center text-green-500 text-7xl">Projects</h1>

      <section className="grid gap-4">
        {repos.map((repo, index) => (
          <ProjectItem key={index} {...repo} />
        ))}
      </section>

      <ReturnBackButton />
    </Layout>
  );
}

export async function getServerSideProps() {
  const URL = "https://api.github.com/users/SummaryPuppet/repos";
  const TOKEN = "token " + process.env.GITHUB_TOKEN

  const res = await fetch(URL, {
    headers: {
      Authorization: TOKEN,
    },
  });

  const data = await res.json();
  const repos = [];

  data.map((repo) => {
    const {
      name,
      clone_url,
      forks,
      language,
      description,
      created_at,
      homepage
    } = repo;

    repos.push({
      name,
      clone_url,
      forks,
      language,
      description,
      created_at,
      homepage
    });
  });

  return {
    props: {
      repos
    },
  };
}
