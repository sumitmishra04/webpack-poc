import "./helloworld.scss";

class Helloworld {
  btnCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Helloworld";
    button.classList.add(this.btnCssClass);
    button.onclick = function () {
      const p = document.createElement("p");
      p.classList.add("hello-world-text");
      p.innerHTML = "Hello World";
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default Helloworld;
