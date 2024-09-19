import React from "react";
import  BlogsComp from "../components/Blogs/BlogsComp";
const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Tridar Tourism, Your Gateway to Global Adventures
            Tridar Tourism is a leading travel company dedicated to crafting unforgettable experiences around the world.
            With a passion for exploration and a commitment to excellence,
            we offer a diverse range of travel packages tailored to suit every traveler's preferences. 
            From thrilling adventures in exotic destinations to relaxing getaways on serene beaches, 
            our expert team curates itineraries that exceed your expectations. 
            Whether you're seeking cultural immersion, outdoor activities, or simply a well-deserved vacation, 
            Tridar Tourism has the perfect journey for you. Experience the world with us and create memories that will last a lifetime.
          </p>
          <br />
          <p>
             Discover hidden gems and off-the-beaten-path adventures with our knowledgeable guides.
             Enjoy personalized service and attention to detail from our dedicated travel experts.
             Benefit from our competitive pricing and flexible booking options.
             Join our community of satisfied travelers and share your experiences with us.

          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
