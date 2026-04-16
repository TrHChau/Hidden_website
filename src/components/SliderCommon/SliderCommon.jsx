import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import SliderLib from "react-slick";
import './styles.css'

function SliderCommon({ data }) {
  const Slider = SliderLib.default;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdOutlineArrowBackIosNew />
  };
  console.log(data)
  return (
    <Slider {...settings}>
      {data.map((src, index) => {
        return <img src={src} key={index} alt="test" />
      })}
    </Slider>
  );
}

export default SliderCommon;