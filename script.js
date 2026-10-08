// ==========================================
// 🇺🇸 US TRIP 2027
// 메인 JavaScript
// ==========================================


// ------------------------------------------
// 여행 일정
// ------------------------------------------

const defaultSchedule = [
    {
        date: "2027/01/30",
        city: "LA",
        plan: "LA 도착 → 호텔 → Griffith Observatory",
        transport: "Uber"
    },
    {
        date: "2027/01/31",
        city: "LA",
        plan: "Santa Monica + Venice Beach",
        transport: "Metro / 버스 + Uber"
    },
    {
        date: "2027/02/01",
        city: "LA",
        plan: "Universal Studios Hollywood",
        transport: "Metro"
    },
    {
        date: "2027/02/02",
        city: "LA",
        plan: "Hollywood + Getty Center",
        transport: "Metro + Uber"
    },
    {
        date: "2027/02/03",
        city: "LA → LV",
        plan: "LA → Las Vegas / 포시즌투어 출발",
        transport: "투어 차량"
    },
    {
        date: "2027/02/04",
        city: "Las Vegas",
        plan: "Las Vegas / Grand Canyon Four Seasons Tour",
        transport: "투어 차량"
    },
    {
        date: "2027/02/05",
        city: "Grand Canyon → LA",
        plan: "Grand Canyon → Las Vegas → LA",
        transport: "포시즌투어"
    },
    {
        date: "2027/02/06",
        city: "LA → San Diego",
        plan: "San Diego 이동 → Little Italy + Harbor",
        transport: "Amtrak + Uber"
    },
    {
        date: "2027/02/07",
        city: "San Diego",
        plan: "La Jolla + 해변 관광",
        transport: "버스 / 트롤리 + Uber"
    },
    {
        date: "2027/02/08",
        city: "San Diego → LA",
        plan: "오전 San Diego 관광 → LA 이동",
        transport: "Amtrak + Uber"
    },
    {
        date: "2027/02/09",
        city: "LA",
        plan: "LA 마지막 관광 + 쇼핑 / 마트",
        transport: "Metro + Uber"
    },
    {
        date: "2027/02/10",
        city: "LA",
        plan: "호텔 → 공항 → 한국 출국",
        transport: "Uber / Lyft"
    }
];


// 저장된 일정 불러오기
let travelSchedule =
    JSON.parse(localStorage.getItem("usTripSchedule")) ||
    JSON.parse(JSON.stringify(defaultSchedule));


// ------------------------------------------
// 호텔
// ------------------------------------------

const hotels = [
    {
        region: "LA",
        name: "Best Western Plus LA Midtown Hotel",
        location: "Koreatown / Downtown LA 접근 편리",
        description: "LA 시내 관광과 이동을 고려하기 좋은 숙소 후보",
        point: "Koreatown 인근"
    },
    {
        region: "LA",
        name: "Koreatown 지역 호텔",
        location: "Los Angeles Koreatown",
        description: "한인 식당과 마트 이용이 편리한 지역",
        point: "한식 / 마트 접근성"
    },
    {
        region: "LA",
        name: "Downtown Los Angeles",
        location: "Downtown LA",
        description: "Metro 이용을 중요하게 생각한다면 고려할 만한 지역",
        point: "대중교통 접근성"
    },
    {
        region: "Las Vegas",
        name: "Las Vegas Strip",
        location: "Las Vegas Boulevard",
        description: "관광과 호텔 시설을 중심으로 선택하기 좋은 지역",
        point: "스트립 중심"
    },
    {
        region: "San Diego",
        name: "Little Italy",
        location: "Little Italy, San Diego",
        description: "식당과 관광지 접근성이 좋은 지역",
        point: "Amtrak Santa Fe Depot 접근"
    },
    {
        region: "San Diego",
        name: "Downtown San Diego",
        location: "Downtown San Diego",
        description: "대중교통과 주요 관광지 접근성을 고려할 수 있는 지역",
        point: "교통 편리"
    }
];


// ------------------------------------------
// 여행 가이드
// ------------------------------------------

const travelGuides = [

    {
        category: "LA",
        title: "LA에서 렌터카 없이 여행하기",
        text: "Metro와 버스를 기본으로 이용하고 이동이 불편한 구간은 Uber 또는 Lyft를 이용하는 방법이 편리합니다."
    },

    {
        category: "LA",
        title: "Universal Studios Hollywood",
        text: "오픈 시간에 맞춰 이동하면 주요 어트랙션을 효율적으로 이용할 수 있습니다. Harry Potter 구역도 일정에 포함할 수 있습니다."
    },

    {
        category: "LA",
        title: "Griffith Observatory",
        text: "LA 야경과 할리우드 사인을 함께 보기 좋은 대표적인 관광지입니다."
    },

    {
        category: "LA",
        title: "Santa Monica & Venice Beach",
        text: "두 지역을 하루에 묶어서 관광하기 좋습니다."
    },

    {
        category: "San Diego",
        title: "San Diego 대중교통",
        text: "Trolley와 버스를 이용할 수 있으며 관광지에 따라 Uber를 함께 이용하면 편리합니다."
    },

    {
        category: "San Diego",
        title: "La Jolla",
        text: "San Diego 여행에서 해변과 해안 풍경을 즐기기 좋은 대표적인 지역입니다."
    },

    {
        category: "Nevada",
        title: "Las Vegas 여행",
        text: "호텔이 모여 있는 Strip을 중심으로 관광하면 이동을 줄일 수 있습니다."
    },

    {
        category: "travel",
        title: "미국 여행 팁",
        text: "미국에서는 식당, 호텔 등에서 팁 문화가 일반적이므로 결제 전에 팁 정책을 확인하는 것이 좋습니다."
    },

    {
        category: "travel",
        title: "미국 여행 준비",
        text: "여권, 항공권, 여행자보험, 결제카드, eSIM 등을 출발 전에 확인하세요."
    },

    {
        category: "travel",
        title: "Uber / Lyft",
        text: "공항이나 대중교통으로 접근하기 어려운 장소를 이동할 때 활용하기 좋습니다."
    }

];


// ------------------------------------------
// 페이지 이동
// ------------------------------------------

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);

    if (target) {
        target.classList.add("active");
    }

    // 모바일 메뉴 닫기
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.remove("open");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ------------------------------------------
// 모바일 메뉴
// ------------------------------------------

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (!nav) return;

    nav.classList.toggle("open");
}


// ------------------------------------------
// 일정 렌더링
// ------------------------------------------

let editMode = false;

function renderSchedule() {

    const container = document.getElementById("scheduleContainer");

    if (!container) return;

    container.innerHTML = "";

    travelSchedule.forEach((item, index) => {

        const card = document.createElement("div");

        card.className =
            "schedule-card" +
            (editMode ? " editing" : "");

        if (editMode) {

            card.innerHTML = `
                <div class="schedule-top">

                    <input
                        class="schedule-input"
                        value="${escapeHTML(item.date)}"
                        onchange="updateSchedule(${index}, 'date', this.value)"
                    >

                    <input
                        class="schedule-input"
                        value="${escapeHTML(item.city)}"
                        onchange="updateSchedule(${index}, 'city', this.value)"
                    >

                    <input
                        class="schedule-input"
                        value="${escapeHTML(item.plan)}"
                        onchange="updateSchedule(${index}, 'plan', this.value)"
                    >

                    <input
                        class="schedule-input"
                        value="${escapeHTML(item.transport)}"
                        onchange="updateSchedule(${index}, 'transport', this.value)"
                    >

                </div>

                <div class="schedule-actions">

                    <button
                        class="save-button"
                        onclick="saveSchedule()"
                    >
                        💾 저장
                    </button>

                    <button
                        class="delete-button"
                        onclick="deleteSchedule(${index})"
                    >
                        🗑 삭제
                    </button>

                </div>
            `;

        } else {

            card.innerHTML = `
                <div class="schedule-top">

                    <div class="schedule-date">
                        ${escapeHTML(item.date)}
                    </div>

                    <div class="schedule-city">
                        ${escapeHTML(item.city)}
                    </div>

                    <div class="schedule-plan">
                        ${escapeHTML(item.plan)}
                    </div>

                    <div class="schedule-transport">
                        ${escapeHTML(item.transport)}
                    </div>

                </div>
            `;
        }

        container.appendChild(card);
    });
}


// ------------------------------------------
// 일정 수정 모드
// ------------------------------------------

function toggleEditMode() {

    editMode = !editMode;

    const notice = document.getElementById("editNotice");

    if (notice) {
        notice.classList.toggle("show", editMode);
    }

    renderSchedule();
}


// ------------------------------------------
// 일정 수정
// ------------------------------------------

function updateSchedule(index, field, value) {

    if (!travelSchedule[index]) return;

    travelSchedule[index][field] = value;
}


// ------------------------------------------
// 일정 추가
// ------------------------------------------

function addSchedule() {

    travelSchedule.push({
        date: "2027/02/11",
        city: "추가 일정",
        plan: "새로운 여행 일정을 입력하세요",
        transport: "교통수단 입력"
    });

    editMode = true;

    const notice = document.getElementById("editNotice");

    if (notice) {
        notice.classList.add("show");
    }

    renderSchedule();

    setTimeout(() => {

        const cards =
            document.querySelectorAll(".schedule-card");

        if (cards.length > 0) {

            cards[cards.length - 1].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    }, 100);
}


// ------------------------------------------
// 일정 삭제
// ------------------------------------------

function deleteSchedule(index) {

    if (!confirm("이 일정을 삭제할까요?")) {
        return;
    }

    travelSchedule.splice(index, 1);

    saveSchedule();

    renderSchedule();
}


// ------------------------------------------
// 일정 저장
// ------------------------------------------

function saveSchedule() {

    localStorage.setItem(
        "usTripSchedule",
        JSON.stringify(travelSchedule)
    );

    alert("일정이 저장되었습니다.");

    editMode = false;

    const notice = document.getElementById("editNotice");

    if (notice) {
        notice.classList.remove("show");
    }

    renderSchedule();
}


// ------------------------------------------
// 호텔 렌더링
// ------------------------------------------

function renderHotels(region = "all") {

    const container =
        document.getElementById("hotelContainer");

    if (!container) return;

    container.innerHTML = "";

    const filtered =
        region === "all"
            ? hotels
            : hotels.filter(hotel => hotel.region === region);

    filtered.forEach(hotel => {

        const card = document.createElement("div");

        card.className = "hotel-card";

        card.innerHTML = `
            <div class="hotel-region">
                ${escapeHTML(hotel.region)}
            </div>

            <h3>${escapeHTML(hotel.name)}</h3>

            <p>
                ${escapeHTML(hotel.description)}
            </p>

            <p class="hotel-location">
                📍 ${escapeHTML(hotel.location)}
            </p>

            <strong>
                ⭐ ${escapeHTML(hotel.point)}
            </strong>
        `;

        container.appendChild(card);
    });
}


// ------------------------------------------
// 호텔 필터
// ------------------------------------------

function filterHotels(region) {

    document.querySelectorAll("#hotels .filter")
        .forEach(button => {
            button.classList.remove("active");
        });

    const buttons =
        document.querySelectorAll("#hotels .filter");

    buttons.forEach(button => {

        if (
            (region === "all" && button.textContent.includes("전체")) ||
            button.textContent.includes(region)
        ) {
            button.classList.add("active");
        }
    });

    renderHotels(region);
}


// ------------------------------------------
// 여행 가이드
// ------------------------------------------

function renderGuides(list = travelGuides) {

    const container =
        document.getElementById("guideContainer");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="guide-card">
                <h3>검색 결과가 없습니다.</h3>
                <p>다른 검색어를 입력해 보세요.</p>
            </div>
        `;

        return;
    }

    list.forEach(guide => {

        const card = document.createElement("div");

        card.className = "guide-card";

        card.innerHTML = `
            <div class="guide-category">
                ${escapeHTML(guide.category)}
            </div>

            <h3>${escapeHTML(guide.title)}</h3>

            <p>${escapeHTML(guide.text)}</p>
        `;

        container.appendChild(card);
    });
}


// ------------------------------------------
// 가이드 카테고리
// ------------------------------------------

function loadGuideCategory(category) {

    document.querySelectorAll("#guide .filter")
        .forEach(button => {
            button.classList.remove("active");
        });

    const buttons =
        document.querySelectorAll("#guide .filter");

    buttons.forEach(button => {

        if (
            (category === "all" && button.textContent.includes("전체")) ||
            button.textContent.includes(category)
        ) {
            button.classList.add("active");
        }
    });

    if (category === "all") {

        renderGuides(travelGuides);

    } else {

        renderGuides(
            travelGuides.filter(
                guide => guide.category === category
            )
        );
    }

    const search =
        document.getElementById("guideSearch");

    if (search) {
        search.value = "";
    }
}


// ------------------------------------------
// 가이드 검색
// ------------------------------------------

function searchGuide() {

    const input =
        document.getElementById("guideSearch");

    if (!input) return;

    const keyword =
        input.value.trim().toLowerCase();

    if (!keyword) {

        renderGuides(travelGuides);
        return;
    }

    const result =
        travelGuides.filter(guide => {

            return (
                guide.title.toLowerCase().includes(keyword) ||
                guide.text.toLowerCase().includes(keyword) ||
                guide.category.toLowerCase().includes(keyword)
            );

        });

    renderGuides(result);
}


// ------------------------------------------
// 체크리스트
// ------------------------------------------

function loadChecklist() {

    const checks =
        document.querySelectorAll(
            "#checklist input[type='checkbox']"
        );

    checks.forEach(check => {

        const key =
            "check_" + check.dataset.check;

        check.checked =
            localStorage.getItem(key) === "true";

        check.addEventListener("change", () => {

            localStorage.setItem(
                key,
                check.checked
            );

        });

    });
}


// ------------------------------------------
// 체크리스트 초기화
// ------------------------------------------

function resetChecklist() {

    if (!confirm("체크리스트를 모두 초기화할까요?")) {
        return;
    }

    const checks =
        document.querySelectorAll(
            "#checklist input[type='checkbox']"
        );

    checks.forEach(check => {

        check.checked = false;

        localStorage.removeItem(
            "check_" + check.dataset.check
        );

    });
}


// ------------------------------------------
// HTML 안전 처리
// ------------------------------------------

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ------------------------------------------
// 시작
// ------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    renderSchedule();

    renderHotels();

    renderGuides();

    loadChecklist();

});
