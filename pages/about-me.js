import Layout from "../components/Layout";
import ReturnBackButton from "../components/ReturnBackButton";


export default function About(){
  return (
    <Layout mainStyle="bg-stone-900 text-neutral-200 text-center flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-red-500 lg:text-6xl">About me</h1>

      <section className="text-lg">
        <p>I love coding.</p>
        <p>I coding from 2020.</p>
        <p>I&#8217;m from Peru.</p>
      </section>

      <ReturnBackButton />
    </Layout>
  )
}
