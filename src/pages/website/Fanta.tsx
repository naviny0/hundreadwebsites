import logo from "../../assets/finta/finta-logo-light.svg";
import hero from '../../assets/finta/hero.webp'
export default function Fanta() {
  return (
    <div className="relative overflow-clip pb-20 lg:pb-20 [--background-width:308.4%] lg:[--background-width:198.96%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">

      < div className="mx-auto max-w-5xl" >
        <Header />
        <Hero />
      </ div>
    </div >
  );
}
function Header() {
  interface link {
    name: string;
    link: string;
  }
  const links: link[] = [
    { name: "Founders", link: "/Founders" },
    { name: "Docs", link: "/Docs" },
    { name: "Pricing", link: "/Pricing" },
    { name: "Pricing", link: "/Pricing  " },
    { name: "Login", link: "/login  " },
  ];
  return (
    <header className="flex items-center justify-between py-4">
      <div className="">
        <img className="h-5" src={logo} alt="fanta logo" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <ul className="text-gray-060 flex items-center justify-between gap-4 font-medium">
          {links.map((l) => (
            <li>
              <a className="hover:text-gray-500" href={l.link}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-md bg-blue-600 px-3 py-2 font-bold text-white">
          Get Started
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="pt-20">
      <div className="badge mx-auto flex w-fit items-center justify-center rounded-full bg-gray-100 px-2 text-sm">
        <span>Real-time data API for founders and agents </span>{" "}
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>

      <div className="text-center">
        <h1 className="mx-auto w-2xl text-6xl font-bold mt-10">
          Magically simplify accounting and taxes
        </h1>
        <p className="max-w-lg text-lg text-gray-500 mx-auto my-5 ">

          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 2:37am
        </p>
        <div className="flex items-center justify-center gap-6 mb-10">
          <button className="rounded-md bg-blue-600 px-3 py-2 font-bold text-white">
            Get Started
          </button>
          <button className="flex items-center justify-center font-semibold gap-2">
            Pricing
            <svg width="16" height="16" fill="none">
              <path
                stroke="#1E1F25"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity=".5"
                stroke-width="1.25"
                d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              ></path>
            </svg>
          </button>
        </div>
        <span className="text-gray-500 text-xs text-center font-semibold">For Us based startup</span>
      </div>

      <div className="pt-16 mask-b-to-100%">
        <img src={hero} alt="hero image" />
      </div>
    </main>
  );
}
