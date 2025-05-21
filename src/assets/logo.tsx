interface PropsLogo {
    theme: 'blue' | 'gray';
    className?: string;
}

export const Logo = ({ theme = 'blue', className }: PropsLogo) => {
    // Colores para el tema azul
    const blueColors = {
        base: '#e0e0e0',       // Color base (gris claro)
        primary: '#22266e',    // Azul oscuro
        secondary: '#3a4c99',  // Azul medio
        accent: '#3e5dbb',     // Azul más claro
        stroke: '#3a4c99',     // Color del borde
    };

    // Colores para el tema gris
    const grayColors = {
        base: '#f5f5f5',       // Color base (gris muy claro)
        primary: '#212230',    // Gris oscuro
        secondary: '#405259',  // Gris medio
        accent: '#75899b',     // Gris claro
        stroke: '#405259',     // Color del borde
    };

    // Seleccionar el tema de colores
    const colors = theme === 'blue' ? blueColors : grayColors;
    const positionWidth = 320;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            className={className}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <filter id="drop-shadow" x="66.06" y="188.3" width="867.88" height="623.39" filterUnits="userSpaceOnUse">
                    <feOffset dx="-14" dy="14"/>
                    <feGaussianBlur result="blur" stdDeviation="6"/>
                    <feFlood floodColor="#12267c" floodOpacity=".1"/>
                    <feComposite in2="blur" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                </filter>

                <clipPath id="clip-animation">
                    <rect x="0" y="-1000" width="1000" height="1000">
                        <animate
                            attributeName="y"
                            from="-1000"
                            to="0"
                            dur="3s"
                            fill="freeze"
                            begin="0s"
                            calcMode="spline"
                            keySplines="0.25 0.1 0.25 1"
                        />
                    </rect>
                </clipPath>
            </defs>

            {/* Logo base antes de carga */}
            <g transform={`translate(${positionWidth}, 0)`}>
                <g>
                    {/* Contorno circular */}
                    <path
                        stroke={colors.base}
                        strokeWidth="17"
                        fill="none"
                        strokeMiterlimit="10"
                        d="M294.94,377.76c-1.54,90-135.41,89.99-136.93,0,1.54-90,135.41-89.98,136.93,0Z"
                    />
                    <path
                        fill={colors.base}
                        d="M265.16,380.09c-.89,51.86-78.03,51.86-78.91,0,.89-51.86,78.03-51.85,78.91,0Z"
                    />
                    <g>
                        <path
                            fill={colors.base}
                            d="M128.32,400.95c-178.66,192.02,85.16,249.34,73.47,410.75,32.78-24.01,55.19-54.43,61.78-94.62-39.57-80.31-150.54-220.59-135.25-316.13Z"
                        />
                        <path
                            fill={colors.base}
                            d="M128.32,400.95c-122.45,132.06,127.45,236.54,148.22,349.95,38.23-43.84,34.89-83.36,34.89-100.05-43.11-57.21-184.37-170.84-183.11-249.9Z"
                        />
                        <path
                            fill={colors.base}
                            d="M128.32,400.95c-39.52,161.96,174.76,186.45,202.2,284.2,63.28-251.92-174.93-123.36-202.2-284.2Z"
                        />
                    </g>
                    <path
                        fill={colors.base}
                        d="M109.21,188.3c-12.31,222.42,183.29,115.22,203.17,251.54,27-73.27-30.67-120.83,23.75-178.65-34.54,10.23-66.48,17.92-84.61,12.09,17.11,11.95,23.84,29.28,27.87,48.01-51.65-89.01-158.06-21.08-170.17-132.99Z"
                    />
                </g>
            </g>

            {/* Logo con color (se revela gradualmente) */}
            <g transform={`translate(${positionWidth}, 0)`} filter="url(#drop-shadow)" clipPath="url(#clip-animation)">
                <g>
                    {/* Contorno circular */}
                    <path
                        stroke={colors.stroke}
                        strokeWidth="17"
                        fill="none"
                        strokeMiterlimit="10"
                        d="M294.94,377.76c-1.54,90-135.41,89.99-136.93,0,1.54-90,135.41-89.98,136.93,0Z"
                    />
                    <path
                        fill={colors.accent}
                        d="M265.16,380.09c-.89,51.86-78.03,51.86-78.91,0,.89-51.86,78.03-51.85,78.91,0Z"
                    />
                    <g>
                        <path
                            fill={colors.primary}
                            d="M128.32,400.95c-178.66,192.02,85.16,249.34,73.47,410.75,32.78-24.01,55.19-54.43,61.78-94.62-39.57-80.31-150.54-220.59-135.25-316.13Z"
                        />
                        <path
                            fill={colors.secondary}
                            d="M128.32,400.95c-122.45,132.06,127.45,236.54,148.22,349.95,38.23-43.84,34.89-83.36,34.89-100.05-43.11-57.21-184.37-170.84-183.11-249.9Z"
                        />
                        <path
                            fill={colors.accent}
                            d="M128.32,400.95c-39.52,161.96,174.76,186.45,202.2,284.2,63.28-251.92-174.93-123.36-202.2-284.2Z"
                        />
                    </g>
                    <path
                        fill={colors.primary}
                        d="M109.21,188.3c-12.31,222.42,183.29,115.22,203.17,251.54,27-73.27-30.67-120.83,23.75-178.65-34.54,10.23-66.48,17.92-84.61,12.09,17.11,11.95,23.84,29.28,27.87,48.01-51.65-89.01-158.06-21.08-170.17-132.99Z"
                    />
                </g>
            </g>
        </svg>
    );
}