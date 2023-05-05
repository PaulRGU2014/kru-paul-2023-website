import React from 'react'

export default function MetaTags({drupalRenderArray}){
    let tagArray =[];
    for (let key in drupalRenderArray){
      if(key === 'title'){
        tagArray.push(<title key={key}>{drupalRenderArray[key]['#attributes']['content']}</title>)
      } else {
        let Tag = drupalRenderArray[key]['#tag'];
        tagArray.push(<Tag key={key} {...drupalRenderArray[key]['#attributes']} />)
      }
    }
    return tagArray;
};