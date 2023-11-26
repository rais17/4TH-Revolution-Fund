import React from 'react'
import RFVideo from "../Assets/4RFVideoTrim.mp4";
import HeroTemplate from '../Components/HeroTemplate';
import RFImage from "../Assets/4RF_Content.jpg";
import RFImg2 from "../Assets/4RFImg2.jpg";
import RFImg3 from "../Assets/4RFImg3.jpg";
import RFImg4 from "../Assets/4RFImg4.jpg";
import RFImg5 from "../Assets/4RFImg6.jpg";
import RFImg6 from "../Assets/4RFLabGrownMeat.jpg";
import RFImg7 from "../Assets/4RFGeneticEng.jpg";
import TechImg1 from "../Assets/blockchain.jpg";
import TechImg2 from "../Assets/metaverse.jpg";
import TechImg3 from "../Assets/solarwind.jpg";
import TechImg4 from "../Assets/3DPrinting.jpg";
import TechImg5 from "../Assets/nextGenLab2.jpg";
import TechImg6 from "../Assets/autonomasVehcile.jpg";
import Corousel from '../Components/Corousel';
// import RFQuotes from "../Assets/4RFQuotes.jpg";
import ArticleHeadTemplate from '../Components/ArticleHeadTemplate';
import QuotesTop from "../Assets/quotes1.jpg";
import QuotesBottom from "../Assets/quotes2.jpg";
import Quotes from '../Components/Quotes';


const Revolution = () => {
  
  const articles_top = [
    {
      image: RFImage,
      article: `The Fourth Industrial Revolution will have more quality-of-life impacts on the human condition than even the Second Industrial Revolution, which saw humans going from horse-and-buggies and prayer-and-gin to automobiles, airplanes, and penicillin in just a generation. Indeed, the reason I'm making this fund is because I believe many of us are underestimating what’s to come. In a sense I feel like those not clued in to what our future holds are in the Santa Clause phase of life, its just something you do until you finally see the right information on the situation. In our case, one of societies Santa Clause beliefs is believing investing with a 15-30 year outlook is something that can be done`,
      isReverse: false,
    },
    {
      image: RFImg2,
      article: `It is hard to fathom just how obscenely overwhelming the Fourth Industrial Revolution is going to be, potentially as difficult as getting over the fact that Santa Claus never did exist. Nothing we've experienced thus far has adequately prepared us for this.`,
      isReverse: true,
    },
    {
      image: RFImg3,
      article: `The power of propaganda and the power of myth will become self evident. We will be able to craft entire worlds and experiences. We will be able to EXPERIENCE thought experiments in new ways and better deal with atrocities in happening around the world in real time. `,
      isReverse: false,
    },
  ];

  const articles_bottom = [
    {
      image: RFImg4,
      title: `Artificial Intelligence`,
      article: `Advanced artificial narrow intelligence and artificial general intelligence will be the steam and electricity of the Fourth Industrial Revolution, allowing for a lot of what we're soon to be capable of. Indeed, my honest opinion is that without digital computing and narrow artificial intelligence, we as a technological civilization would have stagnated around 1970 much the same way we could have stagnated in the 1800s without steam power. On its own, AGI almost certainly means the Singularity, a revolution so far beyond anything we've ever seen in the history of life on this planet that it'd essentially begin a new epoch of the universe itself. Of course, that's IF the Kurzweilian Singularity proves true. The sheer range of changes that will come from artificial general intelligence is so absolute that I'd undermine this whole post if I listed them here. This— is— the Fourth Industrial Revolution.`,
      isReverse: false,
    },

    {
      image: RFImg5,
      title: `Robotics and automation`,
      article: `Once we have even proto-AGI, let alone the full thing, we'll be living in neo-Antiquity. Robots are the final true stepping stone to a "sci-fi world," because once we have robots, we will have The Future™. Robots mean industry wherever. Robots mean abundance. The lines between capitalism and the idealized version of socialism will blur with the introduction of a technological helot class, and in more entertaining fashion, robots mean almost any fictional creation can be realized in our real world. Barring thermodynamics, robots resolve many of the crises of labor such as the need to eat and rest or the inefficiencies of human labor. But this will only be realized through AI`,
      isReverse: true,
    },

    {
      image: RFImg6,
      title: `Lab grown meat and next-generation agriculture`,
      article: `As a byproduct of advanced biotechnology, we're going to see the next big food and consumer materials revolution through lab-grown foodstuffs and other lab-grown materials, like lab-grown leather. Couple this with indoor farming and you could see a much more sustainable agricultural economy. Indeed, once you have such agricultural technology, you actually no longer need full-fledged globalism as individual regions could create just about anything they desire. You could have Canadian chocolate, Caribbean whale blubber, Mongolian bananas, and more. Thus it's possible that next-gen agriculture could actually trigger a wave of "benevolent nationalism" as megaregions no longer have a reason to be interconnected economically besides some larger resources that can't be made in a lab without nucleosynthesis`,
      isReverse: false,
    },

    {
      image: RFImg7,
      title: `Genetic engineering`,
      article: `With the human genome now completely decoded and technologies like CRISPR starting to mature, we're rapidly approaching an inflection point where modifying genetic material can be done on an industrial, ultra-precise scale. The very nature of what it means to be human is going to change— and that's without getting into other lifeforms. We could engineer more nutritious food, domesticate wild animals in a single generation, resurrect extinct species, create entirely new species that have never existed before, and so much more. The question isn't "can we?" but "should we" and "will we?" You know my opinion on these matters: yes, yes, yes, yes, yes, we should.`,
      isReverse: true,
    },
  ];

  const otherTechs = [
    {
      title: `Blockchains`,
      description: `This is almost certainly going to be more of a banking and economic thing than anything impacting wider society like those behind NFTs like to claim, but I still do think that blockchain technology will be an important aspect of this era. They may allow for more decentralized economic activity to take root, which would certainly upset world governments but could, in theory, be useful in our upcoming automated society`,
      image: TechImg1,
      isReverse: false,
    },
        {
      title: `Metaverse and augmented reality`,
      description: `I view the Metaverse as being a 3D internet more than the buzzword its came to be, and mixed reality will overlay that next generation internet over our actuality. As a result, I see the metaverse as also being a place plenty of people will choose to escape into as an alternative form of proto-transhumanism, and plenty of those aforementioned trans-humans will be defined by the fact they use technology to sustain themselves IRL so they can live out other lives in the metaverse`,
      image: TechImg2,
      isReverse: true,
    },
    {
      title: `A resolution to the energy crisis`,
      description: `Solar, wind, nuclear fission, nuclear fusion, tidal, geothermal, and space-based solar power will converge to push humanity to realms of energy production so outrageous in such short order that we'll laugh and cringe at the fact we were so dependent upon burning dinosaur-era plants just to keep our civilization functioning. Solar in particular has already passed the terawatt mark, and is almost certainly going to double in about four to five years presuming current growth sustains itself, and that growth will similarly double, to the point solar alone could supply 30% of our global energy needs by 2035 (I think 2030 is too soon, and 2050 far too late). Solar is going to dominate the Fourth Industrial Revolution, with fusion coming online in the middle of it. So in an indirect way, fusion will still dominate the Fourth Industrial Revolution`,
      image: TechImg3,
      isReverse: false,
    },
    {
      title: `3D Printing and Micro-Manufacturing`,
      description: `There was a time around 2013-2015 when 3D printing was overhyped and seen as the next big thing. That hype faded as the limitations of 3D printers became obvious, but that doesn't mean the technology is dead. Rather, it's just maturing in the background. Once atomically-precise printing becomes feasible, all bets are off, and we could see an industrial explosion. 3D printing also ought to make space exploration much, much easier since it would only require us bring raw materials off world (and that's when we couldn't fabricate materials out of extraterrestrial resources, such as for things that require biological matter). The laws of thermodynamics prevent us from creating full-fledged Santa Claus machines, but there's still a wide range of possibilities even with current technology`,
      image: TechImg4,
      isReverse: true,
    },
                    {
      title: `Next-generation medicine`,
      description: `With artificial intelligence and genomics, we're going to see the formal "end" of diseases as we know them between now and 2060. We already see this today with the advent of mRNA and T-cell treatment, but it's going to become much more advanced as we solve things like protein folding and gene modification. Diseases like all known cancers, diabetes, heart disease, even prion diseases might be resolved in less than a generation, and again, you can thank artificial intelligence for enabling such progress. We've made such predictions before, predicated on that classic "Well, we'll solve them somehow through sheer human ingenuity and black-swan breakthroughs," but it's since become clear that we're only going to accomplish such things with AI. Quantum computers may be needed for the most complex of diseases. The holy grail of this is undoubtedly life extension.`,
      image: TechImg5,
      isReverse: false,
    },
                        {
      title: `Autonomous vehicles and personal aero-transport`,
      description: `Another technology enabled by AI, autonomous vehicles will be realized once we have commonsense-understanding perfect vision systems, which all but heralds AGI itself (hence my opinion that we need AGI for autonomous vehicle technology to truly take off as promised). As a side effect, autonomous vehicle technology will make the dream of flying cars feasible by cutting out what has always been the biggest obstacle to personal air transport: the need for a human pilot`,
      image: TechImg6,
      isReverse: true,
    },
  ];

  const quotes = [
    {
      description: `I started with artificial intelligence precisely because it IS going to be the single most important technology of the Fourth Industrial Revolution. We could still have a Fourth Industrial Revolution without it, just look at the sheer number of technologies that are going to mature at roughly the same time, but Ai is what is set up to completely redefine human life as we know it.\n\nIt is an accelerant that will move past human cognition. Indeed many technologies will only reach their maximum potential BECAUSE of it. Like medicine and robotics— without AI, medicine would progress slowly, with life extension and cures for deep diseases like cancer, diabetes, and prion diseases being forever just-round-the-corner.`,
      image: QuotesTop,
      isReverse: false,
    },
    {
      description: `I also didn't include synthetic media as its own unique bullet point because that's ultimately a direct impact of AI. Indeed, I view synthetic media— the Age of Imaginative Machines— as the direct precursor to artificial general intelligence. Whether anyone prefers it or not the future is coming, and you will be a part of it. We see this as the greatest opportunity any person alive today could have, to dedicate themselves to positively influencing the future.\n\nThe entire economic ecosystem will get disrupted, with our hope to see money chasing the eternal value of empowering people, and leaving the powerless state of asset classes which will become worth next to nothing at the end of this age`,
      image: QuotesBottom,
      isReverse: true,
    }
  ];

  return (
    <div className="w-full min-h-screen">
      <HeroTemplate
        video={RFVideo}
        text="The Fourth Industrial Revolution is the upcoming/current one"
      />
      <div className="w-full bg-[#212121] space-y-10 py-10">
        <ArticleHeadTemplate
          title="What is Going Happen To Next ?"
          articles={articles_top}
        />
        <ArticleHeadTemplate
          title="What will define the Fourth Industrial Revolution and what core
                  technologies with Fourth Revolution Fund help create?"
          articles={articles_bottom}
        />

        <div className="w-full space-y-10">
          <h1 className="px-3 text-3xl font-semibold text-center text-gray-400 sm:px-6 lg:text-5xl font-Titillium">
            Outside of this core focus for Fourth Revolution Fund other emergent
            areas that we will continue to keep an eye on includes
          </h1>
          <Corousel items={otherTechs} />
        </div>

        <div className="flex flex-col w-full gap-y-8">
          {quotes.map((quote, index) => {
            return <Quotes key={index} {...quote} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Revolution
