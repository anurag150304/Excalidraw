export interface ButtonType {
    text: string;
    textColor: string;
    textSize: string;
    fontWeignt: string;
    Vpad: string;
    Hpad: string;
    borderLine: string;
    borderColor: string;
    backgroundColor: string;
    radius: string;
    className: string;
    icon: any;
    task: string;
    onClick?: () => void;
}

export type DataType = { roomId: string, slug: Shapes };

export interface Coords {
    initial: { x: number, y: number };
    final: { x: number, y: number };
}

export interface Shapes {
    type: "rect" | "circ" | "line" | "pencil" | "lock";
    cords: Coords;
    size: { h: number, w: number };
    pixels?: { x: number, y: number }[];
}

export interface ToolsType {
    lock: boolean;
    rect: boolean;
    circ: boolean;
    line: boolean;
    pencil: boolean;
    eraser: boolean;
}