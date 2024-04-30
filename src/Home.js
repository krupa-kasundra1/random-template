import Sidebar from './Sidebar';
import Footer from './Footer';
import Menu from './Menu';

function Home(){
    return(
        <>
        <div id="menu-wrapper">
	<div id="menu">
		<ul>
			<li className="current_page_item"><a href="#">Homepage</a></li>
			
			<li><a href="#">About</a></li>
		
			<li><a href="#">Contact</a></li>
		</ul>
	</div>
	
</div>
<div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">StampALike</a></h1>
			
		</div>
	</div>
</div>
<div id="wrapper"> 

	<div id="page-bgtop"></div>
	<div id="page">
		<div><img src="images/pics01.jpg" width="920" height="300" alt="" /></div>
		<div id="content">
			<div className="post">
				<h2 className="title"><a href="#">Home</a></h2>
			
				<div >&nbsp;</div>
				<div className="entry">
					<p>Hello</p>
					
				</div>
			</div>
			
			<div >&nbsp;</div>
		</div>
		
		<Sidebar />
		
		<div >&nbsp;</div>
	</div>
	<div id="page-bgbtm"></div>
	
</div>
 
    <Footer />
        </>
    )
}

export default Home