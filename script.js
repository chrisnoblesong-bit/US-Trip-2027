
const STORAGE_KEY = "my-us-trip-planner-v1";

const defaultData = {
  trips: [
    { id: "t1", date: "2027-01-30", city: "로스앤젤레스", title: "LA 도착 및 그리피스 천문대", details: "LA 도착 → 호텔 체크인 → 그리피스 천문대", transport: "Uber", time: "" },
    { id: "t2", date: "2027-01-31", city: "로스앤젤레스", title: "산타모니카 + 베니스 비치", details: "해변 산책 및 주변 관광", transport: "대중교통 + Uber", time: "" },
    { id: "t3", date: "2027-02-01", city: "로스앤젤레스", title: "유니버설 스튜디오", details: "유니버설 스튜디오 할리우드 방문", transport: "Metro", time: "" },
    { id: "t4", date: "2027-02-02", city: "로스앤젤레스", title: "할리우드 + 게티 센터", details: "할리우드 관광 및 게티 센터 방문", transport: "대중교통 + Uber", time: "" },
    { id: "t5", date: "2027-02-03", city: "이동", title: "라스베이거스 이동", details: "포시즌 투어 출발. 출발 시간과 집결 장소 확인", transport: "투어 차량", time: "" },
    { id: "t6", date: "2027-02-04", city: "라스베이거스", title: "라스베이거스 관광", details: "세부 일정 입력하기", transport: "도보 / Uber", time: "" },
    { id: "t7", date: "2027-02-05", city: "라스베이거스", title: "라스베이거스 자유 일정", details: "관광 및 숙소 일정 확인", transport: "도보 / Uber", time: "" },
    { id: "t8", date: "2027-02-06", city: "이동", title: "이동 일정", details: "출발지와 도착지를 입력해 줘", transport: "미정", time: "" },
    { id: "t9", date: "2027-02-07", city: "샌디에이고", title: "샌디에이고 관광", details: "방문할 관광지를 입력해 줘", transport: "미정", time: "" },
    { id: "t10", date: "2027-02-08", city: "샌디에이고", title: "샌디에이고 자유 일정", details: "방문할 관광지를 입력해 줘", transport: "미정", time: "" },
    { id: "t11", date: "2027-02-09", city: "로스앤젤레스", title: "LA 복귀 및 마지막 숙박", details: "공항 이동에 편리한 숙소와 이동 시간 확인", transport: "미정", time: "" },
    { id: "t12", date: "2027-02-10", city: "이동", title: "귀국 항공편", details: "항공편 시간과 공항 이동 시간 확인", transport: "Uber / Lyft", time: "" }
  ],
  hotels: [],
  notes: ""
};

let data = loadData();

const $ = (id) => document.getElementById(id);

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.trips) && Array.isArray(parsed.hotels)) {
        return {
          trips: parsed.trips,
          hotels: parsed.hotels,
          notes: typeof parsed.notes === "string" ? parsed.notes : ""
        };
      }
    }
  } catch (error) {
    console.error("저장 데이터 읽기 오류:", error);
  }

  return JSON.parse(JSON.stringify(defaultData));
}

function saveData(message = "저장했어!") {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    render();
    showToast(message);
  } catch (error) {
    console.error("저장 오류:", error);
    showToast("저장에 실패했어. 브라우저 저장 공간을 확인해 줘.");
  }
}

let toastTimer;

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function makeElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function formatDate(date) {
  if (!date) return "날짜 미정";

  const parts = date.split("-").map(Number);
  return `${parts[1]}월 ${parts[2]}일`;
}

function render() {
  renderTrips();
  renderHotels();

  $("travelNotes").value = data.notes;
}

function renderTrips() {
  const list = $("tripList");
  const filter = $("cityFilter").value;
  list.replaceChildren();

  const trips = [...data.trips]
    .filter(trip => filter === "all" || trip.city === filter)
    .sort((a, b) =>
      (a.date || "").localeCompare(b.date || "") ||
      (a.time || "").localeCompare(b.time || "")
    );

  $("tripCount").textContent =
    `전체 ${data.trips.length}개 일정 · 현재 ${trips.length}개 표시`;

  $("emptyTrips").hidden = trips.length !== 0;

  trips.forEach(trip => {
    const card = makeElement("article", "trip-card");
    const dateBox = makeElement("div", "date-box");
    const date = makeElement("strong", "", formatDate(trip.date));
    const year = makeElement("span", "", trip.date ? trip.date.slice(0, 4) : "");
    dateBox.append(date, year);

    const main = makeElement("div", "card-main");
    main.append(
      makeElement("p", "muted", trip.city || "지역 미정"),
      makeElement("h3", "", trip.title || "제목 없음")
    );

    if (trip.time) {
      main.append(makeElement("p", "", "🕒 " + trip.time));
    }

    if (trip.details) {
      main.append(makeElement("p", "", trip.details));
    }

    if (trip.transport) {
      main.append(makeElement("p", "muted", "🚗 교통: " + trip.transport));
    }

    const actions = makeElement("div", "card-actions");
    const editBtn = makeElement("button", "btn secondary", "수정");
    editBtn.type = "button";
    editBtn.addEventListener("click", () => openTripEditor(trip.id));

    const deleteBtn = makeElement("button", "btn danger", "삭제");
    deleteBtn.type = "button";
    deleteBtn.addEventListener("click", () => {
      if (!confirm(`"${trip.title}" 일정을 삭제할까?`)) return;
      data.trips = data.trips.filter(item => item.id !== trip.id);
      saveData("일정을 삭제했어.");
    });

    actions.append(editBtn, deleteBtn);
    main.append(actions);
    card.append(dateBox, main);
    list.append(card);
  });
}

function openTripEditor(id = "") {
  $("tripForm").reset();
  $("tripId").value = id;

  const trip = data.trips.find(item => item.id === id);

  $("tripDialogTitle").textContent = trip ? "일정 수정" : "새 일정 추가";
  $("tripDate").value = trip?.date || "2027-01-30";
  $("tripCity").value = trip?.city || "로스앤젤레스";
  $("tripTitle").value = trip?.title || "";
  $("tripDetails").value = trip?.details || "";
  $("tripTransport").value = trip?.transport || "";
  $("tripTime").value = trip?.time || "";

  $("tripDialog").showModal();
}

$("addTripBtn").addEventListener("click", () => openTripEditor());

$("tripForm").addEventListener("submit", event => {
  event.preventDefault();

  const id = $("tripId").value || makeId();

  const trip = {
    id,
    date: $("tripDate").value,
    city: $("tripCity").value,
    title: $("tripTitle").value.trim(),
    details: $("tripDetails").value.trim(),
    transport: $("tripTransport").value.trim(),
    time: $("tripTime").value
  };

  if (!trip.date || !trip.title) {
    showToast("날짜와 일정 제목을 입력해 줘.");
    return;
  }

  const index = data.trips.findIndex(item => item.id === id);

  if (index >= 0) {
    data.trips[index] = trip;
  } else {
    data.trips.push(trip);
  }

  $("tripDialog").close();
  saveData("일정을 저장했어!");
});

$("cityFilter").addEventListener("change", renderTrips);

// 호텔 관리

function renderHotels() {
  const list = $("hotelList");
  list.replaceChildren();

  $("emptyHotels").hidden = data.hotels.length !== 0;

  data.hotels.forEach(hotel => {
    const card = makeElement("article", "hotel-card");
    const content = makeElement("div", "hotel-content");

    content.append(
      makeElement("p", "muted", hotel.city || "지역 미정"),
      makeElement("h3", "", hotel.name || "이름 미정")
    );

    if (hotel.address) {
      content.append(makeElement("p", "", "📍 " + hotel.address));
    }

    if (hotel.dates) {
      content.append(makeElement("p", "", "📅 " + hotel.dates));
    }

    if (hotel.price !== "") {
      content.append(
        makeElement("p", "hotel-price", "1박 $" + Number(hotel.price).toLocaleString())
      );
    }

    if (hotel.notes) {
      content.append(makeElement("p", "", hotel.notes));
    }

    if (hotel.link) {
      try {
        const url = new URL(hotel.link);
        if (url.protocol === "https:" || url.protocol === "http:") {
          const link = makeElement("a", "", "호텔 사이트 / 예약 페이지 열기 ↗");
          link.href = url.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          content.append(link);
        }
      } catch {
        // 잘못된 URL은 링크로 표시하지 않음
      }
    }

    const actions = makeElement("div", "card-actions");
    const editBtn = makeElement("button", "btn secondary", "수정");
    editBtn.type = "button";
    editBtn.addEventListener("click", () => openHotelEditor(hotel.id));

    const deleteBtn = makeElement("button", "btn danger", "삭제");
    deleteBtn.type = "button";
    deleteBtn.addEventListener("click", () => {
      if (!confirm(`"${hotel.name}" 호텔 정보를 삭제할까?`)) return;
      data.hotels = data.hotels.filter(item => item.id !== hotel.id);
      saveData("호텔 정보를 삭제했어.");
    });

    actions.append(editBtn, deleteBtn);
    card.append(content, actions);
    list.append(card);
  });
}

function openHotelEditor(id = "") {
  $("hotelForm").reset();
  $("hotelId").value = id;

  const hotel = data.hotels.find(item => item.id === id);

  $("hotelDialogTitle").textContent = hotel ? "호텔 수정" : "호텔 추가";
  $("hotelCity").value = hotel?.city || "로스앤젤레스";
  $("hotelName").value = hotel?.name || "";
  $("hotelAddress").value = hotel?.address || "";
  $("hotelPrice").value = hotel?.price ?? "";
  $("hotelDates").value = hotel?.dates || "";
  $("hotelLink").value = hotel?.link || "";
  $("hotelNotes").value = hotel?.notes || "";

  $("hotelDialog").showModal();
}

$("addHotelBtn").addEventListener("click", () => openHotelEditor());

$("hotelForm").addEventListener("submit", event => {
  event.preventDefault();

  const id = $("hotelId").value || makeId();
  const link = $("hotelLink").value.trim();

  if (link) {
    try {
      const url = new URL(link);
      if (!["https:", "http:"].includes(url.protocol)) {
        showToast("올바른 호텔 웹사이트 주소를 입력해 줘.");
        return;
      }
    } catch {
      showToast("호텔 웹사이트 주소를 다시 확인해 줘.");
      return;
    }
  }

  const hotel = {
    id,
    city: $("hotelCity").value,
    name: $("hotelName").value.trim(),
    address: $("hotelAddress").value.trim(),
    price: $("hotelPrice").value,
    dates: $("hotelDates").value.trim(),
    link,
    notes: $("hotelNotes").value.trim()
  };

  const index = data.hotels.findIndex(item => item.id === id);

  if (index >= 0) {
    data.hotels[index] = hotel;
  } else {
    data.hotels.push(hotel);
  }

  $("hotelDialog").close();
  saveData("호텔 정보를 저장했어!");
});

// 여행 메모

$("saveNotesBtn").addEventListener("click", () => {
  data.notes = $("travelNotes").value;
  saveData("여행 메모를 저장했어!");
});

// 대화상자 취소 버튼

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    $(button.dataset.close).close();
  });
});

// 백업 파일 내보내기

$("exportBtn").addEventListener("click", () => {
  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "my-us-trip-backup.json";
  link.click();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("여행 일정 백업 파일을 만들었어!");
});

// 백업 파일 불러오기

$("importBtn").addEventListener("click", () => {
  $("importFile").click();
});

$("importFile").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());

    if (
      !imported ||
      !Array.isArray(imported.trips) ||
      !Array.isArray(imported.hotels)
    ) {
      throw new Error("올바른 여행 백업 파일이 아니야.");
    }

    if (!confirm("현재 일정을 백업 파일의 내용으로 바꿀까?")) {
      event.target.value = "";
      return;
    }

    data = {
      trips: imported.trips,
      hotels: imported.hotels,
      notes: typeof imported.notes === "string" ? imported.notes : ""
    };

    saveData("백업 파일을 불러왔어!");
  } catch (error) {
    console.error(error);
    showToast("파일을 읽을 수 없어. 올바른 백업 파일인지 확인해 줘.");
  }

  event.target.value = "";
});

// 처음 화면 표시

render();
