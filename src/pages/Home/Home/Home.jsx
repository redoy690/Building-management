
import Aboutus from '../Aboutus/Aboutus';
import Contact from '../Contact/Contact';
import Coupon from '../Coupon/Coupon';
import Feature from '../Feature/Feature';

import Messageus from '../Messageus/Messageus';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <Aboutus></Aboutus>
            <Coupon></Coupon>
            <Messageus></Messageus>
            <Feature></Feature>
            <Contact></Contact>
        </div>
    );
};

export default Home;