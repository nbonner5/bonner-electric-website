import solar from './solar.JPG'
import van from './vanandbuckettruck.jpg'

const Home = () => {
    return (
        <div className="home">
            <div>
                <img src={van} alt="van" />
            </div>
            <div>
                <img src={solar} alt="solar" />
            </div>
        </div>
      );
}
 
export default Home;