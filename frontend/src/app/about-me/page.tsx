import styles from './about-me.module.scss';
import ImageLoader from '@/utils/ImageLoader/ImageLoader';
import content from "./content.json";



export default function AboutMe() {
	return (
		<div className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					{content.story.map((item, index) => (
						<ImageLoader className={styles.image} 
							key={index} 	
							style={{
								// if isPortrait is true, then the height will be 2fr, else 1fr
								gridRow: item.isPortrait ? 'span 2' : 'span 1',
							}}
							src={item.image.url} 
							alt={item.image.alt} 
						/>
					))}
				</div>
			</div>
		</div>
	);
}