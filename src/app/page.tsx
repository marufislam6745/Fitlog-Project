import Banner from "./Component/Banner";
import FitlogData from "./Component/FitlogData";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
       <Banner></Banner>
       <FitlogData></FitlogData>
    </div>
  );
}
