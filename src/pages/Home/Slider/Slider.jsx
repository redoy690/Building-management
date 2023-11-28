
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className="text-center">
            <Carousel autoPlay infiniteLoop className="p-0">
                <div>
                    <img className="" src="https://i.ibb.co/5Ms2sg2/4.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/Gd9Wfdt/6.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/bJQfGNZ/3.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/HrhtQBM/5.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/Tb1tL2R/7.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/SfJmtdQ/8.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/pbRk7G9/9.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/87vg2Hg/10.jpg" />

                </div>
            </Carousel>
        </div>
    );
};

export default Slider;