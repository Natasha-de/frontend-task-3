import Link from "next/link"
import { Navigation } from "./navigation"

export function Header() {
	return (
		<header className="header" id='header'>
			<div className="container">
				<div className="header__body">
					<Link href="/">
						<a className="header__logo"></a>
					</Link>
					<button className="header__burger" type="button" id='btn-menu'>
						<span></span>
					</button>
					<Navigation />
				</div>
			</div>
		</header>)
}