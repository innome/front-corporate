import type { IconsProps } from "../types/types";

export const Gears = ({
    colorPrimary,
    className,
}: IconsProps) => {

    return (
        <svg
            width='290'
            height='180'
            viewBox="70 110 280 230"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <g id="largeTooth">
                    <rect x="-12" y="-85" width="24" height="25" fill="#5a6b7a"/>
                </g>
                <g id="smallTooth">
                    <rect x="-10" y="-65" width="20" height="20" fill="#5a6b7a"/>
                </g>
            </defs>
            <g transform="translate(160, 200)">
                <g>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0;360"
                        dur="6s"
                        repeatCount="indefinite"
                    />
                    <g>
                        <use href="#largeTooth" transform="rotate(0)"/>
                        <use href="#largeTooth" transform="rotate(30)"/>
                        <use href="#largeTooth" transform="rotate(60)"/>
                        <use href="#largeTooth" transform="rotate(90)"/>
                        <use href="#largeTooth" transform="rotate(120)"/>
                        <use href="#largeTooth" transform="rotate(150)"/>
                        <use href="#largeTooth" transform="rotate(180)"/>
                        <use href="#largeTooth" transform="rotate(210)"/>
                        <use href="#largeTooth" transform="rotate(240)"/>
                        <use href="#largeTooth" transform="rotate(270)"/>
                        <use href="#largeTooth" transform="rotate(300)"/>
                        <use href="#largeTooth" transform="rotate(330)"/>
                    </g>
                    <circle cx="0" cy="0" r="70" fill="#5a6b7a" />
                    <circle cx="0" cy="0" r="55" fill="none" stroke="#7dd3c0" strokeWidth="4" />
                    <circle cx="0" cy="0" r="35" fill={colorPrimary} />
                </g>
            </g>
            <g transform="translate(290, 270)">
                <g>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0;-540"
                        dur="6s"
                        repeatCount="indefinite"/>
                    <g>
                        <use href="#smallTooth" transform="rotate(0)"/>
                        <use href="#smallTooth" transform="rotate(45)"/>
                        <use href="#smallTooth" transform="rotate(90)"/>
                        <use href="#smallTooth" transform="rotate(135)"/>
                        <use href="#smallTooth" transform="rotate(180)"/>
                        <use href="#smallTooth" transform="rotate(225)"/>
                        <use href="#smallTooth" transform="rotate(270)"/>
                        <use href="#smallTooth" transform="rotate(315)"/>
                    </g>
                    <circle cx="0" cy="0" r="50" fill="#5a6b7a"/>
                    <circle cx="0" cy="0" r="38" fill="none" stroke="#7dd3c0" strokeWidth="3"/>
                    <circle cx="0" cy="0" r="25" fill={colorPrimary} />
                </g>
            </g>
        </svg>
    )
}