import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import OurServices from "./components/OurServices";
import DealofTheday from "./components/DealofTheday";
import IphoneCollection from "./components/IphoneCollection";
import SamsungGalaxyCollection from "./components/SamsungGalaxyCollection";
import ShopByPrice from "./components/ShopByPrice";
import WhyChooseBidmax from "./components/WhyChooseBidmax";
import ExclusiveStores from "./components/ExclusiveStores";
import CustomerReviews from "./components/CustomerReviews";
import HotDeals from "./components/HotDeals";
import FaqSection from "./components/FaqSection";
import BrandSlider from "./components/BrandSlider";


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <BrandSlider />
      <OurServices />
       <DealofTheday />
       <IphoneCollection />
       
       <ShopByPrice />
        <HotDeals />
       <WhyChooseBidmax />
       <ExclusiveStores />
       <CustomerReviews />
      
       <FaqSection />
      
    </>
  );
}