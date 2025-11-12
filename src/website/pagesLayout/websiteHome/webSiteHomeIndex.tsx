import WebsiteBestSellerIndex from "./bestSeller/websiteBestSellerIndex";
import WebsiteExploreMenu from "./exploreMenu/websiteExploreMenuIndex";
import WebsiteBanner from "./homeSlider/homeSliderIndex";
import WebsiteMenuSection from "./menuSection/websiteMenuSectionIndex";
import WebsiteTopDeals from "./topDeals/websiteTopDealsIndex";

const WebsiteHomePage = () => {
    return(
        <div>
            <WebsiteBanner />
            <WebsiteExploreMenu />
            <WebsiteBestSellerIndex />
            <WebsiteTopDeals />
            <WebsiteMenuSection />
        </div>
    )
}
export default WebsiteHomePage;