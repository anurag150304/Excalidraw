import { memo, ReactNode } from "react";

interface BtnType {
    icon: ReactNode;
    changeIcon: ReactNode;
    active: boolean;
    className?: string;
    execute: () => void;
}
function CanavasBtn({ icon, changeIcon, active, className, execute }: BtnType) {
    return (
        <button
            className={`${className}
            p-2 ${active ? 'bg-[#403e6a] border-[#403e6a]' : 'hover:bg-[#403e6a56] border-[#403e6a56]'}
            rounded-lg flex cursor-pointer
            justify-center items-center border-1 border-[#232329]
            active:border-white transition-all`}
            onClick={execute}
        >
            {active ? (changeIcon) : (icon)}
        </button>
    )
}

export default memo(CanavasBtn);