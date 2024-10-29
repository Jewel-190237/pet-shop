import Post from "@/components/Home1/Post";
import TransformContent from "@/components/Common/TransformContent";
import HeadingLeft from "@/components/Common/HeadingLeft";
import ShopPeat from "@/components/Home1/ShopPeat";
import FeaturesCategories from "@/components/Home1/FeaturesCategories";
import Review from "@/components/Home1/Review";
import Team from "@/components/Home1/Team";
import Health from "@/components/Home1/Health";
const heading = ''
const description = ""
export default function Home({ }) {
  return (
    <div className="">
      {/* <FeaturesCategories /> */}
      {/* <ShopPeat /> */}
      <Health />
      <Team />
      <Review />
      <TransformContent bg='/home1/bg.svg' heading='Transform a Life: The Power of Pet Adoption' description="Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact." />
      <Post />
    </div>
  );
}
