/* =========================================
   2027 USA FAMILY TRIP
   JavaScript
========================================= */


/* =========================================
   여행 일정
========================================= */

const travelSchedule = [

  {
    date: "1/30",
    day: "토요일",
    location: "Los Angeles",
    title: "LA 도착",
    description:
      "LA 도착 → 호텔 체크인 → Griffith Observatory",
    transport: "Uber"
  },

  {
    date: "1/31",
    day: "일요일",
    location: "Los Angeles",
    title: "Santa Monica + Venice Beach",
    description:
      "Santa Monica와 Venice Beach 관광",
    transport: "Metro / Bus + Uber"
  },

  {
    date: "2/1",
    day: "월요일",
    location: "Los Angeles",
    title: "Universal Studios Hollywood",
    description:
      "Universal Studios Hollywood 하루 관광",
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
    transport: "포시즌투어"
  },

  {
    date: "2/4",
    day: "목요일",
    location: "Las Vegas / Grand Canyon",
    title: "Grand Canyon",
    description:
      "포시즌투어를 이용하여 Grand Canyon 관광",
    transport: "포시즌투어"
  },

  {
    date: "2/5",
    day: "금요일",
    location: "Grand Canyon → Las Vegas → LA",
    title: "LA 복귀",
    description:
      "Grand Canyon 관광 후 Las Vegas를 거쳐 LA 도착",
    transport: "포시즌투어"
  },

  {
    date: "2/6",
    day: "토요일",
    location: "LA → San Diego",
    title: "San Diego 이동",
    description:
      "San Diego 이동 → Little Italy / 항구",
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
    title: "LA 복귀",
    description:
      "오전/낮 San Diego 관광 후 LA 이동",
    transport: "Amtrak + Uber"
  },

  {
    date: "2/9",
    day: "화요일",
    location: "Los Angeles",
    title: "LA 마지막 관광 + 쇼핑",
    description:
      "마지막 LA 관광 → 쇼핑 / 마트",
    transport: "Metro + Uber"
  },

  {
    date: "2/10",
    day: "수요일",
    location: "Los Angeles → LAX",
    title: "한국 출국",
    description:
      "호텔 → LAX → 한국행 비행기",
    transport: "Uber / Lyft"
  }

];


/* =========================================
   호텔 데이터
========================================= */

const hotels = [

  /* =====================
     LA
  ===================== */

  {
    city: "la",
    cityName: "Los Angeles",

    name: "Ramada by Wyndham LA/Koreatown West",

    location: "Koreatown",

    icon: "🇺🇸",

    description:
      "LA 한인타운 주변에서 숙박을 찾을 때 고려할 수 있는 호텔 후보입니다.",

    features: [
      "한인타운",
      "식당 접근",
      "가족여행",
      "LA 관광"
    ],

    note:
      "한인타운 중심 숙박을 원한다면 위치를 우선적으로 비교해보세요."
  },


  {
    city: "la",
    cityName: "Los Angeles",

    name: "Garden Suite Hotel",

    location: "Koreatown",

    icon: "🏨",

    description:
      "한인타운과 LA 도심 관광을 함께 고려할 수 있는 숙박 후보입니다.",

    features: [
      "Koreatown",
      "식당",
      "마트 접근",
      "가족여행"
    ],

    note:
      "4인 가족 객실 조건과 주차비를 예약 전에 확인하세요."
  },


  {
    city: "la",
    cityName: "Los Angeles",

    name: "Hotel Normandie LA",

    location: "Koreatown",

    icon: "🏨",

    description:
      "Koreatown에서 관광과 식사를 함께 고려할 수 있는 숙소 후보입니다.",

    features: [
      "Koreatown",
      "Metro 접근",
      "관광 편리",
      "도심"
    ],

    note:
      "Metro 이용 계획이 있다면 역까지의 실제 도보거리를 확인하세요."
  },


  {
    city: "la",
    cityName: "Los Angeles",

    name: "Loews Hollywood Hotel",

    location: "Hollywood",

    icon: "🎬",

    description:
      "Hollywood 관광을 중심으로 숙소를 잡을 때 고려할 수 있는 호텔입니다.",

    features: [
      "Hollywood",
      "관광지 접근",
      "가족여행",
      "Metro"
    ],

    note:
      "Hollywood 관광 비중이 높다면 위치상 편리할 수 있습니다."
  },


  {
    city: "la",
    cityName: "Los Angeles",

    name: "Hilton Los Angeles/Universal City",

    location: "Universal City",

    icon: "🎢",

    description:
      "Universal Studios 방문일 숙박 후보로 고려할 수 있는 호텔입니다.",

    features: [
      "Universal",
      "테마파크",
      "가족여행",
      "Metro"
    ],

    note:
      "2/1 Universal Studios 일정과 함께 비교해보세요."
  },


  /* =====================
     LAS VEGAS
  ===================== */

  {
    city: "lasvegas",
    cityName: "Las Vegas",

    name: "Four Seasons Hotel Las Vegas",

    location: "Las Vegas Strip",

    icon: "🎰",

    description:
      "가족여행에서 조용한 숙박환경을 우선할 때 비교할 수 있는 후보입니다.",

    features: [
      "가족여행",
      "Non-Gaming",
      "Strip",
      "고급호텔"
    ],

    note:
      "Grand Canyon 투어 픽업 위치와 시간을 반드시 확인하세요."
  },


  {
    city: "lasvegas",
    cityName: "Las Vegas",

    name: "Vdara Hotel & Spa",

    location: "Las Vegas Strip",

    icon: "🏨",

    description:
      "Las Vegas Strip 중심에서 숙박을 고려할 때 비교할 수 있는 후보입니다.",

    features: [
      "Non-Gaming",
      "Strip",
      "가족여행",
      "Suite"
    ],

    note:
      "객실 크기와 가족 4명 숙박 조건을 비교해보세요."
  },


  /* =====================
     GRAND CANYON
  ===================== */

  {
    city: "grandcanyon",
    cityName: "Grand Canyon",

    name: "The Squire at Grand Canyon",

    location: "Tusayan",

    icon: "🏜️",

    description:
      "Grand Canyon South Rim 접근을 고려할 때 비교할 수 있는 Tusayan 지역 숙소입니다.",

    features: [
      "Tusayan",
      "South Rim",
      "가족여행",
      "관광"
    ],

    note:
      "포시즌투어에서 숙박을 포함하는지 먼저 확인하세요."
  },


  {
    city: "grandcanyon",
    cityName: "Grand Canyon",

    name: "Grand Canyon Plaza Hotel",

    location: "Tusayan",

    icon: "🏜️",

    description:
      "Grand Canyon South Rim 관광을 위한 Tusayan 숙소 후보입니다.",

    features: [
      "Tusayan",
      "South Rim",
      "가족여행"
    ],

    note:
      "투어 일정과 숙박 필요 여부를 먼저 확인하세요."
  },


  {
    city: "grandcanyon",
    cityName: "Grand Canyon",

    name: "Holiday Inn Express & Suites Grand Canyon",

    location: "Tusayan",

    icon: "🏨",

    description:
      "Grand Canyon 관광을 위해 Tusayan 지역에서 비교할 수 있는 호텔 후보입니다.",

    features: [
      "Tusayan",
      "조식",
      "가족여행",
      "South Rim"
    ],

    note:
      "겨울철 도로 상황과 투어 픽업 여부를 확인하세요."
  },


  /* =====================
     SAN DIEGO
  ===================== */

  {
    city: "sandiego",
    cityName: "San Diego",

    name: "Courtyard San Diego Downtown / Little Italy",

    location: "Little Italy",

    icon: "🌴",

    description:
      "Little Italy와 Downtown 관광을 중심으로 숙박할 때 비교할 수 있는 후보입니다.",

    features: [
      "Little Italy",
      "Downtown",
      "가족여행",
      "관광"
    ],

    note:
      "2/6 Little Italy 관광 일정과 연결하기 좋습니다."
  },


  {
    city: "sandiego",
    cityName: "San Diego",

    name: "La Pensione Hotel",

    location: "Little Italy",

    icon: "🌴",

    description:
      "San Diego Little Italy에서 숙박을 찾을 때 고려할 수 있는 호텔 후보입니다.",

    features: [
      "Little Italy",
      "식당",
      "Downtown",
      "도보관광"
    ],

    note:
      "4인 가족 객실 형태와 침대 구성을 확인하세요."
  },


  {
    city: "sandiego",
    cityName: "San Diego",

    name: "Hampton Inn San Diego Downtown",

    location: "Downtown",

    icon: "🏨",

    description:
      "Downtown 관광과 가족 숙박을 함께 고려할 수 있는 호텔 후보입니다.",

    features: [
      "Downtown",
      "조식",
      "가족여행",
      "관광"
    ],

    note:
      "Little Italy와 Amtrak역까지의 이동방법을 비교해보세요."
  },


  {
    city: "sandiego",
    cityName: "San Diego",

    name: "La Jolla Cove Hotel & Suites",

    location: "La Jolla",

    icon: "🌊",

    description:
      "2/7 La Jolla와 해변 관광을 중심으로 숙소를 잡을 때 비교할 수 있는 후보입니다.",

    features: [
      "La Jolla",
      "해변",
      "관광",
      "가족여행"
    ],

    note:
      "La Jolla 관광을 가장 중요하게 생각한다면 위치를 비교해보세요."
  }

];


/* =========================================
   일정 화면
========================================= */

const scheduleList =
  document.getElementById("scheduleList");


function renderSchedule() {

  scheduleList.innerHTML = "";

  travelSchedule.forEach(item => {

    const card =
      document.createElement("article");

    card.className = "schedule-card";

    card.innerHTML = `

      <div class="schedule-date">

        <div class="date">
          ${item.date}
        </div>

        <div class="day">
          ${item.day}
        </div>

      </div>


      <div class="schedule-info">

        <div class="location-tag">
          📍 ${item.location}
        </div>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

      </div>


      <div class="transport-tag">
        🚗 ${item.transport}
      </div>

    `;

    scheduleList.appendChild(card);

  });

}


/* =========================================
   호텔 화면
========================================= */

const hotelList =
  document.getElementById("hotelList");


function renderHotels(city = "all") {

  hotelList.innerHTML = "";

  const filteredHotels =
    city === "all"
      ? hotels
      : hotels.filter(
          hotel => hotel.city === city
        );


  filteredHotels.forEach(hotel => {

    const card =
      document.createElement("article");

    card.className = "hotel-card";

    card.innerHTML = `

      <div class="hotel-top">

        <span class="hotel-icon">
          ${hotel.icon}
        </span>

        <span class="hotel-city">
          ${hotel.cityName}
        </span>

      </div>


      <h3>
        ${hotel.name}
      </h3>


      <p class="hotel-location">
        📍 ${hotel.location}
      </p>


      <p class="hotel-description">
        ${hotel.description}
      </p>


      <div class="hotel-features">

        ${hotel.features
          .map(
            feature =>
              `<span class="hotel-feature">
                ${feature}
              </span>`
          )
          .join("")}

      </div>


      <div class="hotel-note">
        💡 ${hotel.note}
      </div>

    `;

    hotelList.appendChild(card);

  });

}


/* =========================================
   호텔 필터
========================================= */

const hotelFilterButtons =
  document.querySelectorAll(
    ".hotel-filter-btn"
  );


hotelFilterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      hotelFilterButtons.forEach(btn => {

        btn.classList.remove("active");

      });


      button.classList.add("active");


      renderHotels(
        button.dataset.city
      );

    }
  );

});


/* =========================================
   메인 메뉴
========================================= */

const navButtons =
  document.querySelectorAll(".nav-btn");


const sections =
  document.querySelectorAll(".page-section");


navButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const target =
        button.dataset.target;


      navButtons.forEach(btn => {

        btn.classList.remove("active");

      });


      sections.forEach(section => {

        section.classList.remove(
          "active-section"
        );

      });


      button.classList.add("active");


      const targetSection =
        document.getElementById(target);


      if (targetSection) {

        targetSection.classList.add(
          "active-section"
        );

      }


      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

});


/* =========================================
   호텔 메모
========================================= */

const hotelMemo =
  document.getElementById("hotelMemo");


const savedHotelMemo =
  localStorage.getItem("hotelMemo");


if (savedHotelMemo) {

  hotelMemo.value =
    savedHotelMemo;

}


document
  .getElementById("saveHotelMemo")
  .addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "hotelMemo",
        hotelMemo.value
      );

      alert(
        "호텔 메모가 저장되었습니다."
      );

    }
  );


/* =========================================
   여행 메모
========================================= */

const tripMemo =
  document.getElementById("tripMemo");


const savedTripMemo =
  localStorage.getItem("tripMemo");


if (savedTripMemo) {

  tripMemo.value =
    savedTripMemo;

}


document
  .getElementById("saveMemo")
  .addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "tripMemo",
        tripMemo.value
      );

      alert(
        "여행 메모가 저장되었습니다."
      );

    }
  );


/* =========================================
   체크리스트 저장
========================================= */

const checklist =
  document.querySelectorAll(
    '.checklist input[type="checkbox"]'
  );


checklist.forEach(
  (input, index) => {

    const saved =
      localStorage.getItem(
        `tripCheck_${index}`
      );


    input.checked =
      saved === "true";


    input.addEventListener(
      "change",
      () => {

        localStorage.setItem(
          `tripCheck_${index}`,
          input.checked
        );

      }
    );

  }
);


/* =========================================
   초기 실행
========================================= */

renderSchedule();

renderHotels("all");
