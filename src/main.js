import p5 from "p5";
import "./style.css";

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);
    p.textAlign(p.CENTER);
    p.textSize(50);
    p.fill(0, 255, 0);
    p.text("Jiwon Park", p.mouseX, p.mouseY);
  };
};

new p5(sketch, document.getElementById("app"));
