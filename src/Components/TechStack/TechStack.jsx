import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";
import img7 from "../../assets/img7.svg";
import img8 from "../../assets/img8.svg";
import img9 from "../../assets/img11.png";
import img10 from "../../assets/img10.svg";
import img11 from "../../assets/img11.svg";
import img12 from "../../assets/img8.png";
import img13 from "../../assets/img9.png";
import img14 from "../../assets/img15.svg";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";

const TechStack = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  return (
    <div className=" bg-dark pb-10">
      <div className="Slider ">
        <div className="Slide-track">
          {images?.map((item, index) => {
            return (
              <div key={index} className="Slide">
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
