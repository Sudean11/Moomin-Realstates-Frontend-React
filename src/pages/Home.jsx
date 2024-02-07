import {
  Featured,
  Projects,
} from "../components/common/page-componets";
import { Filters, Hero, LatestForSale } from "../components/home";
import Search from "../components/home/Search";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <Projects />
      <Featured />
      <LatestForSale />
    </div>
  );
};

export default Home;
