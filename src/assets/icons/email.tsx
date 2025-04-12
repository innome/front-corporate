import type { IconsProps } from "../../types/types";

export const Email = ({
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
                    d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="64;0"
                    />
                </path>
                <path
                    strokeDasharray="24"
                    strokeDashoffset="24"
                    d="M3 6.5l9 5.5l9 -5.5"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.2s"
                        values="24;0"
                    />
                </path>
            </g>
        </svg>
    )
}