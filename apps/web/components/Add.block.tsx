import { AddsType } from "@repo/types/commonTypes";
export default function Addvertise({ icon, heading, text }: AddsType) {
  return (
    <div
      className="flex flex-col justify-center items-start gap-3 border border-[#ffffff27]
        rounded-lg p-4 hover:shadow-md shadow-white transition-all duration-300 ease-in-out"
    >
      <span className="p-2.5 rounded-lg bg-[#5d5ff2]">{icon}</span>
      <h1 className="text-lg">{heading}</h1>
      <p className="text-sm opacity-60 font-light text-wrap">{text}</p>
    </div>
  );
}
