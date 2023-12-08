import React from "react";
import logo from "../AppBar.logo.svg";

const Header = () => (
	<header>
        <nav className="AppBar">
			<img
				className="AppBar-logo"
				src={logo}
				aria-label="people"
				alt="People"
			/>
		</nav>
	</header>
);

export default Header;