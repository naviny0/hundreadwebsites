import { useId, useState } from "react"

export default function Lp() {
  const btn = ["work board", "website", "Whole Design Team", "Whole Design Team2"]
  const [selectedBtn, setSelectedBtn] = useState(0)
  return (
    <div className="bg-linear-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="uppercase tracking-[-2px] text-2xl text-center text-slate-800 font-extrabold ">This is All <br /> where <span className="text-blue-800">it start</span> </h1>
        <div className="flex items-center md:justify-center justify-center flex-wrap gap-4 mt-10">
          {btn.map((b, i) => {
            const select = selectedBtn === i
            return <button key={b} onClick={() => setSelectedBtn(i)} className={`rounded-full text-sm py-2 px-4 ${select && "shadow-lg bg-white"}`}>{b}</button>
          })}
        </div>
        <Card />
      </div>
    </div>
  )
}
function Card() {
  return (
    <div className="relative flex justify-center">
      <div className="bg-white absolute w-80 md:w-104 mx-auto mt-10 shadow-xs rounded-4xl py-5 z-10 px-5">
        <h2 className="font-bold uppercase text-lg md:text-xl tracking-[-1px]">Landing Page</h2>
        <p className="text-gray-600 tracking-normal text-xs md:text-sm">Getting good designs - is now probably the easiest as we did the difficult part of hiring only awesome.</p>

        <div>
          <div className="flex items-center gap-4 mt-5">
            <div className="bg-gray-100 rounded-xl px-2 py-4 text-sm flex-1">
              <div className="flex items-center justify-between">Add Framer Dev  <span> <Sbtn /></span> </div>
              <div className="font-bold"> + $2,000</div>
            </div>
            <div className="bg-gray-100 rounded-xl px-2 text-sm py-4 flex-1">
              <div className="flex items-center justify-between"> Add more pages<span> <Sbtn /></span> </div>
              <div className="font-bold"> $800</div>
            </div>
          </div>

          <div className="mt-5 ">
            <p className="text-sm">
              Starting from
            </p>
            <p className="font-bold text-xl md:text-5xl tracking-[-1px]">
              $7,549.00
            </p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-full my-5">
          <button className="text-white py-3 flex items-center justify-center text-sm w-full">
            Start Project
          </button>
        </div>
      </div>

      <div className="rounded-4xl w-80 md:w-104 h-80 flex items-end absolute top-32 md:top-36 bg-linear-to-r from-[#70b114] to-[#70b115] z-0 p-3">
        <p className="text-white mx-auto">
          This is the start of something great!!
        </p>
      </div>
    </div>
  )
}
function Sbtn() {
  const id = useId()
  return (
    <div className="relative inline-block md:w-11 md:h-5">
      <input defaultChecked id={id} type="checkbox" className="peer appearance-none w-11 h-4 bg-slate-100 border border-slate-300 rounded-full checked:bg-green-600 checked:border-slate-800 cursor-pointer transition-colors duration-300" />
      <label htmlFor={id} className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>
  )
}