import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import { features, showcaseData, testimonialData } from "./data";
import Features from "./components/Features/Features";
import Showcase from "./components/showcase/Showcase";
import Testimony from "./components/Testimonials/Testimonial";
import CallToAction from "./components/calltoaction/CTA";
import Footer from "./components/Footer/Footer";

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
      {/* Testimonials */}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {testimonialData.map((testimony) => (
              <Testimony
                key={testimony.id}
                img={testimony.img}
                name={testimony.name}
                testimony={testimony.testimony}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <CallToAction />
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
