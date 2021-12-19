export interface SightseenBlock {
	title: string
	image: string
	description: string
	moreDescriotion: string
}

export interface SightseenProps {
	sightseen: SightseenBlock
}

export function Sightseen(props: SightseenProps) {
	return (
		<div className="sightseens">
			<img src={props.sightseen.image} alt="" className="sightseens__img" />
			<div className="sightseens__text">
				<h3 className="sightseens__name">{props.sightseen.title}</h3>
				<p className="sightseens__about">{props.sightseen.description}
					<br />
					<br />
					<span className="more-text"> {props.sightseen.moreDescriotion}
					</span>
				</p>
			</div>
		</div>
	)
}