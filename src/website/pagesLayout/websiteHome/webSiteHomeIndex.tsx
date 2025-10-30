import WebsiteBestSellerIndex from "./bestSeller/websiteBestSellerIndex";
import WebsiteTopDeals from "./topDeals/websiteTopDealsIndex";

const WebsiteHomePage = () => {
    return(
        <div>
            <WebsiteBestSellerIndex />
            <WebsiteTopDeals />
        </div>
    )
}
export default WebsiteHomePage;