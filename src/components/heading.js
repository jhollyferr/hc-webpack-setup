import "./heading.css";

class Heading {
  create(text) {
    const heading = document.createElement("h2");

    heading.innerText = text;

    heading.classList.add("main-title")

    document.body.append(heading);
  }
}

export default new Heading();
