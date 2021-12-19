import { Tour, TourBlock } from "./tour"

const ourTours: TourBlock[] = [
	{
		class: "main-tour",
		title: "Название",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
		price: "10000",
	},
	{
		class: "main-tour",
		title: "Название",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
		price: "10000",
	},
	{
		class: "main-tour   main-tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
		price: "10000",
	},
	{
		class: "main-tour   main-tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
		price: "10000",
	},
	{
		class: "main-tour   main-tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
		price: "10000",
	},
	{
		class: "main-tour   main-tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
		price: "10000",
	}
]

export function Tours() {
	return (
		<section className="section-tour" id="section-tour">
			<div className="container">
				<h2 className="main-title">Туры</h2>
				<div className="main">
					{
						ourTours.map((item: TourBlock, index: number) =>
							<Tour tour={item} key={`tours_${index}`} />
						)
					}
					<div className="more">
						<button type="button" className="more__btn">Больше туров</button>
					</div>
				</div>
			</div>
		</section>

	)
}