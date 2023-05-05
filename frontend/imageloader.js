import Image from "next/image";
export default function ImageLoader(props) {
  return <Image  loader={({src}) => src} {...props} unoptimized={true} />
}
