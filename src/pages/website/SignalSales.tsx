import { useState } from "react";
import { BiSearch, BiSolidAlarmSnooze } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaBell, FaInbox, FaPlus, FaStar } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

function SignalSales() {
  return (
    <section className="mx-auto max-w-5xl px-4">
      <Header />
      <Hero />
      <HeroImg />
    </section>
  );
}
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Home", link: "" },
    { name: "Resources", link: "" },
    { name: "About", link: "" },
    { name: "Support", link: "" },
  ];

  return (
    <header className="relative flex items-center justify-between border-b border-gray-200 py-5">
      <div className="flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-neutral-950 text-white before:size-2 before:rounded-full before:bg-white before:content-['']"></span>
        <span className="font-bold text-neutral-700">Signal sales</span>
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
        <button className="rounded-lg bg-neutral-950 px-3 py-1 text-sm text-neutral-50">
          Get Started →
        </button>
      </nav>
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

function Hero() {
  return (
    <section className="py-14">
      <div className="flex flex-col items-center gap-8">
        <div className="badge rounded-lg bg-neutral-100 px-3 py-1 text-xs font-semibold">
          Smarter Workflows, Simplified
        </div>
        <h1 className="text-center text-4xl font-semibold md:w-xl md:text-5xl">
          Every Sales Conversation. One Intelligent Inbox.
        </h1>
        <div className="space-x-4">
          <button className="rounded-lg bg-neutral-950 px-4 py-2 text-xs text-neutral-50 hover:bg-neutral-700">
            Start 7-days free trial
          </button>
          <button className="rounded-lg border border-neutral-400 px-4 py-2 text-xs text-neutral-950 hover:bg-neutral-100">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}

function HeroImg() {
  return (
    <section className="mb-20 h-130 w-full overflow-hidden rounded-2xl border border-gray-300 p-4">
      <div className="flex items-center gap-1">
        <div className="flex size-3 rounded-full bg-red-500"></div>
        <div className="flex size-3 rounded-full bg-yellow-500"></div>
        <div className="flex size-3 rounded-full bg-green-500"></div>
      </div>
      {/* content  */}
      <div className="mt-4 flex h-full w-full overflow-hidden rounded-lg border border-gray-300">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Head />
          <Main />
        </div>
      </div>
    </section>
  );
}
const Sidebar = () => {
  const side = [
    {
      id: 1,
      label: "Unified Inbox",
      icon: <FaInbox />,
      count: 24,
    },
    {
      id: 2,
      label: "Priority",
      icon: <FaStar />,
      count: 6,
    },
    {
      id: 3,
      label: "Meetings",
      icon: <CiCalendar />,
      count: 2,
    },
    {
      id: 4,
      label: "Snoozed",
      icon: <BiSolidAlarmSnooze />,
      count: 0,
    },
    {
      id: 5,
      label: "Sent",
      icon: <FaFileCircleCheck />,
      count: 0,
    },
    {
      id: 6,
      label: "Drafts",
      icon: <TfiWrite />,
      count: 10,
    },
  ];
  return (
    <div className="sidebar h-full w-48 bg-neutral-100 p-2">
      <div className="flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-lg bg-neutral-950 text-white before:size-2 before:rounded-full before:bg-white before:content-['']"></span>
        <span className="text-xs font-semibold text-neutral-700">
          Signal sales
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2 overflow-hidden rounded-md bg-white">
        <BiSearch className="text-black" />
        <input />
      </div>
      <div className="mt-4 border-b-gray-400 pb-8">
        {side.map((s) => (
          <div
            key={s.label}
            className="flex cursor-pointer items-center justify-between gap-2 px-2 py-1 text-gray-700 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <div className="flex items-center gap-2">
              <span>{s.icon}</span>
              <span className="text-xs">{s.label}</span>
            </div>
            <div className="text-xs">{s.count}</div>
          </div>
        ))}
      </div>

      <div className="text-xs">
        <h4 className="my-4">CAMPAIGNS</h4>
        <div className="*:py-1">
          <div className="">Facebook Ads </div>
          <div> Instagram Ads </div>
          <div>Google Ads </div>
        </div>
      </div>
    </div>
  );
};
const Head = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b-neutral-400 p-2">
      <div>
        <div className="flex items-center gap-2">
          <h6 className="text-base font-semibold">Inbox</h6>
          <span className="rounded-lg bg-neutral-200 p-1 text-xs">24</span>
        </div>
        <p className="text-sm text-gray-600">
          All conversation From Campaigns{" "}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-2 text-xs text-neutral-500">
          <FaPlus /> Add AI Token
        </button>
        <FaBell className="size-8 rounded-md border border-neutral-200 p-2" />
        <IoSettingsOutline className="size-8 rounded-md border border-neutral-200 p-2" />
      </div>
    </div>
  );
};

function Main() {
  return <div className="bg-green-400">main</div>;
}
{
  /* <FaPlus />
<FaUserGroup />
<CiTimer /> */
}

// Main Inbox List:All 56   Unread 32   Needs Reply 18   Mentions 6   Starred 9
// All Campaigns   Priority   Last 7 Days
// John Carter – VP of Engineering – Spring, TX   2mRe: Solving onboarding challenges at Acme

// Alice Smith   20mRe: Exploring new marketing strategies

// Michael Brown (Not Interested)   1mAbsolutely! Let's brainstorm some ideas.

// Emily Davis   3mThis sounds promising. Can you elaborate?

// Daniel Lee   4mI have a few suggestions that might help!

// Sophia Martinez (Not Interested)   32mCan't wait! Let's make this fun!

// Chris Thompson   2mInterested

// Selected Conversation (Right Panel):John Carter   TechPoint V.   VP of Engineering   Spring, TX
// Phone: +191324522443   Email: johncarter@gmail.com
// Lisa Ann   SENT   04/OUTBOUND   Mon • 9:04 AMHi John, Noticed Techpoint just shipped your new partner program. Most teams hit a wall around 200 outbound replied a week. Would a 15 min walkthrough of Signal be useful?

// John Carter   Wed • 11:30 AMHi Lisa, hope you're well! Just following up to see if you reviewed the latest marketing materials I sent. Please let me know if you have any questions or need additional information. Looking forward to your feedback so we can move forward with the next steps.

// AI GENERATED   1/3Hi John, thanks for checking in! I've reviewed the marketing materials and they look great. I have a couple of questions about the campaign timelines can we schedule a quick call to discuss? Looking forward to moving ahead together.

// Generate another version   Schedule a Call   Send your Query

// Lead Info Sidebar (Far Right):

export default SignalSales;
