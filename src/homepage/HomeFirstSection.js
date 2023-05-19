import solar from './photos/solar.JPG' //add multiple photos eventually
import van from './photos/van.jpg'

const HomeFirst = () => {
    return (
        <div className="first-content-section">
            <img src={solar} alt="solar" className="firstimg" id="firstimg" />
            <div className="overlay-content-home-first">
                <h1>Bonner Electric, Inc.</h1>
                <hr />
                <h2>"Family Owned & Operated Since 1976"</h2>
            </div>
        </div>
    );
}

export default HomeFirst;