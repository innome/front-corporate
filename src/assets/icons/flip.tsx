import type { IconsProps } from "../../types/types";

export const Flip = ({
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
                    strokeDasharray="40"
                    strokeDashoffset="40"
                    d="M17 15.33c2.41 -0.72 4 -1.94 4 -3.33c0 -2.21 -4.03 -4 -9 -4c-4.97 0 -9 1.79 -9 4c0 2.06 3.5 3.75 8 3.98"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="1s"
                        values="40;0"
                    />
                </path>
                <path
                    fill={colorPrimary}
                    d="M12.25 16l0 0l0 0z"
                    opacity="0"
                >
                    <animate
                        fill="freeze"
                        attributeName="d"
                        begin="1s"
                        dur="0.4s"
                        values="M12.25 16l0 0l0 0z;M12.25 16L9.5 13.25L9.5 18.75z"
                    />
                    <set
                        fill="freeze"
                        attributeName="opacity"
                        begin="1s"
                        to="1"
                    />
                </path>
            </g>
        </svg>
    )
}