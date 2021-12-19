export interface TourBlock {
	class: string,
	title: string,
	description: string,
	price: string
}

export interface TourProps {
	tour: TourBlock
}

export function Tour(porps: TourProps) {
	return (
		<div className={porps.tour.class}>
			<img src="img/tour.jpg" alt="" className="main-tour__img" />
			<div className="main-tour__text">
				<h3 className="main-tour__text-name">{porps.tour.title}</h3>
				<p className="main-tour__text-about">{porps.tour.description}
				</p>
				<p className="main-tour__text-price">
					От <b>{porps.tour.price}</b> руб.
				</p>
				<button className="but-buy">
					<p className="but-buy_text">Купить</p>
				</button>
			</div>
		</div>
	)
}