import logo from './logo.jpg' //Replace this image before complete

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <div className="links">
                <a className="space"></a>
                <a href="/">Home</a>
                <a className="space"></a>
                <div className="dropdown">
                    <a className="dropbtn">About</a>
                    <div className="dropdown-content">
                        <a href="/about">About Us</a>
                        <a href="/about/completed_projects">Completed Projects</a>
                        <a href="/about/community_support">Community Support</a>
                    </div>
                </div>
                <a className="space"></a>
                <div className="dropdown">
                    <a className="dropbtn">Services</a>
                    <div className="dropdown-content">
                        <a href="/commercial_industrial">Commercial & Industrial Services</a>
                        <a href="/specialty">Specialty & Other Services</a>
                    </div>

                </div>
                <a className="space"></a>
                <a href="/careers">Careers</a>
            </div>
            <div>
                <a id="contact-btn" href="/contact">Contact Us!</a>
            </div>
        </nav>
      );
}
 
export default Navbar;