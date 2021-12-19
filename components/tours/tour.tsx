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
		<div className="main-tour">
			<img src="img/tour.jpg" alt="" className="main-tour__img" />
			<div className="main-tour__text">
				<h3 className="main-tour__text-name">Название</h3>
				<p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
					pretium
					orci at rutrum pellentesque.
				</p>
				<p className="main-tour__text-price">
					От <b>10000</b> руб.
				</p>
				<button className="but-buy">
					<p className="but-buy_text">Купить</p>
				</button>
			</div>
		</div>
	)
}