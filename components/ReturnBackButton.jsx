import Link from "next/link"
import { IoReturnDownBack } from "react-icons/io5"

export default function ReturnBackButton(){
  return (
    <Link href="/">
      <a className="fixed right-5 bottom-5">
        <IoReturnDownBack size="3em" color="white" />
      </a>
    </Link>
  )
}
