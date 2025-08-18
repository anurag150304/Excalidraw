"use client";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import CanavasBtn from "./Canvas.btn";
import { GiCircle, GiPlainSquare, GiSquare } from "react-icons/gi";
import { GiPlainCircle } from "react-icons/gi";
import { memo, useRef, useState } from "react";
import { ToolsType, Shapes } from "@repo/types/commonTypes";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiPencilSimpleLight } from "react-icons/pi";
import { PiPencilSimpleFill } from "react-icons/pi";
import { CiEraser } from "react-icons/ci";
import { draw } from "../canvas/draw";
import { sendMessage } from "../lib/socket.config";
import { FaEraser } from "react-icons/fa";

function TopPanel({ canvas, shapes, roomId }: { canvas: HTMLCanvasElement; shapes: Shapes[]; roomId: string; }) {
    const [tool, setTool] = useState<ToolsType>({ lock: true, rect: false, circ: false, line: false, pencil: false, eraser: false });
    const cleanupRef = useRef<() => void>(() => { });

    function executeDrawTool(type: "rect" | "circ" | "line" | "pencil" | "lock" | "eraser") {
        setTool({ lock: false, rect: false, circ: false, line: false, pencil: false, eraser: false, [type]: true });
        cleanupRef.current?.();
        cleanupRef.current = draw({ canvas, shapes, type, sendCanvas: sendMessage, roomId });
    }

    return (
        <div className="absolute z-20 text-white flex justify-center items-center gap-4 bg-[#232329] py-1.5 px-2 rounded-lg left-1/2 -translate-x-1/2 top-4">
            <CanavasBtn
                active={tool.lock}
                icon={<CiUnlock className="text-xl" />}
                changeIcon={<CiLock className="text-xl" />}
                execute={() => executeDrawTool("lock")}
            />
            <CanavasBtn
                active={tool.rect}
                icon={<GiSquare className="text-xl" />}
                changeIcon={<GiPlainSquare className="text-xl" />}
                execute={() => executeDrawTool("rect")}
            />
            <CanavasBtn
                active={tool.circ}
                icon={<GiCircle className="text-xl" />}
                changeIcon={<GiPlainCircle className="text-xl" />}
                execute={() => executeDrawTool("circ")}
            />
            <CanavasBtn
                active={tool.line}
                icon={<HiArrowLongRight className="text-xl" />}
                changeIcon={<HiArrowLongRight className="text-xl" />}
                execute={() => executeDrawTool("line")}
            />
            <CanavasBtn
                active={tool.pencil}
                icon={<PiPencilSimpleLight className="text-xl" />}
                changeIcon={<PiPencilSimpleFill className="text-xl" />}
                execute={() => executeDrawTool("pencil")}
            />
            <CanavasBtn
                active={tool.eraser}
                icon={<CiEraser className="text-xl" />}
                changeIcon={<FaEraser className="text-xl" />}
                execute={() => executeDrawTool("eraser")}
            />
        </div>
    )
}

export default memo(TopPanel);