import React from "react";

type Props = {
  content : any
}


export default function MediaCard ({content} : Props) {
  return (
    <div>
      <div>Image Area</div>
      <div>{content.Description}</div>
    </div>
  )
}
