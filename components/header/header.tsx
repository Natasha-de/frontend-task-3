import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "./navigation"

export function Header() {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
	const [isPageScrolled, setPageScrolled] = useState<boolean>(false)

	function onMenuClick() {
		setMenuVisible(!isMenuVisible);
	}

	const handlePageScroll = () => {
		if (window.scrollY > 100) {
			setPageScrolled(true)
		} else {
			setPageScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll)

		return () => window.removeEventListener('scroll', handlePageScroll)
	})

	return (
		<header className={`header${isPageScrolled ? ' scroll' : ''}`} id='header'>
			<div className="container">
				<div className="header__body">
					<Link href="/">
						<a className="header__logo"></a>
					</Link>
					<button className={`header__burger${isMenuVisible ? ' active' : ''}`} type="button" id='btn-menu' onClick={onMenuClick}>
						<span></span>
					</button>
					<Navigation isMenuVisible={isMenuVisible} />
				</div>
			</div>
		</header>)
}