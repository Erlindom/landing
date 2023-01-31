import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <div className="testimonial-section">
        <Testimonial avatar="avatar-anisha" avatarName="Anisha Li">
          The charge has supercharged our team's workflow. The <br /> naintain
          visibility on larger milestones at all times <br /> keeps everyone
          motivated.
        </Testimonial>
        <Testimonial avatar="avatar-ali" avatarName="Ali Bravo">
          "We have been able to cancel so many other subscriptions <br /> since
          using Manage. There is no more cross-channel <br /> confusion and
          ervyone is much more focused."
        </Testimonial>
        <Testimonial avatar="avatar-richard" avatarName="Richard Watts">
          "Manage allows us to provide structure and productive <br /> keeps us
          organized and focused. i can't stop record <br /> them to everyone i
          talk to!"
        </Testimonial>
        <Testimonial avatar="avatar-richard" avatarName="Richard Watts">
          "Manage allows us to provide structure and productive <br /> keeps us
          organized and focused. i can't stop record <br /> them to everyone i
          talk to!"
        </Testimonial>
      </div>
    </div>
  );
}

export default App;
