const guides = [
    {
        id: "california",
        category: "California",
        title: "캘리포니아 여행",
        city: "California",
        description:
            "캘리포니아는 해안 도시와 테마파크, 자연경관을 함께 즐길 수 있는 미국 서부의 대표적인 여행 지역입니다.",
        source:
            "https://traveltrade.visittheusa.com/ko/destinations/california/"
    },

    {
        id: "los-angeles",
        category: "California",
        title: "로스앤젤레스",
        city: "Los Angeles",
        description:
            "Hollywood, Santa Monica, Venice Beach, Getty Center, Universal Studios 등을 중심으로 여행할 수 있습니다.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        id: "san-diego",
        category: "California",
        title: "샌디에이고",
        city: "San Diego",
        description:
            "해안 지역과 도시 관광을 함께 즐길 수 있는 남부 캘리포니아 여행지입니다.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        id: "nevada",
        category: "Nevada",
        title: "네바다",
        city: "Nevada",
        description:
            "Las Vegas를 비롯해 다양한 관광지를 경험할 수 있는 미국 서부 지역입니다.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        id: "road-trip",
        category: "Road Trip",
        title: "미국 로드트립",
        city: "USA",
        description:
            "미국의 다양한 도시와 자연경관을 연결해 여행할 수 있는 로드트립 정보를 확인할 수 있습니다.",
        source:
            "https://www.visittheusa.com/ko/road-trips/"
    }
];


export default function handler(req, res) {

    res.status(200).json({
        success: true,
        count: guides.length,
        data: guides
    });

}
