"use client";
import { ButtonType } from "@repo/types/commonTypes"

export default function Button(props: Partial<ButtonType>) {
    return (
        <button
            className={`
                ${props.textColor}
                ${props.textSize}
                ${props.fontWeignt}
                ${props.Hpad} ${props.Vpad}
                ${props.borderLine}
                ${props.borderColor}
                ${props.backgroundColor}
                ${props.radius}
                ${props.className}
                cursor-pointer
                flex justify-center items-center`}
            onClick={props.onClick}>
            {props.text}
            {props.icon}
        </button>
    )
}
