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
