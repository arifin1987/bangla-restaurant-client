import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '/img/img1.avif'
import img2 from '/img/img2.avif'
import img3 from '/img/img3.avif'


const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img className="max-h-96" src={img1} />
                    
                </div>
                <div>
                    <img className="max-h-96" src={img2} />
                    
                </div>
                <div>
                    <img className="max-h-96" src={img3} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;