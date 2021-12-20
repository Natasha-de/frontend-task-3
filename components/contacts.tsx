export function Contacts() {
	return (
		<section className="section-contacts" id="section-contacts">
			<div className="container">
				<h2 className="main-title">Контакты</h2>
				<div className="block-contacts">
					<div className="block-contacts__text">
						<div className="box-contact">
							<div className="box-contact__img">
								<img src="img/vectormap.png" alt="" />
							</div>
							<span className="box-contact__text">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</span>
						</div>
						<div className="box-contact">
							<div className="box-contact__img">
								<img src="img/vectorphone.png" alt="" />
							</div>
							<span className="box-contact__text">8 (3902) 22-53-35 </span>
							<br />
							<span className="box-contact__text">8 (3902) 24-30-71</span>

						</div>
						<div className="box-contact">
							<div className="box-contact__img">
								<img src="img/vectormail.png" alt="" />
							</div>
							<span className="box-contact__text">kancler@vskhakasia.ru</span>
						</div>
					</div>
					<div className="map-desktop">
						<div className="map-block__map">
							<script type="text/javascript" async
								src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A74ef7033502c6da5c07e9c9a62bb1ab5b4b96aac41cd93d97906f2020bd639bd&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
						</div>
					</div>
				</div>
			</div>
			<div className="map-block">
				<div className="map-block__map">
					<script type="text/javascript" async
						src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A74ef7033502c6da5c07e9c9a62bb1ab5b4b96aac41cd93d97906f2020bd639bd&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
				</div>
			</div>
		</section>
	)
}