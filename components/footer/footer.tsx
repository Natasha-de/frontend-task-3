import { FooterNavigation } from "./footer-navidation";

export function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="block-footer">
					<div className="block-footer__menu">
						<p className="block-footer__title">Меню</p>
						<FooterNavigation />
					</div>
					<div className="block-footer__contact">
						<p className="block-footer__title">Контакты</p>
						<div className="block-footer__text">
							655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67<br />Справочная служба: 8 (3902) 22-53-35,
							факс: 8
							(3902) 24-30-71<br />Электронная почта: kancler@vskhakasia.ru
						</div>
					</div>
					<div className="block-footer__text">
						Официальный сайт Агенства Туризма Республики Хакасия © 2021
					</div>
				</div>
			</div>
		</footer>
	)
}