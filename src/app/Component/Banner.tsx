import Image from "next/image";
import banner from "@/assets/banner.png"


const Banner = () => {
    return (
        <div className="bg-mauve-900 py-10 my-5 border border-mauve-700 rounded-2xl lg:w-300 lg:mx-auto">
            <div className="flex justify-between items-center ml-10">
                <div>
                    <p className="text-lime-400 text-sm py-10">WORKOUT LIBRAY</p>
                    <h2 className="text-4xl font-bold">TRAIN WITH INTENT. LOG</h2>
                    <h2 className="text-4xl font-bold pb-5">EVERY SET.</h2>
                    <p className="text-sm text-gray-300">Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it.</p>
                    <p className="text-sm text-gray-300">into todays plan, and watch the weeks work add up.</p>
                    <button className="btn bg-lime-400 border-none my-5">BROWSER WORKOUTS</button>
                </div>
                <div>
                    <Image src={banner} alt="banner alt"></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;