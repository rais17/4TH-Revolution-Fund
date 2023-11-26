import React from 'react'
import HistoryVideo from "../Assets/WorldBuildingVeedTrim.mp4";
import HeroTemplate from '../Components/HeroTemplate';
import ArticlesTemplate from '../Components/ArticlesTemplate';
import HistoryImg1 from "../Assets/HistoryImg1.jpg";
import HistoryImg2 from "../Assets/HistoryImg2.jpg";
import HistoryImg3 from "../Assets/HistoryImg3.jpg";
import HistoryImg4 from "../Assets/HistoryImg4.jpg";
import HistoryImg5 from "../Assets/HistoryImg5.jpg";
import HistoryImg6 from "../Assets/HistoryImg6.jpg";
import HistoryImg7 from "../Assets/HistoryImg7.jpg";
import HistoryImg8 from "../Assets/HistoryImg08.jpg";
import HistoryImg9 from "../Assets/HistoryImg9.jpg";
import HistoryImg10 from "../Assets/HistoryImg10.jpg";
import HistoryImg11 from "../Assets/HistoryImg11.jpg";

const History = () => {

  const articles = [
    {
      image: HistoryImg1,
      article: `The first Industrial Revolution went from 1760–1840, and was defined by steam power and textile industry. `,
      isReverse: false,
    },
    {
      image: HistoryImg2,
      article: `Life in 1840 was not much different from life in 1760. Outside the general background technological progress being known, your daily life and the general human condition had not meaningfully changed since the days of Ancient Greece other than the increased number of machines and better nutrition. This industrial revolution largely benefited only the capitalist owners, undermining the aristocracy and causing a drop off in the quality of life for the working class. The Napoleonic Wars had a big effect in causing the revolution to continue past the point it would have otherwise ended by delaying the industrialization of Europe until it all started happening at once.`,
      isReverse: true,
    },
    {
      image: HistoryImg3,
      article: `First Foundation Setting Period went from 1840-1870 and technology got about as good as it possibly could at the time. This was the era of an economic recession as a result of the end of the industrial revolution, of technological refinements to what came before, the maturation of the telegraph, and the birth of the technologies that would later define the Second Industrial Revolution, such as the telephone, recorded sound, automobiles, atomic physics, modern medicine and germ theory, and more. Otherwise, little changed in the daily life of the average person.`,
      isReverse: false,
    },
    {
      image: HistoryImg4,
      article: `The second Industrial Revolution went from 1870-1914 and is defined by the maturation of electricity, electric light, advanced steam power, nuclear physics, early quantum physics, the telephone, automobiles, the birth of modern medicine, modern agriculture, advanced mechanics, radio, and so much more that it boggles the mind. For the first time, technological change had a direct effect on the human condition, changing the quality of life for even the poor. The Industrialization of life itself wrought great optimism, but it also directly led to the bloodshed of the first World War.`,
      isReverse: true,
    },
    {
      image: HistoryImg5,
      article: `Second Foundation Period: 1915-1945. Capped by the First and Second World Wars, this was an era where the fruits of the Second Industrial Revolution really ripened and matured, but the rate of world changing innovations slowed in the meantime. The foundations for the Third, Digital Revolution were established, but technological limitations prevented a flourishing. The average futurist of this era would have been flummoxed at where the great innovations of the previous generation had gone, and why it had all been replaced by countries and reloading for another pointless world war. Of course, innovative discoveries and inventions still happened, such as jet propulsion, digital computing, penicillin, nuclear power, space exploration, and the Chemical Revolution. However, the innovations of the Second Industrial Revolution wrought great horrors upon the world due to society developing slower than technology. Most notably through the rise of totalitarianism, fascism, communism, and industrial genocide`,
      isReverse: false,
    },
    {
      image: HistoryImg6,
      article: `Third Industrial Revolution: 1945-1995, which was defined by nuclear power and advanced energy production, digital computing, the birth of the internet, genetic modification, jet flight, space flight, early robotics, television, mass media, mass electrification, home automation, personal computers, and much more. The human condition changed at a rate so extreme that the future was no longer easily predictable based on past performance. In fact, even the poorest could now live better than kings of olde.`,
      isReverse: true,
    },
    {
      image: HistoryImg7,
      article: `Third Inter-Revolutionary Period: 1995-2022, marked by the maturation of digital technology and the overwhelming sense of technological stagnation. Also known as the Smartphone Era, the Social Media Era, and Y-2-Lame, the expectations of the new millennium being an era of science fiction dreams come true initially seemed to be dashed by the arrival of Y2K in a society that seemed otherwise unchanged since the 1970s sans advanced computing.`,
      isReverse: false,
    },
    {
      image: HistoryImg8,
      article: `When 2000 came and went, we noted that we were still "doing things," to use a phrase I coined before. We were still getting in rattly elevators, driving our own cars, planting on our food, flipping off light switches, walking to places we wanted to be, hanging out with friends in meat-space, shopping in physical stores, and otherwise living lives that could best be described as "high-tech 1970s."`,
      isReverse: true,
    },
    {
      image: HistoryImg9,
      article: `There were no flying cars. There were no domestic robots. There were no smart-glasses. There were no virtual reality headsets (on the mass market). There were no driverless cars. There were no holograms. There were no colonies on the moon or Mars. Militaries weren't using ray guns or force fields. We weren't becoming cyber-augmented transhumans. We weren't living in mile-high starscrapers. Buildings were still rectangles in the sky. The best chatbots were still Markov chains that didn't understand anything past the fourth thing you told it. And even though we got some form of home robots with the Roomba, it was the dumbest thing imaginable. It felt like even the Ancient Greeks could have developed something like it. Plasma screen TVs and big stereoes were a poor replacement for the future we were promised. As has been mentioned before, this was the era of a yuppie with a pager and PDA bicycling to work while a Boeing 747 flies above the smoggy, boxy metropolis filled with rose-petal highways. In some ways, that was futuristic, if you compared it to life in, say, rural France in the 1600s. But compared to our sci-fi visions of tomorrow, this was the lamest possible future imaginable.`,
      isReverse: false,
    },
    {
      image: HistoryImg10,
      article: `The summer of 2010 was hot, muggy, and hazy in a world where advanced AI was a bunch of magic tricks in a barely-elaborate Potemkin village. The best robots could barely walk without being tethered, and ASIMO seemed to almost be light years ahead of the competition just because it could navigate stairs reliably. This was supposed to be the technology that replaced human workers? Even if you claimed it wouldn't happen for another century, it was a hard sell.`,
      isReverse: true,
    },
    {
      image: HistoryImg11,
      article: `However, in the background, the paradigms of the next industrial revolution were established, such as machine learning, artificial general intelligence, genetic engineering, fusion power, advanced solar and wind power, automation, room temperature superconductors, transhumanism, mixed reality, the metaverse, passenger drones, commercial space exploration, advanced space industry, graphene, advanced robotics, brain computer interfaces, and more.`,
      isReverse: false,
    },
  ];

  return (
    <div className="w-full">
      <HeroTemplate
        video={HistoryVideo}
        text="Understanding our past, to better understand our future. "
      />
      <ArticlesTemplate articles={articles} />
    </div>
  );
}

export default History
