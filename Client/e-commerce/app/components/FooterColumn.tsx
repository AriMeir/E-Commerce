import Link from "next/link"

type FooterColumnProps = {
  header: string;
  first: string;
  second: string;
  third: string;
  forth: string;
};

const FooterColumn = ({ header, first, second, third, forth }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">{header}</p>
        <Link href="">{first}</Link>
        <Link href="">{second}</Link>
        <Link href="">{third}</Link>
        <Link href="">{forth}</Link>
      </div>
  )
}

export default FooterColumn