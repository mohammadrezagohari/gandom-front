import React, { FC } from "react";

interface Fill {
  fill?: "#F1CC94",
  width?: string,
  height?: string
}
const InstagramGold: FC<Fill> = ({ fill, width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width && "24"} height={height && "24"} viewBox="0 0 24 24">
      <path id="instagram-logo-fill-svgrepo-com" d="M43.84,40A3.84,3.84,0,1,1,40,36.16,3.84,3.84,0,0,1,43.84,40ZM52,34.72V45.28A6.728,6.728,0,0,1,45.28,52H34.72A6.728,6.728,0,0,1,28,45.28V34.72A6.728,6.728,0,0,1,34.72,28H45.28A6.728,6.728,0,0,1,52,34.72ZM45.76,40A5.76,5.76,0,1,0,40,45.76,5.76,5.76,0,0,0,45.76,40Zm1.92-6.24a1.44,1.44,0,1,0-1.44,1.44A1.44,1.44,0,0,0,47.68,33.76Z" transform="translate(-28 -28)" fill={"#F1CC94"} />
    </svg>
  )
}
export default InstagramGold

