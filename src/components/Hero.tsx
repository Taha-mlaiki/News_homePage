import heroPicDesk from "../assets/images/image-web-3-desktop.jpg"
import heroPicTele from "../assets/images/image-web-3-mobile.jpg"
import retroImg from "../assets/images/image-retro-pcs.jpg"
import topLaptop from "../assets/images/image-top-laptops.jpg"
import growthGame from "../assets/images/image-gaming-growth.jpg"
const Hero = () => {

  return (
    <section>
        <div className="container">
        <div className="grid md:grid-cols-4 px-7 xl:px-14 mt-7 gap-5">
            <div className="md:col-span-4 lg:col-span-3 grid-rows-2 mb-10">
                <div className="mb-4">
                    <img className=" hidden md:block" src={heroPicDesk} alt="" />
                    <img className=" md:hidden" src={heroPicTele} alt="" />
                </div>
                <div className="grid md:grid-cols-6 gap-5">
                    <h1 className="md:col-span-3 text-4xl md:text-7xl font-extrabold leading-normal mb-3 ">The Bight Future of Web 3.0 ? </h1>
                    <div className=" md:col-span-3">
                        <p className=" text-sm leading-relaxed sm:leading-loose text-darkGrBlue mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              repellat similique laudantium sed possimus beatae itaque mollitia
              impedit adipisci. Recusandae porro, molestiae magnam assumenda
              beatae repellat labore quisquam sint quasi!
                        </p>
                        <button className="px-8 py-3 bg-soft_red text-white font-bold text-lg hover:bg-veryDkBlue transition duration-150">Read More</button>
                    </div>
                </div>
            </div>
            <div className=" md:col-span-3 lg:col-span-1">
                <div className=" bg-veryDkBlue p-5 ">
                    <h2 className=" text-soft_orange text-5xl font-bold ">New</h2>
                    <div className="text-white py-6 border-b ">
                        <h3 className="font-bold text-2xl md:text-lg mb-3 hover:text-soft_orange cursor-pointer">Hydrogen VS Electric Cars</h3>
                        <p className="text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="text-white py-6 border-b ">
                        <h3 className=" font-bold text-2xl mb-3 md:text-lg hover:text-soft_orange cursor-pointer">The Downsides of AI Artistry</h3>
                        <p className="text-sm" >What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="text-white py-3 ">
                        <h3 className=" font-bold text-2xl mb-3 md:text-lg hover:text-soft_orange cursor-pointer">Is VC Funding Drying Up?</h3>
                        <p className="text-sm" >Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="grid grid-cols-6 gap-3 px-7 my-5 xl:px-14">
                <div className="flex items-center col-span-6 sm:col-span-3 lg:col-span-2 p-3">
                    <img className=" w-20 mr-4" src={retroImg} alt="" />
                    <div>
                        <h1 className=" text-grayish_blue text-3xl font-bold">01</h1>
                        <h2 className="font-bold hover:text-soft_red cursor-pointer">Reviving Retro Pcs</h2>
                        <p className=" text-darkGrBlue text-sm">What happens when old PCs are given modern upgrades ?</p>
                    </div>
                </div>
                <div className="flex items-center  col-span-6 sm:col-span-3 lg:col-span-2 p-3">
                    <img className=" w-20 mr-4" src={topLaptop} alt="" />
                    <div>
                        <h1 className=" text-grayish_blue text-3xl font-bold">02</h1>
                        <h2 className="font-bold hover:text-soft_red cursor-pointer">Top 10 Laptops of 2022</h2>
                        <p className=" text-darkGrBlue text-sm">Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="flex items-center  col-span-6 sm:col-span-3 lg:col-span-2 p-3">
                    <img className=" w-20 mr-4" src={growthGame} alt="" />
                    <div>
                        <h1 className=" text-grayish_blue text-3xl font-bold">03</h1>
                        <h2 className="font-bold hover:text-soft_red cursor-pointer">The Growth of Gaming</h2>
                        <p className=" text-darkGrBlue text-sm">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
