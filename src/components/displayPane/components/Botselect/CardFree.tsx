import { useState, useRef, MouseEvent } from "react";
import "./Card.css";
import { DollarTwoTone } from "@ant-design/icons";
import Lottie from "react-lottie";
import freeCard from './free.json';

const free = {
  loop: true,
  autoplay: true,
  animationData: freeCard,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
export default function CardFree() {
  const [xRotation, setXRotation] = useState<number>(0);
  const [yRotation, setYRotation] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const sizesboxRef = useRef<HTMLUListElement>(null);
  const purchaseRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (card) {
      const { offsetWidth: width, offsetHeight: height } = card;
      const { clientX, clientY } = event;
      const x = clientX - card.offsetLeft - width / 2;
      const y = clientY - card.offsetTop - height / 2;
      const mult = 10;
      setXRotation((y / height) * mult);
      setYRotation((x / width) * mult);
    }
  }

  function handleMouseEnter() {
    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current;

    if (img && title && sizesBox && purchase && desc) {
      title.style.transform = "translateZ(150px)";
      img.style.transform = "translateZ(30px)";
      sizesBox.style.transform = "translateZ(100px)";
      purchase.style.transform = "translateZ(75px)";
      desc.style.transform = "translateZ(75px)";
    }
  }

  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;

    if (img && title && sizesBox && purchase) {
      title.style.transform = "translateZ(0px)";
      img.style.transform = "translateZ(0px) rotateZ(0deg)";
      sizesBox.style.transform = "translateZ(0px)";
      purchase.style.transform = "translateZ(0px)";
    }
  }

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        options={free}
        width={200}
      />
      <h1 className="title" ref={titleRef}>
        Free trading Bot
      </h1>
      <p ref={descRef}>
        Experience the performance of trading bots
        <br />
        for free
      </p>
      <div className="button-box" ref={purchaseRef}>
        <button className="purchase"><DollarTwoTone size={30} /> Purchase</button>
      </div>
    </div>
  );
}