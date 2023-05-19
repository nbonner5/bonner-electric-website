import Navbar from './Navbar';
import HomeFirst from './homepage/HomeFirstSection';
import HomeSecond from './homepage/HomeSecondSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="home-screen">
          <HomeFirst />
          <HomeSecond />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
