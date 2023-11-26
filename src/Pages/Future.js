import React from 'react'
import FutureVideo from "../Assets/FutureVisionVideoTrim.mp4";
import HeroTemplate from '../Components/HeroTemplate';
import ArticlesTemplate from '../Components/ArticlesTemplate';
import FutureImage1 from "../Assets/FutureImg01.jpg";
import FutureImg2 from "../Assets/FutureImg2.avif"
import FutureImg3 from "../Assets/FutureImg3.jpg";
import FutureImg4 from "../Assets/FutureImg4.avif";
import FutureImg5 from "../Assets/FutureImg05.jpg";
import FutureImg6 from "../Assets/FutureImg6.jpg";
import FutureImg7 from "../Assets/FutureImg7.jpg";
import FutureImg8 from "../Assets/FutureImg8.jpg";
import FutureImg9 from "../Assets/FutureImg9.jpg";



const Future = () => {
  const articles = [
    {
      image: FutureImage1,
      article: `In this new age of AI, the size, intelligence, and utility of digital tools will generate outsized returns. Content will be enabled to evolve its mimetic fitness over time as more people watch it. First through human guidance and eventually through a neural net trained for virality. Alongside these evolutions human symbiosis with AI video editing will make creating high quality content lightning quick. As prices decrease and quality increases of photo generation, we will see the emergence of video generation. This will allow users to prompt any story or idea and see it play out in real time. In the future when we think about what movie we want to watch, we will be able to simply ask for exactly what we are feeling.
 `,
      isReverse: false,
    },
    {
      image: FutureImg2,
      article: `Returns of impact on our personal lives will become greater and greater as we move deeper into an age where we are seeing this magic become a reality. Before we peer much deeper into what the future holds, I first want to glance over the history of the past three industrial revolutions. This will help us enter deeper into understanding how the fourth industrial revolution is set up to emerge.`,
      isReverse: true,
    },
    {
      image: FutureImg3,
      article: `Innovation cycles happen in a S curve. By that I mean first the foundation setting for a new revolution, then its strong emergence, and then the laying of a new foundation.\n\n These past 10 years can be seen as the groundwork of the digital age which will be the most disruptive yet. Already we see culture entirely shifted from a global world connected. New programs will launch and gain traction faster than ever before.`,
      isReverse: false,
    },
    {
      image: FutureImg4,
      article: `A lot of people claim the Third Industrial Revolution didn't start until 1970 and is still ongoing, while others claim there's only one industrial revolution and everything since has just been sub-periods within it.\n\n The most widespread agreed view is that we are in the foundational period before the boom of computing and digital representing the fourth industrial revolution.`,
      isReverse: true,
    },
    {
      image: FutureImg5,
      article: `Foundational Period" refers to the fact that technology generally progresses in inter-twining S-curves and right as one paradigm peaks, another troughs before rising. This is why people between 1920-1940 and between 2000 and 2020 felt like all the great technologies of their preceding industrial revolutions had given way to incremental iterative improvements and great laboratory advancements that never seemed capable of actually leaving the laboratory. If you ever wondered why the 2000s and 2010s felt indistinguishable and slow, as if nothing changed from 1999 to the present, it was because you were living in that intermediate period between technological revolutions. During that time, all the necessary components for the Fourth Industrial Revolution were being set up as the foundations for what we're seeing now while simultaneously all the fruits of the Third Industrial Revolution were fully maturing and perhaps even starting to spoil, with nothing particularly overwhelming pushing things forward. You might remember this as "foundational futurism`,
      isReverse: false,
    },
    {
      image: FutureImg6,
      article: `As it stands, a lot of foundational stuff tends to be pretty boring on its own. Science fiction talks of the future being things like flying cars, autonomous cars, humanoid servant robots, synthetic media, space colonies, neurotechnology, and so on. Sci-fi media sometimes set years for these things to happen, like the 1990s or 2000s. Past futurists often set similar dates. Dates like, say, 2020 AD. According to Blade Runner, we're supposed to have off-world colonies and 100% realistic humanoid robots (e.g. with human-level artificial general intelligence) by now. According to Ray Kurzweil, we were supposed to have widespread human-AI relationships (ala Her) and PCs with the same power as the human brain by 2019. When these dates passed and the most we had was, say, the Web 2.0 and smartphones, we felt depressed about the future.`,
      isReverse: true,
    },
    {
      image: FutureImg7,
      article: `But here's the thing: we're basically asking why we don't have a completed 2-story house when we're still setting down the foundation, a foundation using tools that were created in the preceding years.`,
      isReverse: false,
    },
    {
      image: FutureImg8,
      article: `We couldn't get to the modern internet without P2P, VoIP, enterprise instant messaging, e-payments, business rules management, wireless LANs, enterprise portals, chatbots, and so on. Things that are so fundamental to how the internet circa 2020 works that we can scarcely even consider them individually. No increased bandwidth for computer connections? No audio or video streaming. No automated trading or increased use of chatbots? No fully automated businesses. No P2P? No blockchain. No smartphones or data sharing? No large data sets that can be used to power machine learning, and thus no advanced AI`,
      isReverse: true,
    },
    {
      image: FutureImg9,
      article: `Finally and a bit more lightheartedly, I'd strongly recommend against using this to predict future industrial revolutions unless you're writing a pulp sci-fi story and need to figure out roughly when the 37th industrial revolution will be underway. If the Fourth Industrial Revolution pans out the way we expect it to, there won't be a Fifth. Or perhaps more accurately, we won't be able to predict the Fifth, specifically when it'll take place and what it will involve.`,
      isReverse: false,
    },
  ];
  return (
    <div className="w-full">
      <HeroTemplate
        video={FutureVideo}
        text="Our Coming Future"
      />

      <ArticlesTemplate articles={articles} />
    </div>
  );
}

export default Future
