import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import { features, showcaseData } from "./data";
import Features from "./components/Features/Features";
import Showcase from "./components/showcase/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Features  */}
      <section className="features-icons bg-light text-center">
        <section className="container">
          <div className="row">
            {features.map((feature) => (
              <Features
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </section>
      </section>
      {/* Show Case*/}
      <section className="showcase">
        <div className="container-fluid p-0">
          {showcaseData.map((data) => (
            <Showcase
              key={data.id}
              img={data.img}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
