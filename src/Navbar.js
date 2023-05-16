import logo from './logo.jpg' //Replace this image before complete

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <div className="links">
                <div className="space"></div>
                <a href="/">Home</a>
                <div className="space"></div>
                <div className="dropdown">
                    <a href="/about" className="dropbtn">About</a>
                    <div className="dropdown-content">
                        <a href="/about">About Us</a>
                        <a href="/about/completed_projects">Completed Projects</a>
                        <a href="/about/community_support">Community Support</a>
                    </div>
                </div>
                <div className="space"></div>
                <div className="dropdown">
                    <a href="/services" className="dropbtn">Services</a>
                    <div className="dropdown-content">
                        <a href="/services/commercial_industrial">Commercial & Industrial Services</a>
                        <a href="/services/specialty">Specialty & Other Services</a>
                    </div>

                </div>
                <div className="space"></div>
                <a href="/careers">Careers</a>
            </div>
            <div>
                <a id="contact-btn" href="/contact">Contact Us!</a>
            </div>
        </nav>
    );
}
 
export default Navbar;