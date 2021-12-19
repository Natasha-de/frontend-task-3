export function FooterNavigation() {
	return (
		<nav className="footer__menu">
			<ul className="footer__list">
				<li className="footer__list-element">
					<a href="#section-welcome" className="footer__link">Главная</a>
				</li>
				<li className="footer__list-element">
					<a href="#section-sightseens" className="footer__link">Достопремечательности</a>
				</li>
				<li className="footer__list-element">
					<a href="#section-tour" className="footer__link">Туры</a>
				</li>
				<li className="footer__list-element">
					<a href="#section-contacts" className="footer__link">Контакты</a>
				</li>
			</ul>
		</nav>
	)
}