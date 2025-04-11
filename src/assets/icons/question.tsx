import type { IconsProps } from "../../types/types";

interface PropsQuestion {
    secondsDelay?: number;
}

type Props = IconsProps & PropsQuestion;

export const Question = ({
    colorPrimary,
    className,
    width = '24',
    height = '24',
    secondsDelay = 0

}: Props) => {

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
                    d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin={`${secondsDelay}s`}
                        dur="1.2s"
                        values="64;0"
                    />
                </path>
                <path
                    strokeDasharray="16"
                    strokeDashoffset="16"
                    d="M9 10c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 0.98 -0.47 1.85 -1.2 2.4c-0.73 0.55 -1.3 0.6 -1.8 1.6"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin={`${secondsDelay + 1.2}s`}
                        dur="0.4s"
                        values="16;0"
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
                        begin={`${secondsDelay + 1.6}s`}
                        dur="0.4s"
                        values="2;0"
                    />
                </path>
            </g>
        </svg>
    )
}