import React from 'react';
import axios from 'axios';
import { getStrapiMedia } from "../../lib/media";
import { ArrayBindingElement } from 'typescript';
import MediaCard from '../components/MediaCard/MediaCard'
import IntroText from '@/components/IntroText/IntroText';

type Props = {
  content: any;
  ctx: object;
  subMediaCard: ArrayBindingElement;
}

export default function About ({content} : Props) {
  console.log(content)

  return (
    <div className='aboutPage'>
      <IntroText content={content.About.Title} />
      {content.About.subMediaCard.map((card:any) => {
        return(
        <>
          <MediaCard key={card.id} content={card} />
        </>

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
