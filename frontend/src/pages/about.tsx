import React from 'react';
import axios from 'axios';
import { ArrayBindingElement } from 'typescript';
import MediaCard from '../components/MediaCard/MediaCard'

// axios.get('http://localhost:1337/api/kru-paul-website?populate=deep').then(response => {
//   console.log(response.data);
// });

type Props = {
  content: any;
  ctx: object;
  subMediaCard: ArrayBindingElement;
}

export default function About ({content} : Props) {
  console.log(content)

  return (
    <div>
      <h1>{content.About.Title}</h1>
      {content.About.subMediaCard.map((card:any) => {
        return(
          <MediaCard content={card} />
        )
      })}
    </div>
  )
}


About.getInitialProps = async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/kru-paul-website?populate=deep');
    const content = res.data.data?.attributes;
    return {content}
  } catch (error) {
    return {error}
  }
}
