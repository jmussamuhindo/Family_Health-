"use client"
interface IconsProps {
  width?: number
  height?: number
  className?: string
  onClick?: () => void
}
export const Twitter = ({ width = 36, height = 36, className }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M251.09,67.41A12,12,0,0,0,240,60H211.82a52.73,52.73,0,0,0-43.67-24,50.85,50.85,0,0,0-36.6,14.85A51.87,51.87,0,0,0,116,88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12,12,0,0,0-20.47,7.38C22.52,125.1,53.48,162.72,70.89,178.05,56.4,192.83,36,200.68,35.8,200.76A12,12,0,0,0,30,218.66C32,221.55,43.44,236,80,236c72.25,0,132.7-55.26,139.6-126.63l28.88-28.88A12,12,0,0,0,251.09,67.41ZM199.52,95.52a11.93,11.93,0,0,0-3.49,7.72C192.14,164.23,141.18,212,80,212a90.78,90.78,0,0,1-12.49-.79C78,204.55,89.72,195.07,98,182.66a12,12,0,0,0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37,94.4,96,110.79,126,115.84A12,12,0,0,0,140,104V88a28,28,0,0,1,8.41-20.07A27.07,27.07,0,0,1,167.86,60a28.83,28.83,0,0,1,25.82,16.81,12,12,0,0,0,11,7.19H211Z" />
    </svg>
  )
}
export const YouTube = ({ width = 20, height = 20, className }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z" />
    </svg>
  )
}
export const Email = ({ width = 20, height = 20, className }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#000000"
      viewBox="0 0 256 256"
      className={className}
    >
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
    </svg>
  )
}
export const Map = ({ width = 20, height = 20, className }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" />
    </svg>
  )
}
export const Arrow = ({ width = 20, height = 20, className }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="white"
      className={className}
      viewBox="0 0 256 256"
    >
      <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
    </svg>
  )
}
export const List = ({
  width = 20,
  height = 20,
  className,
  onClick
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#000000"
      className={className}
      onClick={onClick}
      viewBox="0 0 256 256"
    >
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
    </svg>
  )
}

export const Close = ({
  width = 20,
  height = 20,
  className,
  onClick
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
    </svg>
  )
}

export const Caretdown = ({
  width = 20,
  height = 20,
  className,
  onClick
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
    </svg>
  )
}

export const CircleDesign = ({
  width = 367,
  height = 364,
  className,
  onClick
}: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 367 364"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.16">
        <mask
          id="mask0_340_1936"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={-63}
          y={-30}
          width={475}
          height={475}
        >
          <line
            x1="12.0381"
            y1={-30}
            x2="12.0381"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="35.3516"
            y1={-30}
            x2="35.3516"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="58.6641"
            y1={-30}
            x2="58.6641"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="81.9766"
            y1={-30}
            x2="81.9766"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="105.29"
            y1={-30}
            x2="105.29"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="128.603"
            y1={-30}
            x2="128.603"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="151.916"
            y1={-30}
            x2="151.916"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="175.229"
            y1={-30}
            x2="175.229"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="198.542"
            y1={-30}
            x2="198.542"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="221.855"
            y1={-30}
            x2="221.854"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="245.167"
            y1={-30}
            x2="245.167"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="268.48"
            y1={-30}
            x2="268.48"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="291.793"
            y1={-30}
            x2="291.793"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="315.106"
            y1={-30}
            x2="315.106"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="338.419"
            y1={-30}
            x2="338.419"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1="361.731"
            y1={-30}
            x2="361.731"
            y2={445}
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="346.649"
            x2={412}
            y2="346.649"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="323.336"
            x2={412}
            y2="323.336"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="300.023"
            x2={412}
            y2="300.023"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="276.71"
            x2={412}
            y2="276.71"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="253.397"
            x2={412}
            y2="253.397"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="230.084"
            x2={412}
            y2="230.084"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="206.771"
            x2={412}
            y2="206.771"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="183.459"
            x2={412}
            y2="183.459"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="160.146"
            x2={412}
            y2="160.146"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="136.833"
            x2={412}
            y2="136.833"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="113.52"
            x2={412}
            y2="113.52"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="90.207"
            x2={412}
            y2="90.207"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="66.894"
            x2={412}
            y2="66.894"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="43.5812"
            x2={412}
            y2="43.5812"
            stroke="black"
            strokeWidth="1.45706"
          />
          <line
            x1={-63}
            y1="20.2683"
            x2={412}
            y2="20.2683"
            stroke="black"
            strokeWidth="1.45706"
          />
        </mask>
        <g mask="url(#mask0_340_1936)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M183.454 303.838C251.519 303.838 306.697 249.174 306.697 181.743C306.697 114.313 251.519 59.6491 183.454 59.6491C115.388 59.6491 60.2105 114.313 60.2105 181.743C60.2105 249.174 115.388 303.838 183.454 303.838ZM183.454 363.487C284.773 363.487 366.908 282.118 366.908 181.743C366.908 81.3693 284.773 0 183.454 0C82.1351 0 0 81.3693 0 181.743C0 282.118 82.1351 363.487 183.454 363.487Z"
            fill="#02181D"
          />
        </g>
      </g>
    </svg>
  )
}

const Empty = () => {
  return (
    <svg
      width={121}
      height={114}
      viewBox="0 0 121 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_336_4827)">
        <rect
          x="0.116211"
          y="55.5"
          width={53}
          height={67}
          rx={8}
          transform="rotate(-30 0.116211 55.5)"
          fill="url(#paint0_linear_336_4827)"
        />
        <g filter="url(#filter0_i_336_4827)">
          <rect
            x="11.3125"
            y="62.8921"
            width={42}
            height={11}
            rx={2}
            transform="rotate(-30 11.3125 62.8921)"
            fill="#64E062"
          />
          <rect
            x="10.971"
            y="62.8006"
            width="42.5"
            height="11.5"
            rx="2.25"
            transform="rotate(-30 10.971 62.8006)"
            stroke="url(#paint1_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter1_i_336_4827)">
          <rect
            x="19.3125"
            y="76.7485"
            width={42}
            height={11}
            rx={2}
            transform="rotate(-30 19.3125 76.7485)"
            fill="#64E062"
          />
          <rect
            x="18.971"
            y="76.657"
            width="42.5"
            height="11.5"
            rx="2.25"
            transform="rotate(-30 18.971 76.657)"
            stroke="url(#paint2_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter2_i_336_4827)">
          <rect
            x="27.3125"
            y="90.605"
            width={42}
            height={5}
            rx={2}
            transform="rotate(-30 27.3125 90.605)"
            fill="#64E062"
          />
          <rect
            x="26.971"
            y="90.5135"
            width="42.5"
            height="5.5"
            rx="2.25"
            transform="rotate(-30 26.971 90.5135)"
            stroke="url(#paint3_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter3_i_336_4827)">
          <rect
            x="30.8125"
            y="96.667"
            width={42}
            height={5}
            rx={2}
            transform="rotate(-30 30.8125 96.667)"
            fill="#64E062"
          />
          <rect
            x="30.471"
            y="96.5755"
            width="42.5"
            height="5.5"
            rx="2.25"
            transform="rotate(-30 30.471 96.5755)"
            stroke="url(#paint4_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
      </g>
      <rect
        x="-0.566802"
        y="55.317"
        width={54}
        height={68}
        rx="8.5"
        transform="rotate(-30 -0.566802 55.317)"
        stroke="#64E062"
      />
      <g clipPath="url(#clip1_336_4827)">
        <rect
          x="14.8838"
          y="17.1875"
          width={53}
          height={67}
          rx={8}
          transform="rotate(-18.9228 14.8838 17.1875)"
          fill="url(#paint5_linear_336_4827)"
        />
        <g filter="url(#filter4_i_336_4827)">
          <rect
            x="24.4512"
            y="26.5933"
            width={42}
            height={11}
            rx={2}
            transform="rotate(-18.9228 24.4512 26.5933)"
            fill="#64E062"
          />
          <rect
            x="24.1336"
            y="26.4378"
            width="42.5"
            height="11.5"
            rx="2.25"
            transform="rotate(-18.9228 24.1336 26.4378)"
            stroke="url(#paint6_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter5_i_336_4827)">
          <rect
            x="29.6396"
            y="41.7285"
            width={42}
            height={11}
            rx={2}
            transform="rotate(-18.9228 29.6396 41.7285)"
            fill="#64E062"
          />
          <rect
            x="29.3221"
            y="41.5731"
            width="42.5"
            height="11.5"
            rx="2.25"
            transform="rotate(-18.9228 29.3221 41.5731)"
            stroke="url(#paint7_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter6_i_336_4827)">
          <rect
            x="34.8281"
            y="56.8638"
            width={42}
            height={5}
            rx={2}
            transform="rotate(-18.9228 34.8281 56.8638)"
            fill="#64E062"
          />
          <rect
            x="34.5106"
            y="56.7084"
            width="42.5"
            height="5.5"
            rx="2.25"
            transform="rotate(-18.9228 34.5106 56.7084)"
            stroke="url(#paint8_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter7_i_336_4827)">
          <rect
            x="37.0986"
            y="63.4854"
            width={42}
            height={5}
            rx={2}
            transform="rotate(-18.9228 37.0986 63.4854)"
            fill="#64E062"
          />
          <rect
            x="36.7811"
            y="63.3299"
            width="42.5"
            height="5.5"
            rx="2.25"
            transform="rotate(-18.9228 36.7811 63.3299)"
            stroke="url(#paint9_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
      </g>
      <rect
        x="14.2487"
        y="16.8767"
        width={54}
        height={68}
        rx="8.5"
        transform="rotate(-18.9228 14.2487 16.8767)"
        stroke="#64E062"
      />
      <g clipPath="url(#clip2_336_4827)">
        <rect
          x="69.6895"
          y="16.2827"
          width={53}
          height={67}
          rx={8}
          transform="rotate(15 69.6895 16.2827)"
          fill="url(#paint10_linear_336_4827)"
        />
        <g filter="url(#filter8_i_336_4827)">
          <rect
            x="72.3789"
            y="29.4268"
            width={42}
            height={11}
            rx={2}
            transform="rotate(15 72.3789 29.4268)"
            fill="#64E062"
          />
          <rect
            x="72.2021"
            y="29.1206"
            width="42.5"
            height="11.5"
            rx="2.25"
            transform="rotate(15 72.2021 29.1206)"
            stroke="url(#paint11_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter9_i_336_4827)">
          <rect
            x="68.2383"
            y="44.8813"
            width={42}
            height={11}
            rx={2}
            transform="rotate(15 68.2383 44.8813)"
            fill="#64E062"
          />
          <rect
            x="68.0615"
            y="44.5752"
            width="42.5"
            height="11.5"
            rx="2.25"
            transform="rotate(15 68.0615 44.5752)"
            stroke="url(#paint12_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter10_i_336_4827)">
          <rect
            x="64.0967"
            y="60.3364"
            width={42}
            height={5}
            rx={2}
            transform="rotate(15 64.0967 60.3364)"
            fill="#64E062"
          />
          <rect
            x="63.9199"
            y="60.0302"
            width="42.5"
            height="5.5"
            rx="2.25"
            transform="rotate(15 63.9199 60.0302)"
            stroke="url(#paint13_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
        <g filter="url(#filter11_i_336_4827)">
          <rect
            x="62.2852"
            y="67.0981"
            width={42}
            height={5}
            rx={2}
            transform="rotate(15 62.2852 67.0981)"
            fill="#64E062"
          />
          <rect
            x="62.1084"
            y="66.792"
            width="42.5"
            height="5.5"
            rx="2.25"
            transform="rotate(15 62.1084 66.792)"
            stroke="url(#paint14_linear_336_4827)"
            strokeWidth="0.5"
          />
        </g>
      </g>
      <rect
        x="69.3359"
        y="15.6703"
        width={54}
        height={68}
        rx="8.5"
        transform="rotate(15 69.3359 15.6703)"
        stroke="#64E062"
      />
      <defs>
        <filter
          id="filter0_i_336_4827"
          x="11.3125"
          y="41.8921"
          width="41.873"
          height="34.5264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter1_i_336_4827"
          x="19.3125"
          y="55.7485"
          width="41.873"
          height="34.5264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter2_i_336_4827"
          x="27.3125"
          y="69.605"
          width="38.873"
          height="29.3301"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter3_i_336_4827"
          x="30.8125"
          y="75.667"
          width="38.873"
          height="29.3301"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter4_i_336_4827"
          x="24.4512"
          y="12.9727"
          width="43.2979"
          height="28.0264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter5_i_336_4827"
          x="29.6396"
          y="28.1079"
          width="43.2979"
          height="28.0264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter6_i_336_4827"
          x="34.8281"
          y="43.2432"
          width="41.3516"
          height="22.3506"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter7_i_336_4827"
          x="37.0986"
          y="49.8647"
          width="41.3516"
          height="22.3506"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter8_i_336_4827"
          x="69.4805"
          y="29.3755"
          width="43.5186"
          height="25.5981"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter9_i_336_4827"
          x="65.3398"
          y="44.8301"
          width="43.5186"
          height="25.5981"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter10_i_336_4827"
          x="62.751"
          y="60.2852"
          width="41.9658"
          height="19.8022"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <filter
          id="filter11_i_336_4827"
          x="60.9395"
          y="67.0469"
          width="41.9658"
          height="19.8022"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.916667 0 0 0 0 1 0 0 0 0 0.955 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_336_4827"
          />
        </filter>
        <linearGradient
          id="paint0_linear_336_4827"
          x1="26.6162"
          y1="46.5"
          x2="26.6162"
          y2={150}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDFADD" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_336_4827"
          x1="32.3125"
          y1="62.8921"
          x2="32.3125"
          y2="73.8921"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_336_4827"
          x1="40.3125"
          y1="76.7485"
          x2="40.3125"
          y2="87.7485"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_336_4827"
          x1="48.3125"
          y1="90.605"
          x2="48.3125"
          y2="95.605"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_336_4827"
          x1="51.8125"
          y1="96.667"
          x2="51.8125"
          y2="101.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_336_4827"
          x1="41.3838"
          y1="8.1875"
          x2="41.3838"
          y2="111.687"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDFADD" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_336_4827"
          x1="45.4512"
          y1="26.5933"
          x2="45.4512"
          y2="37.5933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint7_linear_336_4827"
          x1="50.6396"
          y1="41.7285"
          x2="50.6396"
          y2="52.7285"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint8_linear_336_4827"
          x1="55.8281"
          y1="56.8638"
          x2="55.8281"
          y2="61.8638"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint9_linear_336_4827"
          x1="58.0986"
          y1="63.4854"
          x2="58.0986"
          y2="68.4854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint10_linear_336_4827"
          x1="96.1895"
          y1="7.28271"
          x2="96.1895"
          y2="110.783"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDFADD" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_336_4827"
          x1="93.3789"
          y1="29.4268"
          x2="93.3789"
          y2="40.4268"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint12_linear_336_4827"
          x1="89.2383"
          y1="44.8813"
          x2="89.2383"
          y2="55.8813"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint13_linear_336_4827"
          x1="85.0967"
          y1="60.3364"
          x2="85.0967"
          y2="65.3364"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint14_linear_336_4827"
          x1="83.2852"
          y1="67.0981"
          x2="83.2852"
          y2="72.0981"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADF0AC" />
          <stop offset={1} stopColor="#ADF0AC" stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0_336_4827">
          <rect
            x="0.116211"
            y="55.5"
            width={53}
            height={67}
            rx={8}
            transform="rotate(-30 0.116211 55.5)"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip1_336_4827">
          <rect
            x="14.8838"
            y="17.1875"
            width={53}
            height={67}
            rx={8}
            transform="rotate(-18.9228 14.8838 17.1875)"
            fill="white"
          />
        </clipPath>
        <clipPath id="clip2_336_4827">
          <rect
            x="69.6895"
            y="16.2827"
            width={53}
            height={67}
            rx={8}
            transform="rotate(15 69.6895 16.2827)"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Empty

export const Edit = ({ width = 24, height = 24, className }: IconsProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3426 6.00845L13.9908 2.6567C13.8933 2.55918 13.7776 2.48183 13.6502 2.42906C13.5228 2.37628 13.3862 2.34912 13.2483 2.34912C13.1104 2.34912 12.9739 2.37628 12.8465 2.42906C12.7191 2.48183 12.6033 2.55918 12.5058 2.6567L3.25757 11.9057C3.15988 12.0031 3.08241 12.1188 3.02963 12.2462C2.97686 12.3737 2.94982 12.5103 2.95008 12.6482V15.9999C2.95008 16.2784 3.0607 16.5455 3.25761 16.7424C3.45453 16.9393 3.7216 17.0499 4.00008 17.0499H7.35183C7.48975 17.0502 7.62637 17.0232 7.7538 16.9704C7.88123 16.9176 7.99696 16.8401 8.09433 16.7424L17.3426 7.49345C17.4401 7.39594 17.5174 7.28019 17.5702 7.15279C17.623 7.02539 17.6502 6.88884 17.6502 6.75095C17.6502 6.61305 17.623 6.4765 17.5702 6.3491C17.5174 6.22171 17.4401 6.10595 17.3426 6.00845ZM7.45757 16.1057C7.42957 16.1339 7.39154 16.1498 7.35183 16.1499H4.00008C3.96029 16.1499 3.92214 16.1341 3.89401 16.106C3.86588 16.0779 3.85008 16.0397 3.85008 15.9999V12.6482C3.85024 12.6085 3.86616 12.5704 3.89433 12.5424L10.6001 5.83595L14.1633 9.39995L7.45757 16.1057ZM16.7058 6.85745L14.8001 8.7632L11.2368 5.19995L13.1426 3.29345C13.1565 3.2795 13.173 3.26844 13.1913 3.26089C13.2095 3.25334 13.229 3.24945 13.2487 3.24945C13.2684 3.24945 13.2879 3.25334 13.3061 3.26089C13.3244 3.26844 13.3409 3.2795 13.3548 3.29345L16.7058 6.6452C16.7198 6.65913 16.7308 6.67567 16.7384 6.69388C16.7459 6.71209 16.7498 6.73161 16.7498 6.75132C16.7498 6.77103 16.7459 6.79055 16.7384 6.80876C16.7308 6.82697 16.7198 6.84352 16.7058 6.85745Z"
        fill="#8155FF"
      />
    </svg>
  )
}

export const ArrowDawn = ({
  width = 24,
  height = 24,
  className
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
    </svg>
  )
}
