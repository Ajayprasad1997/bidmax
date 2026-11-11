import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import OurServices from "./components/OurServices";
import RefurbishedMobilesSlider from "./components/RefurbishedMobilesSlider";
import IphoneCollection from "./components/IphoneCollection";
import SamsungGalaxyCollection from "./components/SamsungGalaxyCollection";
import ShopByPrice from "./components/ShopByPrice";
import WhyChooseBidmax from "./components/WhyChooseBidmax";
import ExclusiveStores from "./components/ExclusiveStores";
import CustomerReviews from "./components/CustomerReviews";
import HotDeals from "./components/HotDeals";
import FaqSection from "./components/FaqSection";


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <OurServices />
      <RefurbishedMobilesSlider />
       <IphoneCollection />
       <SamsungGalaxyCollection />
       <ShopByPrice />
       <WhyChooseBidmax />
       <ExclusiveStores />
       <CustomerReviews />
       <HotDeals />
       <FaqSection />
    </>
  );
}