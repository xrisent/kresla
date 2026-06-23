import { Catalog } from "../../Catalog/Catalog";
import { HeroSection } from "./HeroSection/HeroSection";

// import { useDispatch, useSelector } from "react-redux";
// import { addCount, minusCount } from "../../counterSlice";

export const Home = () => {
  // const num = useSelector((state) => state.counter.count);

  // const dispatch = useDispatch();

  return (
    <>
      <HeroSection/>
      <Catalog />

      
    </>
  );
};
