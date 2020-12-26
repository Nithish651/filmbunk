import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function SliderContent() {
  const slides = [
    "images/slide_1.jpg",
    "images/slide_2.jpg",
    "images/slide_3.jpg",
  ];

  console.log(slides);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
    >
      <div data-src="images/slide_1.jpg" />
      <div data-src="images/slide_2.jpg" />
      <div data-src="images/slide_3.jpg" />
    </AutoplaySlider>
  );
}

export default SliderContent;
