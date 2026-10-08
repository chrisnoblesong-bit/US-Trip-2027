const visitUSA = {

    website:
        "https://www.visittheusa.com/ko/",

    roadTrips:
        "https://www.visittheusa.com/ko/road-trips/",

    california:
        "https://traveltrade.visittheusa.com/ko/destinations/california/",

    topics: [

        {
            id: "destinations",
            name: "미국 여행지",
            url:
                "https://www.visittheusa.com/ko/"
        },

        {
            id: "road-trips",
            name: "로드트립",
            url:
                "https://www.visittheusa.com/ko/road-trips/"
        },

        {
            id: "visa",
            name: "비자 및 입국",
            url:
                "https://www.visittheusa.com/ko/"
        },

        {
            id: "california",
            name: "캘리포니아",
            url:
                "https://traveltrade.visittheusa.com/ko/destinations/california/"
        }

    ]

};


export default function handler(req, res) {

    res.status(200).json({

        success: true,

        source: "Visit The USA",

        sourceUrl:
            visitUSA.website,

        data:
            visitUSA

    });

}
