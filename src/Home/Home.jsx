import BlogPoasts from "./BlogPoasts"
import City from "./City"
import CountedUp from "./CountedUp"
import Discount from "./Discount"
import Gallery from "./Gallery"
import Hero from "./Hero"
import HomeGallery from "./HomeGallery"
import Review from "./Review"
import Rooms from "./Rooms"
import SaveCash from "./SaveCash"
import Sservices from "./Sservices"
import Team from "./Team"
import WhatWeOffer from "./WhatWeOffer"


const Home = () => {
    return(
        <>
        
        <Hero />
        <Sservices />
        <City />
        <Gallery />
        <Team />
        <WhatWeOffer />
        <SaveCash />
        <Rooms />
        <Review />
        <CountedUp />
        <Discount />
        <BlogPoasts />
        <HomeGallery />

        </>
    )
}

export default Home

