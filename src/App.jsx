import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import { features } from "./data";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
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
    </>
  );
}

export default App;
