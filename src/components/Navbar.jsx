import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className="nav-list">
					<li>
						<Link to={`/`}> Home</Link>
					</li>
					<li>
						<Link to={`/about`}> About</Link>
					</li>
					<li>
						<Link to={`/articleList`}> Articles</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
