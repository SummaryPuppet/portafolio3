import Layout from "../components/Layout";
import HomeButtonLink from "../components/HomeButtonLink";
//import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout mainStyle="h-screen grid lg:grid-cols-2 gap-9 lg:gap-32 place-content-center bg-black">
      <section>
        <article className="flex flex-col font-bold text-7xl lg:text-9xl text-neutral-200 gap-2">
          <h1>Hello,</h1>
          <h1>I&#8217;m</h1>
          <h1>Summary</h1>
          <h1>Puppet</h1>
        </article>

        <h2 className="text-xl text-stone-400">A web developer</h2>
      </section>

      <aside className="flex flex-col gap-3">
        <h1 className="text-2xl text-center text-stone-400">
          What do you want to know about me?
        </h1>

        <nav className="flex flex-col text-center gap-4">
          <HomeButtonLink
            buttonUrl="/about-me"
            buttonText="About Me"
            buttonColor="bg-red-500"
          />
          <HomeButtonLink
            buttonUrl="/social-networks"
            buttonText="Social Networks"
            buttonColor="bg-blue-500"
          />
          <HomeButtonLink
            buttonUrl="/projects"
            buttonText="Projects"
            buttonColor="bg-green-500"
          />
        </nav>
      </aside>
    </Layout>
  );
}
