import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import OurServices from "./components/OurServices";
import DealofTheday from "./components/DealofTheday";
import UsedPhone from "./components/UsedPhone";
import ShopByPrice from "./components/ShopByPrice";
import WhyChooseBidmax from "./components/WhyChooseBidmax";
import ExclusiveStores from "./components/ExclusiveStores";
import CustomerReviews from "./components/CustomerReviews";
import HotDeals from "./components/HotDeals";
import FaqSection from "./components/FaqSection";
import BrandSlider from "./components/BrandSlider";
import ShopByCategory from "./components/ShopByCategory";
import FranchiseSection from "./components/FranchiseSection";


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <BrandSlider />
      <OurServices />
       <DealofTheday />
       <UsedPhone />    
       <ShopByCategory /> 
       <HotDeals />  
       <ShopByPrice />             
       <WhyChooseBidmax />
       <ExclusiveStores />
       <CustomerReviews />
      
       <FaqSection />
       <FranchiseSection />
      
    </>
  );
}