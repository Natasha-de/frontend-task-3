import Link from "next/link"

export interface MenuVisible { isMenuVisible: boolean }

export function Navigation(props: MenuVisible) {
	return (
		<nav className={`header__menu${props.isMenuVisible ? ' active' : ''}`} id='head-menu'>
			<ul className="header__list">
				<li className="header__list-element">
					<Link href="#section-welcome" >
						<a className="header__link">Главная</a>
					</Link>
				</li>
				<li className="header__list-element">
					<Link href="#section-sightseens" >
						<a className="header__link">Достопремечательности</a>
					</Link>
				</li>
				<li className="header__list-element">
					<Link href="#section-tour"  >
						<a className="header__link">Туры</a>
					</Link>
				</li>
				<li className="header__list-element">
					<Link href="#section-contacts" >
						<a className="header__link">Контакты</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}