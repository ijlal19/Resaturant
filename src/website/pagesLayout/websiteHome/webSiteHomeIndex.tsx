import WebsiteBestSellerIndex from "./bestSeller/websiteBestSellerIndex";
import WebsiteExploreMenu from "./exploreMenu/websiteExploreMenuIndex";
import WebsiteMenuSection from "./menuSection/websiteMenuSectionIndex";
import WebsiteTopDeals from "./topDeals/websiteTopDealsIndex";

const WebsiteHomePage = () => {
    return(
        <div>
            <WebsiteExploreMenu />
            <WebsiteBestSellerIndex />
            <WebsiteTopDeals />
            <WebsiteMenuSection />
        </div>
    )
}
export default WebsiteHomePage;