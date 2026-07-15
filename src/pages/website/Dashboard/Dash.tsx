import { cn } from "../../../libs/utils";
import avatar from "../../../assets/Dash/avatar.png";
import gity from "../../../assets/Dash/gity.svg";

export default function Dash() {
  return (
    <div className="flex bg-neutral-900 text-neutral-50">
      <div>
        <Sidebar className={"bg-neutral-800"} />
      </div>
      <div className="flex flex-1 flex-col">
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Sidebar({ className }: { className: string }) {
  return (
    <div className={cn("h-screen w-52", className)}>
      <div className="flex items-center gap-4">
        <span>
          <img className="size-8" src={gity} alt="" />
        </span>
        <span>Gity Ui Kit </span>
      </div>
      <div></div>
      <div>
        <span className="rounded-full">
          <img
            className="size-9 rounded-full"
            src={avatar}
            alt="avatar image"
          />
        </span>
      </div>
    </div>
  );
}
function Main() {
  return <div className="w-full flex-1">Main</div>;
}

function Header() {
  return <div className="h-16">header</div>;
}
