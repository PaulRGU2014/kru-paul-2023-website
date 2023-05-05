import React from "react";
import Image from "next/image";


export default function Img(props) {
  props = { ...props };

  let imageObject = props.imageObject;
  delete props.imageObject;

  if(imageObject?.mimetype === "image/svg+xml"){
    return <img src={imageObject.url} alt={imageObject.alt} />
  }

  if (Array.isArray(imageObject)) {
    if (imageObject.length > 0) {
      imageObject = imageObject[0];
    } else {
      imageObject = {};
    }
  }

  props.src = props.src || imageObject?.url;
  props.width = props.width || imageObject?.width;
  props.height = props.height || imageObject?.height;
  props.alt = props.alt || imageObject?.alt;

  function loader({ src, width }) {
    let finalSrc = src;
    let size = 'original';
    if (imageObject?.formats) {
      if (width > 750) {
        finalSrc = imageObject.url;
      } else if (width > 500) {
        size='large';
        finalSrc = imageObject.sizes?.large?.url || imageObject.url;
      } else if (width > 245) {
        size='med';
        finalSrc = imageObject.sizes?.medium?.url || imageObject.url;
      } else {
        size='small';
        finalSrc = imageObject.sizes?.small?.url || imageObject.url;
      }
    } 

      if (finalSrc.indexOf("?") > -1) {
        finalSrc += `&w=${size}`;
      } else {
        finalSrc += `?w=${size}`;
      }

    return finalSrc;
  }

  if (typeof props.src !== "string") {
    props.src = "/noimage.jpg";
    props.layout = "fill";
    props.unoptimized = true;
  }

  if(props.layout==="fill"){
    delete props.width;
    delete props.height;
  }
  console.log(props); 
  return <Image {...props} loader={loader} />;
}
