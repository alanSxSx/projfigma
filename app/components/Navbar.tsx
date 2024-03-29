import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<div className='flex justify-around items-center w-3/6 bg-slate-50 rounded-3xl border border-black shadow-bottom-strong'>
			<Link href='#' className={styles.link}>
				About Us
			</Link>
			<Link href='#' className={styles.link}>
				Projects
			</Link>
			<Link href='#' className={styles.link}>
				Agents
			</Link>
			<Link href='#' className={styles.link}>
				Services
			</Link>
			<Link href='#' className={styles.link}>
				Listings
			</Link>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M22 22L20 20" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>

		</div>
	)
}
