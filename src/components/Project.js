import React from "react";
import notetaker from "./../assets/notetaker.png";
import image from "./../assets/image.png";
import cityBike from "./../assets/City-bikes.png";

export default function Project() {
  const project = [
    {
      id: 1,
      title: "CityBikes",
      image: cityBike,
      description:
        "A search engine the generates local weather as well as available city bikes in a given location",
      link: "http://lemondropping.github.io/city-bike-proj/",
      github: "https://github.com/LemonDropping/city-bike-proj",
    },
    {
      id: 2,
      title: "Employee Tracker",
      image: image,
      description:
        "This application will be developed using a command-line application to manage a company's employee database.",
      github: "https://github.com/Pendarvis5/Employee-Tracker",
    },
    {
      id: 3,
      title: "Express Notes",
      image: notetaker,
      description:
        "This application will be developed using a command-line application to manage a company's employee database.",
      link: "https://express-note-taker-js.herokuapp.com/",
      github: "https://github.com/Pendarvis5/expressjsNotes",
    },
  ];

  return (
    <section className="container">
      <h2 className="mb-5 text-center">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {project.map(({ id, title, image, description, link, github }) => (
          <div className="col" key={id}>
            <div className="card h-100">
              <img src={image} alt={title} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <div className="d-grid gap-2 buttons">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn"
                  >
                    Live Link
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
