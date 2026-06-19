import { getServerSession } from "next-auth";
import { authOptions } from "../config/auth.config";
import Header from "../components/Header";
import Image from "next/image";
import Button from "@repo/ui/Button";
import { GoArrowRight, GoVideo } from "react-icons/go";
import Link from "next/link";
import { AddsType } from "@repo/types/commonTypes";
import {
  LuEraser,
  LuGrid2X2,
  LuLayers,
  LuPalette,
  LuPencil,
  LuUndo2,
  LuZoomIn,
} from "react-icons/lu";
import Addvertise from "../components/Add.block";
import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import { Fragment } from "react";
import { FiArrowRight } from "react-icons/fi";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const adds: AddsType[] = [
    {
      icon: <LuPencil className="text-xl" />,
      heading: "Freehand Drawing",
      text: "Draw freely with smooth, responsive brush strokes and customizable pen sizes.",
    },
    {
      icon: <FaRegSquare className="text-xl" />,
      heading: "Shapes & Lines",
      text: "Create perfect rectangles, circles, and straight lines with precision tools.",
    },
    {
      icon: <FaRegCircle className="text-xl" />,
      heading: "Geometric Tools",
      text: "Access a complete set of geometric shapes for technical drawings.",
    },
    {
      icon: <LuEraser className="text-xl" />,
      heading: "Smart Eraser",
      text: "Remove mistakes with precision eraser tools that work seamlessly.",
    },
    {
      icon: <LuZoomIn className="text-xl" />,
      heading: "Zoom Controls",
      text: "Zoom in and out for detailed work or overview of your entire canvas.",
    },
    {
      icon: <LuUndo2 className="text-xl" />,
      heading: "Undo/Redo",
      text: "Unlimited undo and redo actions to perfect your artwork.",
    },
    {
      icon: <LuLayers className="text-xl" />,
      heading: "Layer Support",
      text: "Work with multiple layers for complex compositions and easy editing.",
    },
    {
      icon: <LuGrid2X2 className="text-xl" />,
      heading: "Grid & Guides",
      text: "Toggle grid and guidelines for precise alignment and spacing.",
    },
    {
      icon: <LuPalette className="text-xl" />,
      heading: "Color Palette",
      text: "Full color picker with presets and custom color management.",
    },
  ];

  return (
    <>
      <Header session={session} />
      <main className="px-5 py-20 cursor-default flex flex-col justify-start items-center gap-36">
        <section className="w-full flex flex-row justify-center items-center gap-4">
          <div className="w-1/2 h-fit flex flex-col justify-center items-start gap-8">
            <span className="flex flex-row justify-center items-center gap-1 px-3 py-2 rounded-full w-fit h-fit bg-[#1b1036] text-[#fffffff7] border border-[#3e325b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-4 w-4 text-primary"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <span className="text-sm font-medium">Create without limits</span>
            </span>
            <div className="text-white flex flex-col justify-center items-start gap-10">
              <h1 className="text-7xl font-semibold">
                Draw Your
                <br />
                <span className="text-[#5d5ff2]">Imagination</span>
              </h1>
              <p className="opacity-60 tracking-wide text-lg font-light">
                Professional canvas drawing tool with powerful features. <br />
                Create stunning designs with shapes, lines, freehand drawing,
                and more.
              </p>
              <div className="flex flex-row justify-center items-center gap-4">
                <Link href="/dashboard">
                  <Button
                    text="Start Drawing Free &nbsp;&nbsp;&nbsp;"
                    icon={<GoArrowRight className="text-lg" />}
                    backgroundColor="bg-[#6b4def]"
                    fontWeignt="font-medium"
                    textSize="text-sm"
                    Vpad="py-3"
                    Hpad="px-6"
                    radius="rounded-xl"
                  />
                </Link>

                <Button
                  text="Watch Demo &nbsp;&nbsp;&nbsp;"
                  icon={<GoVideo className="text-lg" />}
                  backgroundColor="bg-[#090812]"
                  fontWeignt="font-medium"
                  borderLine="border-2"
                  borderColor="border-[#ffffff25]"
                  textSize="text-sm"
                  Vpad="py-2.5"
                  Hpad="px-5.5"
                  radius="rounded-xl"
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-8">
                <span className="flex flex-col justify-center items-center">
                  <strong className="text-3xl">10K+</strong>
                  <small className="opacity-60 font-light">Active Users</small>
                </span>
                <div className="h-12 border border-[#ffffff1f]" />
                <span className="flex flex-col justify-center items-center">
                  <strong className="text-3xl">50K+</strong>
                  <small className="opacity-60 font-light">
                    Artworks Created
                  </small>
                </span>
              </div>
            </div>
          </div>
          <div className="h-fit w-1/2">
            <div className="relative h-96 w-full mx-auto">
              <Image
                src="/images/background.jpg"
                alt="logo.png"
                fill
                sizes="100%"
                className="absolute object-fit rounded-3xl"
                style={{ boxShadow: "0px 0px 2.5rem #4a3885" }}
                priority
              />
            </div>
          </div>
        </section>
        <section className="w-full p-8 flex flex-col justify-start items-center gap-14 text-white">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Powerfull Tools for</h1>
              <h1 className="text-[#5d5ff2] text-5xl font-bold">
                Creative Minds
              </h1>
            </div>
            <p className="opacity-50 font-light text-lg">
              Everything you need to bring your ideas to life.
              Professional-grade tools designed
              <br />
              for creators.
            </p>
          </div>
          <div className="grid grid-rows-3 grid-cols-3 gap-5">
            {adds.map((add, idx) => (
              <Fragment key={idx}>{Addvertise(add)}</Fragment>
            ))}
          </div>
        </section>
        <section>
          <div className="text-white">
            <div>
              <h1>Ready to Start</h1>
              <h1>Ceating?</h1>
            </div>
            <span>
              Join thousands of creators and start drawing today. No credit card
              required.
            </span>
            <div>
              <Link href="/signup">
                <Button
                  text="Get Started Free &nbsp;&nbsp;&nbsp;"
                  icon={<FiArrowRight />}
                  textSize="text-sm"
                  textColor="text-[#fff]"
                  fontWeignt="font-semibold"
                  backgroundColor="bg-[#6b4def]"
                  borderLine="border-2"
                  borderColor="border-[#6b4def]"
                  Vpad="py-1.5"
                  Hpad="px-6"
                  radius="rounded-lg"
                  className="hover:bg-[#6147d6] hover:text-white transition-all"
                />
                <Button
                  text="Contact Sales"
                  textSize="text-sm"
                  textColor="text-[#fff]"
                  fontWeignt="font-semibold"
                  backgroundColor="bg-[#6b4def]"
                  borderLine="border-2"
                  borderColor="border-[#6b4def]"
                  Vpad="py-1.5"
                  Hpad="px-6"
                  radius="rounded-lg"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
