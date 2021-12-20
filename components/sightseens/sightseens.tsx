import { Sightseen, SightseenBlock } from "./sightseen"

const ourSightseens: SightseenBlock[] = [
	{
		title: "Тропа предков",
		image: "img/sightseens.png",
		description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
		moreDescriotion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velitodit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquamdeserunt quam quod deleniti molestias earum perspiciatis?Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas delenitiminus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officiadeserunt amet.Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias istedoloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,tempore molestias blanditiis expedita mollitia?Quidem nemo ullam dicta dolor voluptas?"
	},
	{
		title: "Озеро Беле",
		image: "img/sightseens.png",
		description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
		moreDescriotion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velitodit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquamdeserunt quam quod deleniti molestias earum perspiciatis?Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas delenitiminus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officiadeserunt amet.Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias istedoloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,tempore molestias blanditiis expedita mollitia?Quidem nemo ullam dicta dolor voluptas?"
	},
	{
		title: "Сундуки",
		image: "img/sightseens.png",
		description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
		moreDescriotion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velitodit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquamdeserunt quam quod deleniti molestias earum perspiciatis?Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas delenitiminus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officiadeserunt amet.Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias istedoloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,tempore molestias blanditiis expedita mollitia?Quidem nemo ullam dicta dolor voluptas?"
	},

]

export function Sightseens() {
	return (
		<section className="section-sightseens" id="section-sightseens">
			<div className="container">
				<h2 className="main-title">Достопремечательности</h2>
				<div className="main-sightseens">
					{
						ourSightseens.map((item: SightseenBlock, index: number) =>
							<Sightseen sightseen={item} key={`sightseens_${index}`} />
						)
					}
				</div>
			</div>
		</section>
	)
}