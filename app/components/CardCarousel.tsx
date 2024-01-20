'use client'
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

interface CarouselHomeProps {
  readonly rating: number;
  readonly imageCarousel: string;
	readonly titleCarousel: string;
	readonly descriptionCarousel: string;
}

export default function CardCarousel({ rating, imageCarousel,titleCarousel,descriptionCarousel }: CarouselHomeProps) {

	const ratingValue: number = rating;

	return (
				<div className='flex flex-col items-center justify-center rounded-2xl border border-gray-300 m-8'>
					<div className='relative w-full h-96 bg-cover bg-center flex items-center justify-center'>
						<Image src={imageCarousel} width={600} height={500} alt='Casa' className='rounded-2xl' />
						<div className='absolute inset-0 rounded-xl' style={{
							background: 'linear-gradient(116deg, rgba(193, 222, 232, 0.70) 9.86%, rgba(255, 255, 255, 0.00) 52.13%, rgba(251, 217, 185, 0.70) 97.99%)',
						}}>
						</div>
					</div>

					<div className='p-6'>
						<div className='text-2xl pb-4 font-bold'>{titleCarousel}</div>
						<div className='text-base pb-4 font-bold'>{descriptionCarousel}</div>
						<div className='flex'>
							{[0, 1, 2, 3, 4].map((rating) => (
								<StarIcon
									key={rating}
									className={classNames(
										ratingValue > rating ? 'text-yellow-500 mr-2' : 'text-gray-200 mr-2 ',
										'h-4 w-4 flex-shrink-0'
									)}
									aria-hidden="true"
								/>
							))}
						</div>
					</div>
				</div>

	)
}
