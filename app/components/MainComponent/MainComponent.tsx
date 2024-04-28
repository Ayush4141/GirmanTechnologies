import Image from "next/image";

const MainComponent = () => {
  return (
    <div className="h-3/5  relative">
        <div className="h-[600px] w-[630px] rounded-full bg-[#F8F8F8] absolute -top-80 -left-32 -z-50 "></div>
        <div>
        <div className="absolute h-full w-1/2 z-50 pl-16 ml-8 font-bold">
            <p className="text-5xl pb-2">Empowering Ideas</p>
            <div className="flex flex-row ">
            <p className="text-5xl mr-2 text-[#3063E6]">Transforming </p>
            <p className="text-5xl">Businesses </p>
            </div>

            <div className="font-light text-xl pr-36 pt-4 text-[#111111]">
            We excel at delivering top-tier IT solutions, establishing trust with
            each and every project, and fostering lasting relationships that grow
            with your organisation.
            </div>
            <div className="mt-4">
            <button className="bg-[#18004C] text-white mt-2 font-normal px-4 py-2 rounded-3xl">Book a free consultation</button>
        </div>
        </div>
        <div className="absolute top right-0 w-1/2 h-full z-50 ">
            <div className="relative">
                <Image src={"/circle.svg"} width={467} height={462} alt="" className="absolute -top-10 left-20"/>
            </div>
            
        </div>
      </div>
      

      
    </div>
  );
};

export default MainComponent;
