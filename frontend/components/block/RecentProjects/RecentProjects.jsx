import React from "react";
import LinkWrapper from "../../util/LinkWrapper/LinkWrapper";
import styles from "./RecentProjects.module.scss";
import RichText from "../../util/RichText/RichText";
import { getStrapiMedia } from "../../../pages/lib/media";


// Change Image source to '../../util/Img/Img' + imageObject when integrated into backend
import Image from "../../../imageloader";
import ScrollAnim from "../../util/ScrollAnim/ScrollAnim";

function ProjectCard({ cardContent, isAlignLeft = true, key }) {
  return (
    <div
      key={key}
      className={
        isAlignLeft === true
          ? styles.card_wrapper_left
          : styles.card_wrapper_right
      }
    >
      <section
        className={
          isAlignLeft === true
            ? styles.card_detail_left
            : styles.card_detail_right
        }
      >
        <div className={styles.card_logo}>
          <Image
            src={getStrapiMedia(cardContent.logo?.data?.attributes?.url)}
            layout="fill"
            objectFit="contain"
            objectPosition="top left"
            position="relative"
            styles={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <RichText html={cardContent.desc} className={`${styles.richtext}`} />
        <LinkWrapper className={styles.card_link} href={cardContent.link?.url} target={cardContent.link?.target}>{cardContent.link?.title}</LinkWrapper>
      </section>
      <section className={styles.card_image}>
        {cardContent.image?.data?.attributes?.url && (
          <Image
            src={getStrapiMedia(cardContent.image?.data?.attributes?.url)}
            layout="fill"
            objectFit="cover"
            objectPosition={`${isAlignLeft === true ? "right" : "left"}`}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </section>
    </div>
  );
}

export default function RecentProjects({ content }) {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <section className={styles.heading}>
          <h3>{content.title}</h3>
          <LinkWrapper href={"/our-works"}>View All Projects</LinkWrapper>
        </section>
        {content.recent_project_sets?.data[0]?.attributes?.card?.map((card, index) => {
          return (
            <ScrollAnim key={index}>
              <ProjectCard cardContent={card} isAlignLeft={card.isLeft} />
            </ScrollAnim>
          );
        })}
      </div>
    </div>
  );
}
