import type { IconsProps } from "../../types/types";

export const ArrowLeft = ({
    colorPrimary,
    className,
    width = '24',
    height = '24'
}: IconsProps) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            className={className}
        >
            <g
                fill="none"
                stroke={colorPrimary}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path
                    strokeDasharray="64"
                    strokeDashoffset="64"
                    d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="1.2s"
                        values="64;0"
                    />
                </path>
                <path
                    strokeDasharray="6"
                    strokeDashoffset="6"
                    d="M10 12l3 -3M10 12l3 3"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.4s"
                        dur="0.6s"
                        values="6;0"
                    />
                </path>
            </g>
        </svg>
    )
}