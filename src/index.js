import Helloworldbutton from "./component/helloworldbutton/helloworldbutton";
// import addImage from "./addimage";
import Heading from "./component/heading/heading";

const helloworldbutton = new Helloworldbutton();
const heading = new Heading();
helloworldbutton.render();

heading.render();
// addImage();

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode on");
}
