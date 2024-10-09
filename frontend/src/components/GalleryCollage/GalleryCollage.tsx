"use client"

import CollageDefault from "./CollageDefault/CollageDefault"
import SquareLogos from "./SquareLogos/SquareLogos"

export default function GalleryCollage (content: any) {
	console.log('gallery collage', content);
	switch (content.for_component) {
		case 'galleryCollage':
			return <CollageDefault content={content} />
		case 'squareLogos':
			return <SquareLogos content={content} />
		default:
			return <div>Gallery Collage component not found</div>
	}
}