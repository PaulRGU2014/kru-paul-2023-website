import axios from 'axios';
import { ArrayBindingElement } from 'typescript';


type Props = {
  content: any;
  subMediaCard: ArrayBindingElement
}


export default function Template ({content} : Props) {
  console.log(content)

  return (
    <div>
      Adding Content Here
    </div>
  )
}


Template.getInitialProps = async () => {
  try {
    // change url to that component's api
    const res = await axios.get('http://localhost:1337/api/kru-paul-website?populate=deep');
    const content = res.data.data?.attributes;
    return {content}
  } catch (error) {
    return {error}
  }
}
