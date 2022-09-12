import Head from "next/head";

export default function Layout({
  title = "Summary Puppet portfolio",
  mainStyle = "",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Summary Puppet portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`h-screen p-2 ${mainStyle}`}>{children}</main>
    </>
  );
}
