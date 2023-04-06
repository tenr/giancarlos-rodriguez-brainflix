import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import "./App.scss";
import views from "./assets/icons/views.svg";
import likes from "./assets/icons/likes.svg";
import mohan from "./assets/images/Mohan-muruge.jpg";

function App() {
  return (
    <>
      <Header />
      <Video />

      {/* <video></video>

        <main>
          <h1>BMX Rampage: 2021 Highlights</h1>
          <div>
            <h3>Red Crow</h3>
            <p>07/11/2021</p>
          </div>
          <div>
            <img src={views} alt="BrainFlix logo" />
            <span>1,001,023</span>
            <img src={likes} alt="BrainFlix logo" />
            <span>110,985</span>
          </div>
          <p>
            On a gusty day in South Utah, a group of 25 daring mountin bikes
            blew the doors off what is possible on two wheels, unleashing some
            of the biggest moments the sport has ever seen. While mother nature
            only allowed for one full run before the conditions made is
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </main>
        <section> */}
    </>
  );
}

export default App;
