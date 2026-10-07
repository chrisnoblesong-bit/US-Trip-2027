/* ==================================================
   2027 미국 가족여행 플래너
   로그인 없음
   브라우저 자동 저장
================================================== */


/* ==================================================
   기본 일정
================================================== */

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
    details: "Universal Studios Hollywood 하루 관광. Wizarding World of Harry Potter 방문.",
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
    details: "포시즌투어 차량을 이용하여 Las Vegas 이동.",
    transport: "투어 차량",
    time: ""
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
    time: ""
  },

  {
    id: "12",
    date: "2027-02-10",
    city: "LA",
    title: "LA 공항 → 한국",
    details: "호텔 체크아웃 후 공항으로 이동하여 귀국.",
    transport: "Uber / Lyft",
    time: "오전"
  }
];


/* ==================================================
   기본 호텔
================================================== */

const defaultHotels = [
  {
    id: "hotel1",
    city: "Los Angeles",
    name: "LA 한인타운 주변 호텔",
    address: "Koreatown, Los Angeles",
    price: "",
    dates: "1/30 ~ 2/3",
    link: "",
    notes: "공항 및 관광지 이동이 편리한 곳을 우선적으로 비교"
  },

  {
    id: "hotel2",
    city: "Las Vegas",
    name: "Las Vegas Strip 호텔",
    address: "Las Vegas Strip",
    price: "",
    dates: "2/3 ~ 2/6",
    link: "",
    notes: "Strip 중심부의 교통과 관광 편의성을 우선 비교"
  },

  {
    id: "hotel3",
    city: "San Diego",
    name: "San Diego 호텔",
    address: "San Diego",
    price: "",
    dates: "2/6 ~ 2/9",
    link: "",
    notes: "관광지 이동이 편리한 지역 우선"
  },

  {
    id: "hotel4",
    city: "Los Angeles",
    name: "LA 마지막 1박",
    address: "Los Angeles",
    price: "",
    dates: "2/9 ~ 2/10",
    link: "",
    notes: "2월 10일 공항 이동이 편한 위치 추천"
  }
];


/* ==================================================
   데이터
================================================== */

let trips = load("tripData", defaultTrips);
let hotels = load("hotelData", defaultHotels);
let notes = localStorage.getItem("tripNotes") || "";

let editingTripId = null;
let editingHotelId = null;


/* ==================================================
   시작
================================================== */

document.addEventListener("DOMContentLoaded", function () {

  renderTrips();
  renderHotels();

  document.getElementById("notes").value = notes;

});


/* ==================================================
   LocalStorage
================================================== */

function load(key, defaultValue) {

  try {

    const saved = localStorage.getItem(key);

    if (!saved) {
      return JSON.parse(JSON.stringify(defaultValue));
    }

    return JSON.parse(saved);

  } catch (error) {

    console.error(error);

    return JSON.parse(JSON.stringify(defaultValue));

  }
}


function saveData() {

  localStorage.setItem(
    "tripData",
    JSON.stringify(trips)
  );

  localStorage.setItem(
    "hotelData",
    JSON.stringify(hotels)
  );

}


/* ==================================================
   페이지 이동
================================================== */

function showPage(pageId, button) {

  document.querySelectorAll(".page").forEach(function (page) {
    page.classList.remove("active");
  });

  document.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  button.classList.add("active");

}


/* ==================================================
   일정 표시
================================================== */

function renderTrips() {

  const list = document.getElementById("trip-list");

  list.innerHTML = "";

  trips.sort(function (a, b) {

    return new Date(a.date) - new Date(b.date);

  });


  if (trips.length === 0) {

    list.innerHTML = `
      <div class="hotel-card">
        등록된 일정이 없습니다.
      </div>
    `;

    return;
  }


  trips.forEach(function (trip) {

    const date = new Date(trip.date + "T00:00:00");

    const dateText =
      date.getMonth() + 1 +
      "월 " +
      date.getDate() +
      "일";


    const dayText =
      ["일", "월", "화", "수", "목", "금", "토"]
      [date.getDay()];


    const card = document.createElement("div");

    card.className = "trip-card";


    card.innerHTML = `

      <div class="trip-date">

        <div>${dateText}</div>

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
            ? "🚗 " + escapeHTML(trip.transport)
            : ""}

          ${trip.time
            ? "　⏰ " + escapeHTML(trip.time)
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


/* ==================================================
   일정 추가
================================================== */

function addTrip() {

  editingTripId = null;

  document.getElementById("trip-modal-title").textContent =
    "새 일정 추가";


  document.getElementById("trip-date").value = "";
  document.getElementById("trip-city").value = "";
  document.getElementById("trip-title").value = "";
  document.getElementById("trip-details").value = "";
  document.getElementById("trip-transport").value = "";
  document.getElementById("trip-time").value = "";


  document.getElementById("trip-modal").classList.add("show");

}


/* ==================================================
   일정 수정
================================================== */

function editTrip(id) {

  const trip = trips.find(function (item) {

    return item.id === id;

  });


  if (!trip) return;


  editingTripId = id;


  document.getElementById("trip-modal-title").textContent =
    "일정 수정";


  document.getElementById("trip-date").value =
    trip.date;

  document.getElementById("trip-city").value =
    trip.city;

  document.getElementById("trip-title").value =
    trip.title;

  document.getElementById("trip-details").value =
    trip.details;

  document.getElementById("trip-transport").value =
    trip.transport;

  document.getElementById("trip-time").value =
    trip.time;


  document.getElementById("trip-modal").classList.add("show");

}


/* ==================================================
   일정 저장
================================================== */

function saveTrip() {

  const data = {

    id:
      editingTripId ||
      Date.now().toString(),

    date:
      document.getElementById("trip-date").value,

    city:
      document.getElementById("trip-city").value.trim(),

    title:
      document.getElementById("trip-title").value.trim(),

    details:
      document.getElementById("trip-details").value.trim(),

    transport:
      document.getElementById("trip-transport").value.trim(),

    time:
      document.getElementById("trip-time").value.trim()

  };


  if (!data.date || !data.title) {

    alert("날짜와 일정을 입력해 주세요.");

    return;

  }


  if (editingTripId) {

    const index = trips.findIndex(function (item) {

      return item.id === editingTripId;

    });


    if (index !== -1) {

      trips[index] = data;

    }

  } else {

    trips.push(data);

  }


  saveData();

  renderTrips();

  closeTripModal();

}


/* ==================================================
   일정 삭제
================================================== */

function deleteTrip() {

  if (!editingTripId) return;


  if (!confirm("이 일정을 삭제할까요?")) {

    return;

  }


  trips = trips.filter(function (trip) {

    return trip.id !== editingTripId;

  });


  saveData();

  renderTrips();

  closeTripModal();

}


/* ==================================================
   일정 창 닫기
================================================== */

function closeTripModal() {

  document
    .getElementById("trip-modal")
    .classList.remove("show");

}


/* ==================================================
   호텔 표시
================================================== */

function renderHotels() {

  const list = document.getElementById("hotel-list");

  list.innerHTML = "";


  if (hotels.length === 0) {

    list.innerHTML = `
      <div class="hotel-card">
        등록된 호텔이 없습니다.
      </div>
    `;

    return;

  }


  hotels.forEach(function (hotel) {

    const card = document.createElement("div");

    card.className = "hotel-card";


    let linkHTML = "";

    if (hotel.link) {

      linkHTML = `
        <a
          class="hotel-link"
          href="${escapeAttribute(hotel.link)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 예약 사이트 열기
        </a>
      `;

    }


    card.innerHTML = `

      <div class="hotel-city">
        ${escapeHTML(hotel.city)}
      </div>

      <div class="hotel-name">
        ${escapeHTML(hotel.name)}
      </div>

      <div class="hotel-info">

        📍 ${escapeHTML(hotel.address || "주소 미입력")}
        <br>

        💰 ${escapeHTML(hotel.price || "가격 미입력")}
        <br>

        📅 ${escapeHTML(hotel.dates || "숙박 날짜 미입력")}
        <br>

        📝 ${escapeHTML(hotel.notes || "")}

      </div>

      ${linkHTML}

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

}


/* ==================================================
   호텔 추가
================================================== */

function addHotel() {

  editingHotelId = null;

  document.getElementById("hotel-modal-title").textContent =
    "새 호텔 추가";


  document.getElementById("hotel-city").value = "";
  document.getElementById("hotel-name").value = "";
  document.getElementById("hotel-address").value = "";
  document.getElementById("hotel-price").value = "";
  document.getElementById("hotel-dates").value = "";
  document.getElementById("hotel-link").value = "";
  document.getElementById("hotel-notes").value = "";


  document.getElementById("hotel-modal").classList.add("show");

}


/* ==================================================
   호텔 수정
================================================== */

function editHotel(id) {

  const hotel = hotels.find(function (item) {

    return item.id === id;

  });


  if (!hotel) return;


  editingHotelId = id;


  document.getElementById("hotel-modal-title").textContent =
    "호텔 수정";


  document.getElementById("hotel-city").value =
    hotel.city;

  document.getElementById("hotel-name").value =
    hotel.name;

  document.getElementById("hotel-address").value =
    hotel.address;

  document.getElementById("hotel-price").value =
    hotel.price;

  document.getElementById("hotel-dates").value =
    hotel.dates;

  document.getElementById("hotel-link").value =
    hotel.link;

  document.getElementById("hotel-notes").value =
    hotel.notes;


  document.getElementById("hotel-modal").classList.add("show");

}


/* ==================================================
   호텔 저장
================================================== */

function saveHotel() {

  const data = {

    id:
      editingHotelId ||
      "hotel-" + Date.now(),

    city:
      document.getElementById("hotel-city").value.trim(),

    name:
      document.getElementById("hotel-name").value.trim(),

    address:
      document.getElementById("hotel-address").value.trim(),

    price:
      document.getElementById("hotel-price").value.trim(),

    dates:
      document.getElementById("hotel-dates").value.trim(),

    link:
      document.getElementById("hotel-link").value.trim(),

    notes:
      document.getElementById("hotel-notes").value.trim()

  };


  if (!data.name) {

    alert("호텔 이름을 입력해 주세요.");

    return;

  }


  if (editingHotelId) {

    const index = hotels.findIndex(function (item) {

      return item.id === editingHotelId;

    });


    if (index !== -1) {

      hotels[index] = data;

    }

  } else {

    hotels.push(data);

  }


  saveData();

  renderHotels();

  closeHotelModal();

}


/* ==================================================
   호텔 삭제
================================================== */

function deleteHotel() {

  if (!editingHotelId) return;


  if (!confirm("이 호텔을 삭제할까요?")) {

    return;

  }


  hotels = hotels.filter(function (hotel) {

    return hotel.id !== editingHotelId;

  });


  saveData();

  renderHotels();

  closeHotelModal();

}


/* ==================================================
   호텔 창 닫기
================================================== */

function closeHotelModal() {

  document
    .getElementById("hotel-modal")
    .classList.remove("show");

}


/* ==================================================
   메모 저장
================================================== */

function saveNotes() {

  notes = document.getElementById("notes").value;

  localStorage.setItem(
    "tripNotes",
    notes
  );

}


/* ==================================================
   HTML 보안 처리
================================================== */

function escapeHTML(value) {

  if (value === null || value === undefined) {

    return "";

  }


  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

  return escapeHTML(value);

}


/* ==================================================
   모달 바깥 클릭
================================================== */

window.addEventListener("click", function (event) {

  const tripModal =
    document.getElementById("trip-modal");

  const hotelModal =
    document.getElementById("hotel-modal");


  if (event.target === tripModal) {

    closeTripModal();

  }


  if (event.target === hotelModal) {

    closeHotelModal();

  }

});
