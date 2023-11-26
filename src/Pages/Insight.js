import React from 'react'
import HeroTemplate from '../Components/HeroTemplate'
import InsightVideo from "../Assets/InsightVideo.mp4";
import Imgage1 from "../Assets/InsightImg1.jpg";
import Image2 from "../Assets/InsightImg2.jpg";
import Image3 from "../Assets/InsightImg3.jpg";
import Image4 from "../Assets/InsightImg4.jpg";
import ArticlesTemplate from '../Components/ArticlesTemplate';

const Insight = () => {

  const articles = [
    {
      image: Imgage1,
      article: `When the world went online major breakthroughs created vast new industries. Software ate the world, and from that our entire human race’s collective consciousness, is shifting in ever increasing rates via the internet. This interconnected web sometimes referred to as the human colossus is still in its teenage years, and will continue to “wake up” at an ever increasing rate`,
      isReverse: false,
    },
    {
      image: Image2,
      article: `We are at a time when oppurtunity has never been more prevalent, and we are just beginning to see systems capable of disrupting education, government, healthcare and more vital systems that empower the entire world towards a brighter future.`,
      isReverse: true,
    },
    {
      image: Image3,
      article: `The rise of more and more automated armies of robots, replicating the profitable actions of humans on the internet acting as tools for our future. Large language models will act as the calculator extension of language itself disrupting the entire coding and information sharing industries`,
      isReverse: false,
    },
    {
      image: Image4,
      article: `The power of staying agile, and focusing on learning these new skills will give massive opportunity to the new age of people choosing a career path, and it is from there that Fourth Revolution Fund will make its mark as the best investment vehicle from capital to innovation of the 21st century. This will be accomplished by partnering with schools, constantly upgrading their curriculums to the frontier Ai tools, and sourcing top talent and deal flow from the earliest stage to empower others to use these new tools to better the world, and it’s economy.`,
      isReverse: true,
    },
  ];
  
  return (
    <div className='w-full'>
      <HeroTemplate
        video={InsightVideo}
        text="Shaping Tomorrow ! Harnessing the Power of Digital Transformation and AI Innovation"
      />

      <ArticlesTemplate articles={articles} />
    </div>
  );
}

export default Insight