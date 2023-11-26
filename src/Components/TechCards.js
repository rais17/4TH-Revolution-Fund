import React from "react";
import TechCard from "./TechCard";
import HumanAI from '../Assets/DallHuman_AI.jpg'
import ComingFuture from '../Assets/comingFuture.jpg'
import HistoryImg from "../Assets/History2.jpg";
import RevolutionEra from "../Assets/RevolutionEra.jpg";

const TechCards = () => {
  const techCardsInfo = [
    {
      id: `insight`,
      title: `Pioneering Digital Futures`,
      description: `Join the vanguard of the Fourth Industrial Revolution. Discover how we're harnessing the power of AI and automation to revolutionize education, governance, and healthcare. Be part of an investment fund dedicated to advancing human potential and building a brighter global economy with cutting-edge technologies.`,
      image: HumanAI,
      reverse: false,
    },
    {
      id: `future`,
      title: `Embracing Tomorrow: The Fourth Industrial Revolution`,
      description: `Step into a transformative era with the Fourth Revolution Fund. Witness the dawn of Artificial Intelligence as the new electricity, robotics reshaping industry, biotech innovations like lab-grown food, and genetic engineering redefining life itself. This revolution surpasses all before it, heralding a future where the lines between myth and reality blur. Join us in shaping a future`,
      image: ComingFuture,
      reverse: true,
    },
    {
      id: `history`,
      title: `Journey Through Industrial Milestones: From Steam to AI`,
      description: `Travel back in time with the Fourth Revolution Fund to explore the pivotal industrial revolutions that have shaped our world. From the steam-powered transformation of the 1760s to the electrifying advances of the early 20th century, each era has been a stepping stone to our current digital age.`,
      image: HistoryImg,
      reverse: false,
    },
    {
      id: `revolution`,
      title: `Revolutionizing Reality: The Fourth Industrial Era`,
      description: `Embark on a transformative journey with the Fourth Revolution Fund into the era of the Fourth Industrial Revolution. A time where Artificial Intelligence, robotics, and genetic engineering are not just concepts but realities reshaping our world. Experience the convergence of digital, physical, and biological realms, driving unprecedented changes in how we live, work, and interact.`,
      image: RevolutionEra,
      reverse: true,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center w-full gap-20 py-20 overflow-hidden bg-bgGradient">
      {techCardsInfo.map((item, index) => {
        return <TechCard key={index} {...item} />;
      })}
    </div>
  );
};

export default TechCards;
