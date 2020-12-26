import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SliderContent from "./component/Slideshow/SliderContent";

import ThumbsSlider from "./component/VideoThumbs/ThumbsSlider";

function App() {
  return (
    <Router>
      <Navbar />
      <SliderContent />
      <ThumbsSlider />
      <ThumbsSlider />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
