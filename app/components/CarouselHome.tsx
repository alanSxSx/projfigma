'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import React from 'react'
import CardCarousel from './CardCarousel';

export default function CarouselHome() {


	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div>
			<Carousel responsive={responsive}>
				<CardCarousel rating={4} imageCarousel='/c2.png' titleCarousel='Sobha Hearland II Villas' descriptionCarousel='Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.' />
				<CardCarousel rating={4} imageCarousel='/c1.png' titleCarousel='Sobha Hearland II Villas' descriptionCarousel='Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.' />
				<CardCarousel rating={4} imageCarousel='/c3.png' titleCarousel='Sobha Hearland II Villas' descriptionCarousel='Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.' />
				<CardCarousel rating={4} imageCarousel='/c3.png' titleCarousel='Sobha Hearland II Villas' descriptionCarousel='Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.' />
			</Carousel>
		</div>
	)
}
