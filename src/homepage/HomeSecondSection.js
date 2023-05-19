import helmet from './photos/helmet.png'

const HomeSecond = () => {
    return (
        <div className="second-content-section">
            <div className="overlay-content-home-second">
                <img src={helmet} alt="helmet" />
                <h2>Thank you for your interest in Bonner Electric!</h2>
                <hr />
                <p>Established in 1976, Bonner Electric, Inc.
                    is one of the oldest and most reliable industrial/commercial
                    electrical contractors in southeastern Connecticut.
                    Our time-honored traditions of service, reliability and
                    value have contributed to our continuous growth for more than
                    three decades. But don't think our traditional values have
                    kept us beholden to the past. We are one of the most advanced
                    contractors in our tri-state region, offering renewable energy
                    services and other technologies that conserve resources and save
                    our customers money.</p>
            </div>
        </div>
    );
}
 
export default HomeSecond;