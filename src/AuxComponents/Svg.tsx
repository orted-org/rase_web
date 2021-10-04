const SVG = {
    loginBotLeft: (
        <svg 
            width="321" 
            height="323" 
            viewBox="0 0 321 323" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse 
                cx="-8" 
                cy="322.5" 
                rx="329" 
                ry="322.5" 
                fill="white"
            />
        </svg>
    ),

    loginTopRight: (
        <svg 
            width="228" 
            height="156" 
            viewBox="0 0 228 156" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse 
                cx="201" 
                cy="8.00001" 
                rx="207" 
                ry="138" 
                transform="rotate(19.5264 201 8.00001)" 
                fill="#E5E5E5"
            />
        </svg>
    ),

    menubar: (
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    ),

    search: (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
        </svg>
    ),

    cross: (
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    ),

    download: (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
            />
        </svg>
    )
};

export { SVG };