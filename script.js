/* =====================================================
   2027 미국 가족여행 플래너
   로그인 없음
   브라우저 자동 저장
===================================================== */


/* =====================================================
   여행 일정
===================================================== */

const defaultTrips = [

  {
    id: "1",
    date: "2027-01-30",
    city: "LA",
    title: "LA 도착 → 호텔 → Griffith Observatory",
    details: "LA 공항 도착 후 호텔 체크인. 저녁에는 Griffith Observatory 방문.",
    transport: "Uber",
    time: ""
  },

  {
    id: "2",
    date: "2027-01-31",
    city: "LA",
    title: "Santa Monica + Venice Beach",
    details: "Santa Monica Pier와 Venice Beach 관광.",
    transport: "Metro / 버스 + Uber",
    time: ""
  },

  {
    id: "3",
    date: "2027-02-01",
    city: "LA",
    title: "Universal Studios Hollywood",
    details: "Universal Studios Hollywood 하루 관광.",
    transport: "Metro",
    time: "종일"
  },

  {
    id: "4",
    date: "2027-02-02",
    city: "LA",
    title: "Hollywood + Getty Center",
    details: "Hollywood 관광 후 Getty Center 방문.",
    transport: "Metro + Uber",
    time: ""
  },

  {
    id: "5",
    date: "2027-02-03",
    city: "LA → Las Vegas",
    title: "LA → Las Vegas 이동",
    details: "포시즌투어 차량으로 Las Vegas 이동.",
    transport: "투어 차량",
    time: "약 4~5시간"
  },

  {
    id: "6",
    date: "2027-02-04",
    city: "Las Vegas",
    title: "Las Vegas 관광",
    details: "Las Vegas Strip 중심 관광.",
    transport: "도보 / Uber",
    time: ""
  },

  {
    id: "7",
    date: "2027-02-05",
    city: "Las Vegas",
    title: "Las Vegas 자유 일정",
    details: "가족들과 원하는 장소를 자유롭게 방문.",
    transport: "Uber / 도보",
    time: ""
  },

  {
    id: "8",
    date: "2027-02-06",
    city: "Las Vegas → San Diego",
    title: "Las Vegas → San Diego 이동",
    details: "San Diego로 이동 후 호텔 체크인.",
    transport: "이동수단 결정 필요",
    time: ""
  },

  {
    id: "9",
    date: "2027-02-07",
    city: "San Diego",
    title: "San Diego 관광",
    details: "San Diego 주요 관광지 방문.",
    transport: "렌터카 / Uber",
    time: ""
  },

  {
    id: "10",
    date: "2027-02-08",
    city: "San Diego",
    title: "San Diego 자유 일정",
    details: "가족들과 원하는 관광지를 방문.",
    transport: "렌터카 / Uber",
    time: ""
  },

  {
    id: "11",
    date: "2027-02-09",
    city: "San Diego → LA",
    title: "San Diego → LA 이동",
    details: "LA로 돌아와 마지막 1박.",
    transport: "기차 / 렌터카",
    time: "약 2~3시간"
  },

  {
    id: "12",
    date: "2027-02-10",
    city: "LA",
    title: "LA 호텔 → 공항 → 한국",
    details: "호텔 체크아웃 후 공항으로 이동하여 귀국.",
    transport: "Uber / Lyft",
    time: "오전"
  }

];


/* =====================================================
   교통
===================================================== */

const defaultTransport = [

  {
    id: "t1",
    date: "2027-01-30",
    from: "LAX 공항",
    to: "LA 호텔",
    method: "Uber / Lyft",
    time: "약 30~60분",
    notes: "짐 3~4개 기준 차량 크기 확인"
  },

  {
    id: "t2",
    date: "2027-01-31",
    from: "LA",
    to: "Santa Monica / Venice Beach",
    method: "Metro + 버스 + Uber",
    time: "약 1시간 전후",
    notes: "관광지 이동에 따라 Uber 병행"
  },

  {
    id: "t3",
    date: "2027-02-01",
    from: "LA",
    to: "Universal Studios",
    method: "Metro",
    time: "약 40~60분",
    notes: "Universal City/Studio City 방향"
  },

  {
    id: "t4",
    date: "2027-02-02",
    from: "LA",
    to: "Hollywood / Getty Center",
    method: "Metro + Uber",
    time: "일정에 따라 변동",
    notes: "Getty Center는 마지막 이동수단 확인 필요"
  },

  {
    id: "t5",
    date: "2027-02-03",
    from: "LA",
    to: "Las Vegas",
    method: "포시즌투어 차량",
    time: "약 4~5시간",
    notes: "투어 출발시간 확인 필요"
  },

  {
    id: "t6",
    date: "2027-02-04",
    from: "Las Vegas 호텔",
    to: "Las Vegas Strip",
    method: "도보 / Uber",
    time: "위치에 따라 변동",
    notes: "호텔 위치에 따라 도보 이동 가능"
  },

  {
    id: "t7",
    date: "2027-02-06",
    from: "Las Vegas",
    to: "San Diego",
    method: "미정",
    time: "추후 결정",
    notes: "항공 / 렌터카 / 버스 등을 비교"
  },

  {
    id: "t8",
    date: "2027-02-09",
    from: "San Diego",
    to: "LA",
    method: "기차 / 렌터카",
    time: "약 2~3시간",
    notes: "짐 3~4개를 고려하여 결정"
  },

  {
    id: "t9",
    date: "2027-02-10",
    from: "LA 호텔",
    to: "LAX 공항",
    method: "Uber / Lyft",
    time: "약 30~60분",
    notes: "오전 비행이므로 충분한 여유시간 확보"
  }

];


/* =====================================================
   지역별 호텔 추천
===================================================== */

const defaultHotels = [

  /* LA */

  {
    id: "h1",
    city: "LA",
    name: "Best Western Plus LA Mid-Town Hotel",
    address: "603 S New Hampshire Ave, Los Angeles",
    price: "날짜 선택 후 가격 확인",
    dates: "1/30 ~ 2/3",
    link: "https://www.bestwestern.com/en-us/book/hotel/los-angeles/best-western-plus-la-mid-town-hotel/05724",
    recommended: true,
    notes: "Koreatown / Mid-Wilshire 지역. Metro 접근성이 좋아 LA 관광 거점으로 비교하기 좋은 호텔."
  },

  {
    id: "h2",
    city: "LA",
    name: "Hilton Los Angeles / Universal City",
    address: "Universal City, Los Angeles",
    price: "날짜 선택 후 가격 확인",
    dates: "1/30 ~ 2/3",
    link: "https://www.hilton.com/",
    recommended: false,
    notes: "Universal Studios 일정이 중요하다면 위치를 우선적으로 비교할 만한 후보."
  },


  /* Las Vegas */

  {
    id: "h3",
    city: "Las Vegas",
    name: "Excalibur Hotel & Casino",
    address: "Las Vegas Strip",
    price: "날짜 선택 후 가격 확인",
    dates: "2/3 ~ 2/6",
    link: "https://excalibur.mgmresorts.com/",
    recommended: true,
    notes: "Las Vegas Strip에 위치한 대표적인 호텔 후보. 가족 여행 숙소 비교용으로 넣어둠."
  },

  {
    id: "h4",
    city: "Las Vegas",
    name: "Bellagio",
    address: "Las Vegas Strip",
    price: "날짜 선택 후 가격 확인",
    dates: "2/3 ~ 2/6",
    link: "https://bellagio.mgmresorts.com/",
    recommended: false,
    notes: "Strip 중심부의 대표 호텔 후보. 위치와 가격을 Excalibur 등과 비교."
  },


  /* San Diego */

  {
    id: "h5",
    city: "San Diego",
    name: "Hilton San Diego Bayfront",
    address: "1 Park Boulevard, San Diego",
    price: "날짜 선택 후 가격 확인",
    dates: "2/6 ~ 2/9",
    link: "https://www.hilton.com/en/hotels/sancchh-hilton-san-diego-bayfront/",
    recommended: true,
    notes: "San Diego Bay waterfront. Gaslamp Quarter와 Petco Park 등이 가까운 후보."
  },

  {
    id: "h6",
    city: "San Diego",
    name: "Sheraton San Diego Resort",
    address: "San Diego Bay / Harbor Island",
    price: "날짜 선택 후 가격 확인",
    dates: "2/6 ~ 2/9",
    link: "https://www.marriott.com/en-us/hotels/sansi-sheraton-san-diego-resort/overview/",
    recommended: false,
    notes: "Harbor Island의 waterfront 호텔. 가족 여행용 후보로 비교."
  }

];


/* =====================================================
   저장된 데이터 불러오기
===================================================== */

let trips = loadData(
  "tripData",
  defaultTrips
);

let transports = loadData(
  "transportData",
  defaultTransport
);

let hotels = loadData(
  "hotelData",
  defaultHotels
);

let notes =
  localStorage.getItem("tripNotes") || "";


let editingTripId = null;

let editingTransportId = null;

let editingHotelId = null;

let currentHotelFilter = "전체";


/* =====================================================
   시작
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderTrips();

    renderTransport();

    renderHotels();

    document.getElementById("notes").value =
      notes;

  }
);


/* =====================================================
   LocalStorage
===================================================== */

function loadData(key, defaultValue) {

  try {

    const saved =
      localStorage.getItem(key);

    if (!saved) {

      return JSON.parse(
        JSON.stringify(defaultValue)
      );

    }

    return JSON.parse(saved);

  } catch (error) {

    console.error(error);

    return JSON.parse(
      JSON.stringify(defaultValue)
    );

  }

}


function saveAll() {

  localStorage.setItem(
    "tripData",
    JSON.stringify(trips)
  );

  localStorage.setItem(
    "transportData",
    JSON.stringify(transports)
  );

  localStorage.setItem(
    "hotelData",
    JSON.stringify(hotels)
  );

}


/* =====================================================
   페이지 이동
===================================================== */

function showPage(pageId, button) {

  document
    .querySelectorAll(".page")
    .forEach(function (page) {

      page.classList.remove("active");

    });


  document
    .querySelectorAll(".nav-btn")
    .forEach(function (btn) {

      btn.classList.remove("active");

    });


  document
    .getElementById(pageId)
    .classList.add("active");


  button.classList.add("active");

}


/* =====================================================
   일정 표시
===================================================== */

function renderTrips() {

  const list =
    document.getElementById("trip-list");

  list.innerHTML = "";


  trips.sort(function (a, b) {

    return new Date(a.date) -
           new Date(b.date);

  });


  trips.forEach(function (trip) {

    const date =
      new Date(trip.date + "T00:00:00");


    const dateText =
      (date.getMonth() + 1) +
      "월 " +
      date.getDate() +
      "일";


    const dayText =
      [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
      ][date.getDay()];


    const card =
      document.createElement("div");


    card.className =
      "trip-card";


    card.innerHTML = `

      <div class="trip-date">

        <div>
          ${dateText}
        </div>

        <div class="day">
          ${dayText}요일
        </div>

      </div>


      <div>

        <div class="trip-city">
          ${escapeHTML(trip.city)}
        </div>

        <div class="trip-title">
          ${escapeHTML(trip.title)}
        </div>

        <div class="trip-details">
          ${escapeHTML(trip.details || "")}
        </div>

        <div class="trip-info">

          ${trip.transport
            ? "🚗 " +
              escapeHTML(trip.transport)
            : ""}

          ${trip.time
            ? "　⏰ " +
              escapeHTML(trip.time)
            : ""}

        </div>

      </div>


      <div>

        <button
          class="edit-btn"
          onclick="editTrip('${trip.id}')"
        >
          수정
        </button>

      </div>

    `;


    list.appendChild(card);

  });

}


/* =====================================================
   일정 추가
===================================================== */

function addTrip() {

  editingTripId = null;


  document.getElementById(
    "trip-modal-title"
  ).textContent =
    "새 일정 추가";


  document.getElementById(
    "trip-date"
  ).value = "";


  document.getElementById(
    "trip-city"
  ).value = "";


  document.getElementById(
    "trip-title"
  ).value = "";


  document.getElementById(
    "trip-details"
  ).value = "";


  document.getElementById(
    "trip-transport"
  ).value = "";


  document.getElementById(
    "trip-time"
  ).value = "";


  document.getElementById(
    "trip-modal"
  ).classList.add("show");

}


/* =====================================================
   일정 수정
===================================================== */

function editTrip(id) {

  const trip =
    trips.find(function (item) {

      return item.id === id;

    });


  if (!trip) return;


  editingTripId = id;


  document.getElementById(
    "trip-modal-title"
  ).textContent =
    "일정 수정";


  document.getElementById(
    "trip-date"
  ).value =
    trip.date;


  document.getElementById(
    "trip-city"
  ).value =
    trip.city;


  document.getElementById(
    "trip-title"
  ).value =
    trip.title;


  document.getElementById(
    "trip-details"
  ).value =
    trip.details;


  document.getElementById(
    "trip-transport"
  ).value =
    trip.transport;


  document.getElementById(
    "trip-time"
  ).value =
    trip.time;


  document.getElementById(
    "trip-modal"
  ).classList.add("show");

}


/* =====================================================
   일정 저장
===================================================== */

function saveTrip() {

  const data = {

    id:
      editingTripId ||
      Date.now().toString(),

    date:
      document.getElementById(
        "trip-date"
      ).value,

    city:
      document.getElementById(
        "trip-city"
      ).value.trim(),

    title:
      document.getElementById(
        "trip-title"
      ).value.trim(),

    details:
      document.getElementById(
        "trip-details"
      ).value.trim(),

    transport:
      document.getElementById(
        "trip-transport"
      ).value.trim(),

    time:
      document.getElementById(
        "trip-time"
      ).value.trim()

  };


  if (!data.date || !data.title) {

    alert(
      "날짜와 일정을 입력해 주세요."
    );

    return;

  }


  if (editingTripId) {

    const index =
      trips.findIndex(function (item) {

        return item.id === editingTripId;

      });


    if (index !== -1) {

      trips[index] = data;

    }

  } else {

    trips.push(data);

  }


  saveAll();

  renderTrips();

  closeTripModal();

}


/* =====================================================
   일정 삭제
===================================================== */

function deleteTrip() {

  if (!editingTripId) return;


  if (!confirm(
    "이 일정을 삭제할까요?"
  )) {

    return;

  }


  trips =
    trips.filter(function (trip) {

      return trip.id !== editingTripId;

    });


  saveAll();

  renderTrips();

  closeTripModal();

}


function closeTripModal() {

  document
    .getElementById("trip-modal")
    .classList.remove("show");

}


/* =====================================================
   교통 표시
===================================================== */

function renderTransport() {

  const list =
    document.getElementById(
      "transport-list"
    );


  list.innerHTML = "";


  transports.sort(function (a, b) {

    return new Date(a.date) -
           new Date(b.date);

  });


  transports.forEach(function (item) {

    const date =
      new Date(item.date + "T00:00:00");


    const dateText =
      (date.getMonth() + 1) +
      "월 " +
      date.getDate() +
      "일";


    const card =
      document.createElement("div");


    card.className =
      "transport-card";


    card.innerHTML = `

      <div class="transport-top">

        <div class="transport-date">
          📅 ${dateText}
        </div>

        <button
          class="edit-btn"
          onclick="editTransport('${item.id}')"
        >
          수정
        </button>

      </div>


      <div class="transport-route">

        <span>
          ${escapeHTML(item.from)}
        </span>

        <span class="transport-arrow">
          →
        </span>

        <span>
          ${escapeHTML(item.to)}
        </span>

      </div>


      <span class="transport-method">
        🚗 ${escapeHTML(item.method)}
      </span>


      <div class="transport-info">

        ⏱ 예상 시간:
        ${escapeHTML(item.time)}

        <br>

        📝 ${escapeHTML(item.notes)}

      </div>

    `;


    list.appendChild(card);

  });

}


/* =====================================================
   교통 추가
===================================================== */

function addTransport() {

  editingTransportId = null;


  document.getElementById(
    "transport-modal-title"
  ).textContent =
    "새 교통 추가";


  document.getElementById(
    "transport-date"
  ).value = "";


  document.getElementById(
    "transport-from"
  ).value = "";


  document.getElementById(
    "transport-to"
  ).value = "";


  document.getElementById(
    "transport-method"
  ).value = "";


  document.getElementById(
    "transport-time"
  ).value = "";


  document.getElementById(
    "transport-notes"
  ).value = "";


  document.getElementById(
    "transport-modal"
  ).classList.add("show");

}


/* =====================================================
   교통 수정
===================================================== */

function editTransport(id) {

  const item =
    transports.find(function (transport) {

      return transport.id === id;

    });


  if (!item) return;


  editingTransportId = id;


  document.getElementById(
    "transport-modal-title"
  ).textContent =
    "교통 수정";


  document.getElementById(
    "transport-date"
  ).value =
    item.date;


  document.getElementById(
    "transport-from"
  ).value =
    item.from;


  document.getElementById(
    "transport-to"
  ).value =
    item.to;


  document.getElementById(
    "transport-method"
  ).value =
    item.method;


  document.getElementById(
    "transport-time"
  ).value =
    item.time;


  document.getElementById(
    "transport-notes"
  ).value =
    item.notes;


  document.getElementById(
    "transport-modal"
  ).classList.add("show");

}


/* =====================================================
   교통 저장
===================================================== */

function saveTransport() {

  const data = {

    id:
      editingTransportId ||
      "transport-" + Date.now(),

    date:
      document.getElementById(
        "transport-date"
      ).value,

    from:
      document.getElementById(
        "transport-from"
      ).value.trim(),

    to:
      document.getElementById(
        "transport-to"
      ).value.trim(),

    method:
      document.getElementById(
        "transport-method"
      ).value.trim(),

    time:
      document.getElementById(
        "transport-time"
      ).value.trim(),

    notes:
      document.getElementById(
        "transport-notes"
      ).value.trim()

  };


  if (
    !data.date ||
    !data.from ||
    !data.to ||
    !data.method
  ) {

    alert(
      "날짜, 출발지, 도착지, 교통수단을 입력해 주세요."
    );

    return;

  }


  if (editingTransportId) {

    const index =
      transports.findIndex(function (item) {

        return item.id === editingTransportId;

      });


    if (index !== -1) {

      transports[index] = data;

    }

  } else {

    transports.push(data);

  }


  saveAll();

  renderTransport();

  closeTransportModal();

}


/* =====================================================
   교통 삭제
===================================================== */

function deleteTransport() {

  if (!editingTransportId) return;


  if (!confirm(
    "이 교통 정보를 삭제할까요?"
  )) {

    return;

  }


  transports =
    transports.filter(function (item) {

      return item.id !== editingTransportId;

    });


  saveAll();

  renderTransport();

  closeTransportModal();

}


function closeTransportModal() {

  document
    .getElementById(
      "transport-modal"
    )
    .classList.remove("show");

}


/* =====================================================
   호텔 필터
===================================================== */

function filterHotels(city, button) {

  currentHotelFilter = city;


  document
    .querySelectorAll(".city-btn")
    .forEach(function (btn) {

      btn.classList.remove("active");

    });


  button.classList.add("active");


  renderHotels();

}


/* =====================================================
   호텔 표시
===================================================== */

function renderHotels() {

  const list =
    document.getElementById(
      "hotel-list"
    );


  list.innerHTML = "";


  const filtered =
    hotels.filter(function (hotel) {

      return (
        currentHotelFilter === "전체" ||
        hotel.city === currentHotelFilter
      );

    });


  filtered.forEach(function (hotel) {

    const card =
      document.createElement("div");


    card.className =
      "hotel-card";


    const recommended =
      hotel.recommended
        ? `<div class="hotel-recommended">
             ⭐ 추천 후보
           </div>`
        : "";


    const link =
      hotel.link
        ? `
          <a
            class="hotel-link"
            href="${escapeAttribute(hotel.link)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 호텔 공식 사이트
          </a>
        `
        : "";


    card.innerHTML = `

      ${recommended}

      <div class="hotel-city">
        ${escapeHTML(hotel.city)}
      </div>


      <div class="hotel-name">
        ${escapeHTML(hotel.name)}
      </div>


      <div class="hotel-info">

        📍 ${escapeHTML(hotel.address)}

        <br>

        💰 ${escapeHTML(hotel.price)}

        <br>

        📅 ${escapeHTML(hotel.dates)}

      </div>


      <div class="hotel-reason">

        💡
        ${escapeHTML(hotel.notes)}

      </div>


      ${link}


      <div class="hotel-actions">

        <button
          class="edit-btn"
          onclick="editHotel('${hotel.id}')"
        >
          수정
        </button>

      </div>

    `;


    list.appendChild(card);

  });


  if (filtered.length === 0) {

    list.innerHTML = `
      <div class="hotel-card">
        이 지역에 등록된 호텔이 없습니다.
      </div>
    `;

  }

}


/* =====================================================
   호텔 추가
===================================================== */

function addHotel() {

  editingHotelId = null;


  document.getElementById(
    "hotel-modal-title"
  ).textContent =
    "새 호텔 추가";


  document.getElementById(
    "hotel-city"
  ).value = "";


  document.getElementById(
    "hotel-name"
  ).value = "";


  document.getElementById(
    "hotel-address"
  ).value = "";


  document.getElementById(
    "hotel-price"
  ).value = "";


  document.getElementById(
    "hotel-dates"
  ).value = "";


  document.getElementById(
    "hotel-link"
  ).value = "";


  document.getElementById(
    "hotel-notes"
  ).value = "";


  document.getElementById(
    "hotel-modal"
  ).classList.add("show");

}


/* =====================================================
   호텔 수정
===================================================== */

function editHotel(id) {

  const hotel =
    hotels.find(function (item) {

      return item.id === id;

    });


  if (!hotel) return;


  editingHotelId = id;


  document.getElementById(
    "hotel-modal-title"
  ).textContent =
    "호텔 수정";


  document.getElementById(
    "hotel-city"
  ).value =
    hotel.city;


  document.getElementById(
    "hotel-name"
  ).value =
    hotel.name;


  document.getElementById(
    "hotel-address"
  ).value =
    hotel.address;


  document.getElementById(
    "hotel-price"
  ).value =
    hotel.price;


  document.getElementById(
    "hotel-dates"
  ).value =
    hotel.dates;


  document.getElementById(
    "hotel-link"
  ).value =
    hotel.link;


  document.getElementById(
    "hotel-notes"
  ).value =
    hotel.notes;


  document.getElementById(
    "hotel-modal"
  ).classList.add("show");

}


/* =====================================================
   호텔 저장
===================================================== */

function saveHotel() {

  const data = {

    id:
      editingHotelId ||
      "hotel-" + Date.now(),

    city:
      document.getElementById(
        "hotel-city"
      ).value.trim(),

    name:
      document.getElementById(
        "hotel-name"
      ).value.trim(),

    address:
      document.getElementById(
        "hotel-address"
      ).value.trim(),

    price:
      document.getElementById(
        "hotel-price"
      ).value.trim(),

    dates:
      document.getElementById(
        "hotel-dates"
      ).value.trim(),

    link:
      document.getElementById(
        "hotel-link"
      ).value.trim(),

    recommended:
      false,

    notes:
      document.getElementById(
        "hotel-notes"
      ).value.trim()

  };


  if (!data.name) {

    alert(
      "호텔 이름을 입력해 주세요."
    );

    return;

  }


  if (editingHotelId) {

    const index =
      hotels.findIndex(function (item) {

        return item.id === editingHotelId;

      });


    if (index !== -1) {

      hotels[index] = data;

    }

  } else {

    hotels.push(data);

  }


  saveAll();

  renderHotels();

  closeHotelModal();

}


/* =====================================================
   호텔 삭제
===================================================== */

function deleteHotel() {

  if (!editingHotelId) return;


  if (!confirm(
    "이 호텔을 삭제할까요?"
  )) {

    return;

  }


  hotels =
    hotels.filter(function (hotel) {

      return hotel.id !== editingHotelId;

    });


  saveAll();

  renderHotels();

  closeHotelModal();

}


function closeHotelModal() {

  document
    .getElementById(
      "hotel-modal"
    )
    .classList.remove("show");

}


/* =====================================================
   메모
===================================================== */

function saveNotes() {

  notes =
    document.getElementById(
      "notes"
    ).value;


  localStorage.setItem(
    "tripNotes",
    notes
  );

}


/* =====================================================
   보안용 HTML 처리
===================================================== */

function escapeHTML(value) {

  if (
    value === null ||
    value === undefined
  ) {

    return "";

  }


  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


function escapeAttribute(value) {

  return escapeHTML(value);

}


/* =====================================================
   모달 바깥 클릭
===================================================== */

window.addEventListener(
  "click",
  function (event) {

    const tripModal =
      document.getElementById(
        "trip-modal"
      );


    const transportModal =
      document.getElementById(
        "transport-modal"
      );


    const hotelModal =
      document.getElementById(
        "hotel-modal"
      );


    if (
      event.target === tripModal
    ) {

      closeTripModal();

    }


    if (
      event.target === transportModal
    ) {

      closeTransportModal();

    }


    if (
      event.target === hotelModal
    ) {

      closeHotelModal();

    }

  }
);
