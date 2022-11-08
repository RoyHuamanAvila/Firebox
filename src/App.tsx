import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import NavBar from "./Components/NavBar";
import './scss/custom.css';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Carousel />
      <div className="row my-5">
        <StatItem img="/noimage192.png" text="04 Days" />
        <StatItem img="/noimage192.png" text="15 Speakers" />
        <StatItem img="/noimage192.png" text="07 Workshops" />
        <StatItem img="/noimage192.png" text="16 Presentations" />
      </div>
      <div className="row mb-1 text-center">
        <p>NEW TECHDOCENTS</p>
        <p className="fw-bold fs-2">How it all started</p>
        <p className="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam magni alias doloribus,
          sint amet, veritatis harum quasi aut accusamus dignissimos eligendi aliquid itaque, cumque perspiciatis
          repudiandae nihil iste eum!</p>
        <div className="row my-5">
          <StatItem img="/noimage192.png" text="Jhon Donovan" text2="UI/UX DESIGNER" />
          <StatItem img="/noimage192.png" text="Jean Reese" text2="WEB DESIGNER" />
          <StatItem img="/noimage192.png" text="Gregory Brown" text2="DEVELOPER" />
          <StatItem img="/noimage192.png" text="Patrick Bowen" text2="DEVELOPER" />
          <div className="col-12">
            <button className="btn btn-primary text-white mx-auto rounded-0">READ MORE</button>
          </div>
        </div>
      </div>


      <div className="text-center my-5">
        <p>TESTIMONIALS</p>
        <p className="fw-bold fs-2">People Say</p>
        <p className="mx-auto w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam magni alias doloribus,
          sint amet, veritatis harum quasi aut accusamus dignissimos eligendi aliquid itaque, cumque perspiciatis
          repudiandae nihil iste eum!</p>
        <p className="fs-5 text-primary">Gregory Brown</p>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

interface statProps {
  img: string,
  text: string,
  text2?: string
}

const StatItem = ({ img, text, text2 }: statProps) => {
  return (
    <div className="col">
      <img className="d-block m-auto" src={img} alt="" />
      <p className="text-center fw-bold">{text}</p>
      <p className="fs-6">{text2}</p>
    </div>
  )
}

export default App;
