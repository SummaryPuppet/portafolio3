import Layout from "../components/Layout";
import HomeButtonLink from "../components/HomeButtonLink";
//import styles from "../styles/Home.module.css";

import { TiArrowDown } from "react-icons/ti"

export default function Home() {
  return (
    <Layout mainStyle="h-full lg:h-screen grid lg:grid-cols-2 gap-9 lg:gap-32 place-content-center bg-black">
      <section className="h-screen lg:h-full flex justify-center items-start flex-col gap-2">
        <article className="relative flex flex-col font-bold text-7xl lg:text-9xl text-neutral-200 gap-2">
          <h1>Hello,</h1>
          <h1>I&#8217;m</h1>
          <h1>Summary</h1>
          <h1>Puppet</h1>
        </article>

        <h2 className="text-xl text-stone-400">A web developer</h2>

        <a href="#sec-about" className="absolute bottom-0 inset-x-0 lg:hidden flex justify-center">
          <TiArrowDown color="white" size="8em"/>
        </a>
      </section>

      <aside className="h-screen lg:h-full flex flex-col gap-3 justify-center" id="sec-about">
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
