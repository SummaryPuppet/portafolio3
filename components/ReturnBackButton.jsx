import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

export default function ReturnBackButton() {
  return (
    <Link href="/">
      <a className="fixed right-5 bottom-5 text-white p-1 hover:ring hover:ring-white rounded">
        <IoReturnDownBack size="3em" />
      </a>
    </Link>
  );
}
