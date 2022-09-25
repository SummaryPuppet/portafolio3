export default function SocialIconLinkButton({
  link = "#",
  networkName = "",
  children,
}) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="px-4 py-2 flex flex-col items-center hover:ring hover:ring-blue-500 rounded-md"
    >
      {children}
      <h2 className="text-lg text-neutral-200">{networkName}</h2>
    </a>
  );
}
