import type { IconsProps } from "../../types/types";

export const Alert = ({
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
                    d="M12 3l9 17h-18l9 -17Z"
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
                    d="M12 10v4"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.2s"
                        dur="0.4s"
                        values="6;0"
                    />
                    <animate
                        attributeName="stroke-width"
                        begin="3.6s"
                        dur="6s"
                        keyTimes="0;0.1;0.2;0.3;1"
                        repeatCount="indefinite"
                        values="2;3;3;2;2"
                    />
                </path>
                <path
                    strokeDasharray="2"
                    strokeDashoffset="2"
                    d="M12 17v0.01"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.6s"
                        dur="0.4s"
                        values="2;0"
                    />
                    <animate
                        attributeName="stroke-width"
                        begin="4.2s"
                        dur="6s"
                        keyTimes="0;0.1;0.2;0.3;1"
                        repeatCount="indefinite"
                        values="2;3;3;2;2"
                    />
                </path>
            </g>
        </svg>
    )
}