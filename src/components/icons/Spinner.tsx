import React from "react"

const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   style={{ margin: "auto", background: "#fff" }}
      width="40"
      height="40"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient
          id="ldio-m1n3ix290yi-gradient"
          cx="0.5"
          cy="0.5"
          r="2"
          fx="0"
          fy="0"
        >
          <stop offset="0%" stopColor="#ffffcb"></stop>
          <stop offset="100%" stopColor="#ff7c81"></stop>
        </radialGradient>
      </defs>
      <g>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#ffffdc"
          strokeOpacity="0.7"
          strokeWidth="12"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="url(#ldio-m1n3ix290yi-gradient)"
          strokeWidth="10"
        ></circle>
        <animateTransform
          attributeName="transform"
          dur="1s"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </g>
    </svg>
  )
}

export default Spinner
