import Layout from "../components/Layout";
import SocialIconLinkButton from "../components/SocialIconLinkButton";
import { BsWhatsapp, BsGithub, BsFacebook } from "react-icons/bs";
import ReturnBackButton from "../components/ReturnBackButton";

export default function SocialNetworks() {
  const iconsStyle = {
    color: "white",
    size: "3em",
  };

  return (
    <Layout mainStyle="bg-stone-900 text-center flex flex-col lg:justify-center items-center gap-9">
      <h1 className="font-bold text-blue-500 text-7xl">Social Networks</h1>

      <section className="flex gap-9">
        <SocialIconLinkButton
          link="https://wa.me/+51984412733"
          networkName="whatsapp"
        >
          <BsWhatsapp {...iconsStyle} />
        </SocialIconLinkButton>

        <SocialIconLinkButton
          link="https://github.com/SummaryPuppet"
          networkName="github"
        >
          <BsGithub {...iconsStyle} />
        </SocialIconLinkButton>

        <SocialIconLinkButton
          link="https://wa.me/+51984412733"
          networkName="facebook"
        >
          <BsFacebook {...iconsStyle} />
        </SocialIconLinkButton>
      </section>

      <ReturnBackButton />
    </Layout>
  );
}
