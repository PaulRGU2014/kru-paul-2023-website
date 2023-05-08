import React, {useState, useEffect, useRef} from 'react';
import styles from './Portfolios.module.scss';
import LinkWrapper from '../../util/LinkWrapper/LinkWrapper';
import Slider from "react-slick";
import RichText from '../../util/RichText/RichText';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { getStrapiMedia } from "../../../pages/lib/media";


// Change Image source to '../../util/Img/Img' + imageObject when integrated into backend
import Image from "../../../imageloader";


function Popup ({logo, tabs, link, setSlideIndex, slideIndex, setExpandedIndex}) {

  function onSlideUpdate(_oldIdx, newIdx) {
    setSlideIndex(newIdx);
  }
  const tabRef = useRef()

  const sliderSetting = {
    dots: true,
    dotsClass: styles.dots,
    className: styles.customstlider,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    customPaging: function() { return (
      <div className={styles.dot}></div>
    )},
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
        adaptiveHeight: true
      }
    }]
    };  
    
  return (
    <div className={styles.popup_wrapper}>
      <div className={styles.popup_close} onClick={()=>{setExpandedIndex(), setSlideIndex(0), tabRef?.current?.slickGoTo(0) }}/>
      <div className={styles.popup_inner}>
        {tabs.map((tab, index)=>{
          return(
            <div
              key={(index).toString()}
              className={`${styles.popup_preview} ${slideIndex===index ? styles.show : styles.hide}`} 
            >              
              {!!tab.image.data &&
              <Image
                src={getStrapiMedia(tab.image.data?.attributes?.url)}
                layout="fill"
                objectFit='contain'
                objectPosition="center"
                style={{
                  width: "100%",
                  height: "auto"
                }}          
              />
              }
            </div>           
        )})}                   
        <div className={styles.pagination_mobile}>
          <div 
            className={`${styles.pagination_arrow_mobile} ${slideIndex > 0 ? styles.show : styles.hide}`}
            onClick={()=>tabRef?.current?.slickPrev()}
          >
            <BsChevronLeft/>
          </div>
            { slideIndex + 1} of {tabs.length}
          <div 
            className={`${styles.pagination_arrow_mobile} ${slideIndex >= 0 && slideIndex < tabs.length - 1 ? styles.show : styles.hide}`}
            onClick={()=>tabRef?.current?.slickNext()}
          >
            <BsChevronRight/>
          </div>
        </div>          
        <div className={styles.popup_detail}>
          <div className={styles.popup_logo}>
            {!!logo &&
            <Image 
              src={getStrapiMedia(logo)}
              layout="fill"
              objectFit='contain'
              objectPosition="top left"
              position="relative"
              styles={{
                width: "100%",
                height: "auto"
              }}
            />            
            }            
          </div>
          <div className={styles.popup_logo_mobile}>
            {!!logo &&
            <Image 
              src={getStrapiMedia(logo)}
              layout="fill"
              objectFit='contain'
              objectPosition="top center"
              position="relative"
              styles={{
                width: "100%",
                height: "auto"
              }}
            />                
            }        
          </div>
          <div className={`${styles.popup_tabs}`}>
            <Slider 
              ref={tabRef} 
              beforeChange={onSlideUpdate}
              {...sliderSetting}
            >
              {tabs?.map((tab, index)=>{
                return(
                  <RichText key={(index).toString()} html={tab.description} className={`${styles.richtext}`}/>
              )})}
            </Slider>
          </div>
        </div>
      </div>

      <div className={styles.popup_summary}>
        <div className={styles.popup_link}>
          <LinkWrapper href={link.url} target={link.target}>{link.title}</LinkWrapper>
        </div>
        <div className={styles.pagination}>
          <div 
            className={`${styles.pagination_arrow} ${slideIndex > 0 ? styles.show : styles.hide}`}
            onClick={()=>tabRef?.current?.slickPrev()}
          >
            <BsChevronLeft/>
          </div>
            { slideIndex + 1} of {tabs.length}
          <div 
            className={`${styles.pagination_arrow} ${slideIndex >= 0 && slideIndex < tabs.length - 1 ? styles.show : styles.hide}`}
            onClick={()=>tabRef?.current?.slickNext()}
          >
            <BsChevronRight/>
          </div>
        </div>        
      </div>  
    </div>
  )
}

export default function Portfolios({content}) {
  console.log(content)
  const [expandedIndex, setExpandedIndex] = useState()
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(()=>{
    return(
      setExpandedIndex (),
      setSlideIndex(0)
  )},[])

  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {content.portfolio.data.map((card, index)=>{ 
            const changeOrder = 
            `@media (min-width: 921px) {
              #popupContainer${index} {
                order: ${expandedIndex !== index ? index : Math.floor(index/3)* 3 - 1}
              }
            }
            @media (min-width: 769px) and (max-width: 920px) {
              #popupContainer${index} {
                order: ${expandedIndex !== index ? index : Math.floor(index/2)* 2 - 1}
              }
            }
            @media (max-width: 480px) {
              #popupContainer${index} {
                order: ${index}
              }
            }
            `
            return (
              // <>
              <div 
                className={expandedIndex === index ? styles.card_container_expanded : styles.card_container}
                id={`popupContainer${index}`}
                key={index}
                style={{animationDelay:`${index * 2}00ms`}}
              >           
                <style scoped>
                  {changeOrder}
                </style>                     
                {/* extended */}
                <div 
                  className={`${expandedIndex === index ? styles.popup_show : styles.popup_hide}`}
                  style={{ cursor:"auto"}}
                >
                  {expandedIndex === index &&
                  <Popup logo={card.attributes.portfolioCard.logo.data.attributes.url} link={card.attributes.portfolioCard.link} tabs={card.attributes.portfolioCard.tab} setSlideIndex={setSlideIndex} slideIndex={slideIndex} setExpandedIndex={setExpandedIndex}/>
                  }
                </div>  
        
                {/* shrink */}
                <div 
                  className={`${styles.card_outer} ${expandedIndex === index ? styles.hide : styles.show}`}
                  onClick={() => {setExpandedIndex (index), setSlideIndex (0)}}
                >
                  <div 
                    className={`${styles.card_image}`}
                  >
                    <Image 
                      src={getStrapiMedia(card.attributes?.portfolioCard?.logo?.data?.attributes?.url)}
                      layout="fill"
                      objectFit='contain'
                      styles={{
                        width: "100%",
                        height: "auto"
                      }}
                    />
                  </div>
                  <div 
                    className={`${styles.card_inner}`}
                  >
                    <p>{card.attributes?.portfolioCard?.subtitle}</p>
                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.825 0.126663L13.8548 1.22417L22.3884 8.76758H0V10.2324H22.3884L13.8548 17.7758L14.825 18.8733L25 9.87896V9.12105L14.825 0.126663Z" fill="#F05133"/>
                    </svg>
                  </div>   
                </div>

              </div>
              // </>
          )})}
        </div>
      </div>
      {/* this part is for Google search engine */}
      <div style={{display:"none"}}>
        {content.portfolio.data.map((card, index)=>{
          return(
            <div key={(index).toString()}>
              {card.attributes?.portfolioCard?.tab?.map((tab, index)=>{
                return(
                  <div key={(index).toString()}>
                    {!!tab.image?.data?.attributes?.url &&
                    <img src={getStrapiMedia(tab.image.data.attributes.url)}/>
                    }
                    <div>{tab.description}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}