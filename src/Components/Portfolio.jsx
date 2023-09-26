/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "KrishiSewa : One Stop Solution for Farmers",
    description:
      "An Ecommerce and ML prediction website to assist farmers with a conversational chatbot and voice call assistant.",
    url: "https://github.com/srishtiwadhwa/KrishiSewa",
  },
  {
    title: "BuzzWomen Chatbot",
    description:
      "An AI enabled conversational chatbot, with voice assistance and speech recognition for counseling local women entrepreneurs in over 100 languages and multiple platforms.",
    url: "https://github.com/jasleen1602/Chatbot-Code-To-Give",
  },
  {
    title: "Learning Disorder Prediction",
    description:
      "A website that Integrates Machine learning to predict whether a child has dyslexia or dyscalculia based upon a survey and quiz.",
    url: "https://github.com/jasleen1602/Dyslexia_Prediction",
  },
  {
    title: "Decoding Mysteries",
    description:
      "A hidden items game with quiz for ML enthusiasts.",
    url: "https://pratyaksha-047.github.io/Decode_Mysteries/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
