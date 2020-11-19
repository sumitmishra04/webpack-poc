import "./heading.css";

class Heading {
  render() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Webpack is awesome";
    h1.classList.add("h1");
    const body = document.querySelector("body");
    body.appendChild(h1);
  }
}

export default Heading;
