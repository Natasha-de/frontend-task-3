export interface TourBlock {
	class: string,
	title: string,
	description: string,
	price: string
}

export interface TourProps {
	tour: TourBlock
}

export function Tour(props: TourProps) {
	return (
		<div className={props.tour.class}>
			<img src="img/tour.jpg" alt="" className="main-tour__img" />
			<div className="main-tour__text">
				<h3 className="main-tour__text-name">{props.tour.title}</h3>
				<p className="main-tour__text-about">{props.tour.description}
				</p>
				<p className="main-tour__text-price">
					От <b>{props.tour.price}</b> руб.
				</p>
				<button className="but-buy">
					<p className="but-buy_text">Купить</p>
				</button>
			</div>
		</div>
	)
}