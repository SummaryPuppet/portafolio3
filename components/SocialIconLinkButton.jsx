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
      className="p-3 hover:ring hover:ring-blue-500 rounded-md"
    >
      {children}
      <h2 className="text-lg text-neutral-200">{networkName}</h2>
    </a>
  );
}
