import { Link } from "react-router-dom";
function Menu(){
    return(
        <>
            <div id="menu-wrapper">
	<div id="menu">
		<ul>
			<li className="current_page_item">
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/About'>About</Link>
			</li>
			<li>
				<Link to='/Contact'>Contact</Link>
			</li>
		</ul>
	</div>
	
</div>	
<div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">Krupa</a></h1>
		
		</div>
	</div>
</div>
        </>
    )
}
export default Menu;