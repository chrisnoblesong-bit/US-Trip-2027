
/* =========================================
   2027 USA FAMILY TRIP
   Main JavaScript
========================================= */


/* =========================================
   여행 일정 데이터
========================================= */

const travelSchedule = [
  {
    date: "1/30",
    day: "토요일",
    location: "Los Angeles",
    title: "LA 도착",
    description:
      "LA 도착 → 호텔 체크인 → Griffith Observatory 방문",
    transport: "Uber"
  },

  {
    date: "1/31",
    day: "일요일",
    location: "Los Angeles",
    title: "Santa Monica + Venice Beach",
    description:
      "Santa Monica 해변과 Venice Beach 관광",
    transport: "Metro / Bus + Uber"
  },

  {
    date: "2/1",
    day: "월요일",
    location: "Los Angeles",
    title: "Universal Studios Hollywood",
    description:
      "Universal Studios Hollywood 하루 종일 관광",
    transport: "Metro"
  },

  {
    date: "2/2",
    day: "화요일",
    location: "Los Angeles",
    title: "Hollywood + Getty Center",
    description:
      "Hollywood 관광 후 Getty Center 방문",
    transport: "Metro + Uber"
  },

  {
    date: "2/3",
    day: "수요일",
    location: "LA → Las Vegas",
    title: "Las Vegas 이동",
    description:
      "포시즌투어 출발 → Las Vegas 이동",
    transport: "포시즌투어 차량"
  },

  {
    date: "2/4",
    day: "목요일",
    location: "Las Vegas / Grand Canyon",
    title: "Grand Canyon 투어",
    description:
      "포시즌투어를 이용하여 Grand Canyon 관광",
    transport: "포시즌투어"
  },

  {
    date: "2/5",
    day: "금요일",
    location: "Grand Canyon → Las Vegas → LA",
    title: "투어 종료 및 LA 복귀",
    description:
      "Grand Canyon 관광 후 Las Vegas를 거쳐 LA 도착",
    transport: "포시즌투어 차량"
  },

  {
    date: "2/6",
    day: "토요일",
    location: "LA → San Diego",
    title: "San Diego 이동",
    description:
      "LA에서 San Diego 이동 → Little Italy / 항구 관광",
    transport: "Uber + Amtrak"
  },

  {
    date: "2/7",
    day: "일요일",
    location: "San Diego",
    title: "La Jolla + 해변",
    description:
      "La Jolla와 San Diego 해변 관광",
    transport: "Bus / Trolley + Uber"
  },

  {
    date: "2/8",
    day: "월요일",
    location: "San Diego → LA",
    title: "San Diego 관광 후 LA 복귀",
    description:
      "오전/낮 San Diego 관광 → LA 이동 → 숙소 체크인",
    transport: "Amtrak + Uber"
  },

  {
    date: "2/9",
    day: "화요일",
    location: "Los Angeles",
    title: "LA 마지막 관광 + 쇼핑",
    description:
      "LA 마지막 관광 → 쇼핑 / 마트 → 마지막 LA 숙박",
    transport: "Metro + Uber"
  },

  {
    date: "2/10",
    day: "수요일",
    location: "Los Angeles → LAX",
    title: "한국 출국",
    description:
      "호텔 체크아웃 → LAX 이동 → 한국행 비행기 탑승",
    transport: "Uber / Lyft"
  }
];


/* =========================================
   일정 화면 생성
========================================= */

const scheduleList =
  document.getElementById("scheduleList");

function renderSchedule() {

  scheduleList.innerHTML = "";

  travelSchedule.forEach((item) => {

    const card = document.createElement("article");

    card.className = "schedule-card";

    card.innerHTML = `
      <div class="schedule-date">
        <div class="date">${item.date}</div>
        <div class="day">${item.day}</div>
      </div>

      <div class="schedule-info">

        <div class="location-tag">
          📍 ${item.location}
        </div>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

      </div>

      <div class="transport-tag">
        🚗 ${item.transport}
      </div>
    `;

    scheduleList.appendChild(card);
  });
}


/* =========================================
   메뉴 전환
========================================= */

const navButtons =
  document.querySelectorAll(".nav-btn");

const sections =
  document.querySelectorAll(".page-section");


navButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const target =
      button.dataset.target;

    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    sections.forEach((section) => {
      section.classList.remove("active-section");
    });

    button.classList.add("active");

    const targetSection =
      document.getElementById(target);

    if (targetSection) {
      targetSection.classList.add("active-section");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


/* =========================================
   호텔 메모 저장
========================================= */

const laHotel =
  document.getElementById("laHotel");

const laHotelMemo =
  document.getElementById("laHotelMemo");

const transportHotel =
  document.getElementById("transportHotel");

const transportHotelMemo =
  document.getElementById("transportHotelMemo");


function loadHotelData() {

  const savedLaHotel =
    localStorage.getItem("laHotel");

  const savedLaHotelMemo =
    localStorage.getItem("laHotelMemo");

  const savedTransportHotel =
    localStorage.getItem("transportHotel");

  const savedTransportHotelMemo =
    localStorage.getItem("transportHotelMemo");


  if (savedLaHotel) {
    laHotel.value = savedLaHotel;
  }

  if (savedLaHotelMemo) {
    laHotelMemo.value = savedLaHotelMemo;
  }

  if (savedTransportHotel) {
    transportHotel.value =
      savedTransportHotel;
  }

  if (savedTransportHotelMemo) {
    transportHotelMemo.value =
      savedTransportHotelMemo;
  }

}


document
  .getElementById("saveHotel")
  .addEventListener("click", () => {

    localStorage.setItem(
      "laHotel",
      laHotel.value
    );

    localStorage.setItem(
      "laHotelMemo",
      laHotelMemo.value
    );

    alert("LA 호텔 정보가 저장되었습니다.");

  });


document
  .getElementById("saveTransportHotel")
  .addEventListener("click", () => {

    localStorage.setItem(
      "transportHotel",
      transportHotel.value
    );

    localStorage.setItem(
      "transportHotelMemo",
      transportHotelMemo.value
    );

    alert("교통 편리 호텔 정보가 저장되었습니다.");

  });


/* =========================================
   여행 메모
========================================= */

const tripMemo =
  document.getElementById("tripMemo");


function loadTripMemo() {

  const savedMemo =
    localStorage.getItem("tripMemo");

  if (savedMemo) {
    tripMemo.value = savedMemo;
  }

}


document
  .getElementById("saveMemo")
  .addEventListener("click", () => {

    localStorage.setItem(
      "tripMemo",
      tripMemo.value
    );

    alert("여행 메모가 저장되었습니다.");

  });


/* =========================================
   체크리스트 저장
========================================= */

const checklistInputs =
  document.querySelectorAll(
    '.checklist input[type="checkbox"]'
  );


function loadChecklist() {

  checklistInputs.forEach((input, index) => {

    const saved =
      localStorage.getItem(
        `tripCheck_${index}`
      );

    input.checked = saved === "true";

  });

}


checklistInputs.forEach((input, index) => {

  input.addEventListener("change", () => {

    localStorage.setItem(
      `tripCheck_${index}`,
      input.checked
    );

  });

});


/* =========================================
   초기 실행
========================================= */

renderSchedule();

loadHotelData();

loadTripMemo();

loadChecklist();
