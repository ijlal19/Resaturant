import WebsiteBestSellerIndex from "./bestSeller/websiteBestSellerIndex";
import WebsiteExploreMenu from "./exploreMenu/websiteExploreMenuIndex";
import WebsiteTopDeals from "./topDeals/websiteTopDealsIndex";

const WebsiteHomePage = () => {
    return(
        <div>
            <WebsiteExploreMenu />
            <WebsiteBestSellerIndex />
            <WebsiteTopDeals />
        </div>
    )
}
export default WebsiteHomePage;