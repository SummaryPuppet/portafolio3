import Link from "next/link";

export default function HomeButtonLink({buttonText = "", buttonColor = "", buttonUrl = "/"}){
  return (
    <Link href={buttonUrl}>
      <a className={`px-3 py-4 rounded-full ${buttonColor} font-semibold hover:text-2xl`}>
        {buttonText}
      </a>
    </Link>
  )
}
