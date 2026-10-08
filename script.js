/* =========================================================
   USA FAMILY TRIP 2027
   ========================================================= */


/* =========================
   여행 일정
========================= */

const travelSchedule = [

    {
        date: "2027/01/30",
        city: "LA",
        title: "LA 도착 → 호텔 → Griffith Observatory",
        transport: "Uber",
        description:
            "LA 도착 후 호텔 체크인. 이후 Uber를 이용해 Griffith Observatory 방문."
    },

    {
        date: "2027/01/31",
        city: "LA",
        title: "Santa Monica + Venice Beach",
        transport: "Metro / 버스 + Uber",
        description:
            "산타모니카와 베니스 비치를 중심으로 LA 해안 지역 관광."
    },

    {
        date: "2027/02/01",
        city: "LA",
        title: "Universal Studios Hollywood",
        transport: "Metro",
        description:
            "Universal Studios Hollywood 방문. Harry Potter 지역 등 주요 어트랙션 관광."
    },

    {
        date: "2027/02/02",
        city: "LA",
        title: "Hollywood + Getty Center",
        transport: "Metro + Uber",
        description:
            "Hollywood 관광 후 Getty Center 방문."
    },

    {
        date: "2027/02/03",
        city: "LA → Las Vegas",
        title: "포시즌투어 출발",
        transport: "투어 차량",
        description:
            "LA에서 포시즌투어를 통해 Las Vegas 방향으로 이동."
    },

    {
        date: "2027/02/04",
        city: "Las Vegas / Grand Canyon",
        title: "Las Vegas / Grand Canyon 투어",
        transport: "포시즌투어",
        description:
            "포시즌투어 일정에 따라 Las Vegas 및 Grand Canyon 관광."
    },

    {
        date: "2027/02/05",
        city: "Grand Canyon → LA",
        title: "Grand Canyon 관광 → LA 이동",
        transport: "포시즌투어",
        description:
            "Grand Canyon 관광 후 투어 차량으로 LA 이동."
    },

    {
        date: "2027/02/06",
        city: "LA → San Diego",
        title: "San Diego 이동 + Little Italy / Harbor",
        transport: "Amtrak + Uber",
        description:
            "LA에서 San Diego로 이동 후 Little Italy와 Harbor 관광."
    },

    {
        date: "2027/02/07",
        city: "San Diego",
        title: "La Jolla + 해변",
        transport: "버스 / 트롤리 + Uber",
        description:
            "La Jolla 및 샌디에이고 해안 지역 관광."
    },

    {
        date: "2027/02/08",
        city: "San Diego → LA",
        title: "San Diego 관광 → LA 이동",
        transport: "Amtrak + Uber",
        description:
            "오전 또는 낮 시간 San Diego 관광 후 LA로 이동."
    },

    {
        date: "2027/02/09",
        city: "LA",
        title: "LA 마지막 관광 + 쇼핑",
        transport: "Metro + Uber",
        description:
            "LA 마지막 관광 및 마트/쇼핑."
    },

    {
        date: "2027/02/10",
        city: "LA",
        title: "한국 귀국",
        transport: "Uber / Lyft",
        description:
            "09:50 출발 항공편을 위해 이른 시간 공항 이동."
    }

];


/* =========================
   호텔
========================= */

const hotels = [

    {
        region: "LA",
        name: "Best Western Plus LA Midtown",
        location: "Koreatown 인근",
        description:
            "LA 주요 지역 이동을 고려하기 좋은 숙박 후보."
    },

    {
        region: "LA",
        name: "Koreatown 지역 호텔",
        location: "Los Angeles Koreatown",
        description:
            "한인타운 주변 식당과 마트 이용이 편리한 지역."
    },

    {
        region: "LA",
        name: "Downtown LA 지역 호텔",
        location: "Downtown Los Angeles",
        description:
            "Metro를 활용한 LA 이동을 고려할 때 선택할 수 있는 지역."
    },

    {
        region: "Las Vegas",
        name: "Las Vegas Strip 호텔",
        location: "Las Vegas Strip",
        description:
            "투어 일정과 주요 관광시설 접근성을 고려할 수 있는 지역."
    },

    {
        region: "San Diego",
        name: "Little Italy 지역 호텔",
        location: "Little Italy",
        description:
            "San Diego 관광과 식사를 함께 고려하기 좋은 지역."
    },

    {
        region: "San Diego",
        name: "Downtown San Diego",
        location: "Downtown",
        description:
            "Harbor와 여러 관광지 접근성을 고려할 수 있는 지역."
    }

];


/* =========================
   미국 여행 가이드
========================= */

const travelGuides = [

    {
        category: "California",
        title: "캘리포니아 여행",
        location: "California",
        description:
            "캘리포니아는 해안 도시, 테마파크, 자연경관, 도시 관광을 함께 즐길 수 있는 미국 서부의 대표적인 여행 지역입니다.",
        source:
            "https://traveltrade.visittheusa.com/ko/destinations/california/"
    },

    {
        category: "California",
        title: "Los Angeles",
        location: "Los Angeles",
        description:
            "LA에서는 Hollywood, Santa Monica, Venice Beach, Getty Center, Universal Studios 등을 중심으로 일정을 구성할 수 있습니다.",
        source:
            "https://www.visittheusa.com/ko/destinations/california"
    },

    {
        category: "California",
        title: "San Diego",
        location: "San Diego",
        description:
            "San Diego는 해안 풍경과 도시 관광을 함께 즐길 수 있는 남부 캘리포니아 여행지입니다. La Jolla와 해안 지역을 일정에 포함할 수 있습니다.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        category: "Nevada",
        title: "Nevada 여행",
        location: "Nevada",
        description:
            "네바다는 Las Vegas를 중심으로 다양한 관광과 엔터테인먼트를 경험할 수 있는 지역입니다.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        category: "Road Trip",
        title: "미국 로드트립",
        location: "USA",
        description:
            "미국은 도시와 도시 사이의 이동 자체를 여행으로 즐길 수 있는 다양한 로드트립 코스를 제공합니다.",
        source:
            "https://www.visittheusa.com/ko/road-trips/"
    },

    {
        category: "Travel",
        title: "미국 입국 준비",
        location: "USA",
        description:
            "미국 여행 전 여권, ESTA 또는 비자, 입국 관련 요구사항을 반드시 확인해야 합니다. 출발 전에 공식 정보를 다시 확인하세요.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        category: "Travel",
        title: "미국 여행 계획",
        location: "USA",
        description:
            "미국은 주별로 여행지와 문화가 크게 다르기 때문에 방문할 지역을 먼저 정하고 그 지역을 중심으로 일정을 구성하면 편리합니다.",
        source:
            "https://www.visittheusa.com/ko/"
    },

    {
        category: "Road Trip",
        title: "Pacific Coast Highway",
        location: "California",
        description:
            "캘리포니아 해안을 따라 이어지는 대표적인 미국 서부 여행 코스 중 하나입니다.",
        source:
            "https://www.visittheusa.com/ko/"
    }

];


/* =========================
   페이지 전환
========================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.getElementById("mainNav").classList.remove("open");
}


/* =========================
   모바일 메뉴
========================= */

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("open");
}


/* =========================
   일정 출력
========================= */

function renderSchedule() {

    const container =
        document.getElementById("scheduleContainer");

    container.innerHTML = "";

    travelSchedule.forEach(item => {

        const card = document.createElement("div");

        card.className = "schedule-card";

        card.innerHTML = `

            <div class="schedule-top">

                <div class="schedule-date">
                    ${item.date}
                </div>

                <div class="schedule-city">
                    ${item.city}
                </div>

            </div>

            <h3>
                ${item.title}
            </h3>

            <p>
                🚇 <strong>교통:</strong>
                ${item.transport}
            </p>

            <p>
                ${item.description}
            </p>
        `;

        container.appendChild(card);

    });
}


/* =========================
   호텔 출력
========================= */

function renderHotels(list = hotels) {

    const container =
        document.getElementById("hotelContainer");

    container.innerHTML = "";

    list.forEach(hotel => {

        const card = document.createElement("div");

        card.className = "hotel-card";

        card.innerHTML = `

            <span class="hotel-region">
                ${hotel.region}
            </span>

            <h3>
                🏨 ${hotel.name}
            </h3>

            <p class="hotel-location">
                📍 ${hotel.location}
            </p>

            <p>
                ${hotel.description}
            </p>

        `;

        container.appendChild(card);

    });
}


/* =========================
   호텔 필터
========================= */

function filterHotels(region) {

    if (region === "all") {

        renderHotels(hotels);

        return;
    }

    const filtered =
        hotels.filter(
            hotel => hotel.region === region
        );

    renderHotels(filtered);
}


/* =========================
   여행 가이드 출력
========================= */

function renderGuides(list = travelGuides) {

    const container =
        document.getElementById("guideContainer");

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="guide-card">
                <h3>검색 결과가 없습니다.</h3>
                <p>
                    다른 여행지나 지역명을 검색해보세요.
                </p>
            </div>
        `;

        return;
    }


    list.forEach(guide => {

        const card =
            document.createElement("article");

        card.className = "guide-card";

        card.innerHTML = `

            <div class="guide-category">
                ${guide.category}
            </div>

            <h3>
                ${guide.title}
            </h3>

            <p>
                📍 ${guide.location}
            </p>

            <p>
                ${guide.description}
            </p>

            <a
                class="guide-source"
                href="${guide.source}"
                target="_blank"
                rel="noopener noreferrer"
            >
                공식 정보 확인 →
            </a>

        `;

        container.appendChild(card);

    });
}


/* =========================
   가이드 카테고리
========================= */

function loadGuideCategory(category) {

    if (category === "all") {

        renderGuides(travelGuides);

        return;
    }

    const filtered =
        travelGuides.filter(
            guide => guide.category === category
        );

    renderGuides(filtered);
}


/* =========================
   가이드 검색
========================= */

function searchGuide() {

    const input =
        document.getElementById("guideSearch");

    const keyword =
        input.value.trim().toLowerCase();


    if (!keyword) {

        renderGuides(travelGuides);

        return;
    }


    const filtered =
        travelGuides.filter(guide => {

            return (

                guide.title
                    .toLowerCase()
                    .includes(keyword)

                ||

                guide.location
                    .toLowerCase()
                    .includes(keyword)

                ||

                guide.category
                    .toLowerCase()
                    .includes(keyword)

                ||

                guide.description
                    .toLowerCase()
                    .includes(keyword)

            );

        });


    renderGuides(filtered);
}


/* =========================
   체크리스트 저장
========================= */

function loadChecklist() {

    const checkboxes =
        document.querySelectorAll(
            ".checklist input"
        );


    checkboxes.forEach(box => {

        const key =
            "usaTrip_" + box.dataset.check;

        const saved =
            localStorage.getItem(key);

        box.checked = saved === "true";


        box.addEventListener("change", () => {

            localStorage.setItem(
                key,
                box.checked
            );

        });

    });

}


/* =========================
   초기 실행
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderSchedule();

        renderHotels();

        renderGuides();

        loadChecklist();

    }
);
