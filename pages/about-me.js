import Layout from "../components/Layout";
import ReturnBackButton from "../components/ReturnBackButton";

export default function About() {
  const subTitleStyle = "text-xl font-semibold"

  return (
    <Layout mainStyle="h-screen bg-stone-900 text-neutral-200 text-center flex flex-col gap-9">
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
      </section>

      <ReturnBackButton />
    </Layout>
  );
}
