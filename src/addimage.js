import DP from "./sumit.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "dp";
  img.width = 300;
  img.src = DP;
  console.log(document);

  const body = document.querySelector("#body");
  console.log(body);
  body.appendChild(img);
}
export default addImage;
