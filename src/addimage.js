import DP from "./sumit.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "dp";
  img.width = 300;
  img.src = DP;

  const body = document.querySelector("#body");
  body.appendChild(img);
}
export default addImage;
