import { useState, type ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "../../libs/utils";
import { BiUpvote } from "react-icons/bi";
import { ChartBarDefault } from "./lgpsm/chart";

export default function Lgpsm() {
  return (
    <div className="bg-neutral-800 text-neutral-50">
      <Header />
      <Hero />
    </div>
  );
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  interface link {
    name: string;
    link: string;
  }
  const links: link[] = [
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/  " },
  ];

  return (
    <header className="relative mx-auto flex max-w-5xl items-center justify-between py-5">
      <div className="flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-neutral-950 text-white before:size-2 before:rounded-full before:bg-white before:content-['']"></span>
        <span className="font-bold">LGPSM</span>
      </div>
      <nav className="hidden items-center gap-4 md:flex">
        <ul className="flex items-center gap-4">
          {links.map((l) => (
            <li
              className="cursor-pointer text-sm hover:text-neutral-600"
              key={l.name}
            >
              {l.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <button className="rounded-lg bg-neutral-50 px-3 py-0.5 text-sm font-semibold text-neutral-950">
          Get Started
        </button>
        <button className="rounded-lg bg-neutral-950 px-3 py-1 text-sm text-neutral-50">
          Login
        </button>
      </div>
      <div
        onClick={() => setShowMenu((pre) => !pre)}
        className="relative cursor-pointer rounded-md bg-neutral-300 p-2 text-neutral-950 md:hidden"
      >
        <GiHamburgerMenu />
        {showMenu && (
          <nav className="absolute top-10 right-5 rounded-md bg-neutral-300/80 p-4">
            <ul className="w-28">
              {links.map((l) => (
                <li
                  className="cursor-pointer list-none py-2 text-right text-sm font-semibold hover:text-neutral-500"
                  key={l.name}
                >
                  {l.name}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
const Hero = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-4">
      <h1 className="w-xl text-center text-5xl">
        Track, Grow and Protect Your Financial Future{" "}
      </h1>
      <p className="w-80 text-center text-xs">
        One dashboard for revenue, receivables, and savings, updated in real
        time, built to scale with your business.{" "}
      </p>
      <button className="rounded-lg bg-neutral-50 px-3 py-1 text-sm font-semibold text-neutral-700">
        Start for free
      </button>
      <div>
        <Hb />
      </div>
    </section>
  );
};
const Hb = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

interface ComponentProps {
  className?: string;
  children?: ReactNode;
}
const Card = ({ className }: ComponentProps) => {
  return (
    <div className={cn("rounded-md border border-neutral-700 p-2", className)}>
      <h3 className="text-sm">Growth Revenue</h3>
      <p className="text-3xl font-semibold">$84,000</p>
      <div className="flex w-fit items-center gap-2 rounded-full px-2 py-1 text-xs text-green-600">
        <BiUpvote />
        <span>3.6%</span>
      </div>
      <div>
        <ChartBarDefault />
      </div>
    </div>
  );
};
/*
LGPSM (Logo text)

Hero Section

Left Card (Dashboard)
Growth Revenue

$84,500

▲ 3.6%

vs last quarter

+$2,940

Middle Card (Dashboard)
Saving

$310,000

▲ Growing

All time

+70.3%

Right Card (Dashboard)
Accounts Receivable

$120,000

▲ On track

Apr, May, Jun (faint text on the bar chart)

Apr - Jul

4 months

Bottom (Social Media UI)
22

4

111

4.9K

*/
