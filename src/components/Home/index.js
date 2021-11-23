import img from "./verified.png";
import imge from "./online.png";
import imag from "./syringe.jpg";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div class="home__bg-img">
        <div class="home__bg-img__container">
          <div class="home__bg-img__topnav">
            <div class="home__bg-img__card">
              <img src={img} alt="logo" />
              <h1>Vaccine Registration</h1>
              <p class="home__bg-img____desc">Vaccine For Covid-Free Life!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__middle">
        <h2>The process of receiving the Covid-19 corona vaccine!</h2>

        <div class="home__middle__row">
          <div class="home__middle__column">
            <div class="home__middle__card">
              <img class="online" src={imge} alt="online" />
              <div class="home__middle__container">
                <p>
                  First, you have to complete the online registration by
                  providing necessary information.
                </p>
              </div>
            </div>
          </div>

          <div class="home__middle__column">
            <div class="home__middle__card">
              <img class="online" src={imag} alt="online" />
              <div class="home__middle__container">
                <p>
                  {" "}
                  You have to appear in person at the vaccination center on the
                  specified date with the vaccine card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
