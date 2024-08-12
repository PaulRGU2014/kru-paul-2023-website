import styles from './about-me.module.scss';
import ImageLoader from '@/utils/ImageLoader/ImageLoader';
import content from "./content.json";



export default function AboutMe() {
	return (
		<div className={styles.components}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					{content.story.map((item, index) => (
						<ImageLoader key={index} className={styles.image} src={item.image.url} alt={item.image.alt} />
					))}
				</div>
			</div>
		</div>
	);
}