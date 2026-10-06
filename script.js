// ============================================
// USA TRAVEL PLANNER
// JavaScript 기능 파일
// ============================================


// ============================================
// 1. 여행 일정 데이터
// ============================================

const scheduleData = [

  {
    date: "01/30",
    title: "한국 → Los Angeles",
    description: "LA 도착 및 호텔 이동"
  },

  {
    date: "01/31",
    title: "Los Angeles",
    description: "Hollywood · Beverly Hills · Santa Monica"
  },

  {
    date: "02/01",
    title: "Los Angeles",
    description: "Universal Studios Hollywood"
  },

  {
    date: "02/02",
    title: "LA → San Diego",
    description: "샌디에이고 이동 및 시내 관광"
  },

  {
    date: "02/03",
    title: "San Diego",
    description: "La Jolla · Balboa Park · USS Midway"
  },

  {
    date: "02/04",
    title: "San Diego → Los Angeles",
    description: "LA로 이동 후 휴식"
  },

  {
    date: "02/05",
    title: "Los Angeles",
    description: "LA 자유 관광"
  },

  {
    date: "02/06",
    title: "Los Angeles → Las Vegas",
    description: "라스베이거스 이동"
  },

  {
    date: "02/07",
    title: "Las Vegas",
    description: "Las Vegas Strip 중심 관광"
  },

  {
    date: "02/08",
    title: "Las Vegas → Los Angeles",
    description: "LA로 돌아와 마지막 일정 준비"
  },

  {
    date: "02/09",
    title: "Los Angeles",
    description: "마지막 쇼핑 및 공항 근처 숙박"
  },

  {
    date: "02/10",
    title: "Los Angeles → 한국",
    description: "공항 이동 및 귀국"
  }

];


// ============================================
// 2. LA 호텔 데이터
// ============================================
//
// 가격은 실시간 예약 가격이 아니라
// 사용자가 수정할 수 있는 참고값입니다.
// ============================================

const hotelData = [

  {
    name: "Hotel Normandie LA",
    location: "Koreatown · Wilshire Blvd",
    icon: "🏨",
    rating: "★★★★☆",
    price: 180,
    description:
      "LA 한인타운 중심부에서 숙박하려는 여행객이 고려할 수 있는 호텔입니다.",
    features: [
      "🍜 한인타운 접근",
      "🚇 Metro 접근",
      "🏙️ 관광 이동",
      "👨‍👩‍👧‍👦 4인 여행"
    ],
    scores: {
      koreanTown: 95,
      transportation: 85,
      sightseeing: 80,
      luggage: 82
    }
  },

  {
    name: "The LINE LA",
    location: "Koreatown · Wilshire / Vermont",
    icon: "🏙️",
    rating: "★★★★☆",
    price: 210,
    description:
      "한인타운과 LA 주요 지역을 함께 고려할 때 비교해볼 만한 호텔입니다.",
    features: [
      "🍜 한인타운 접근",
      "🚇 Metro 접근",
      "🎬 Hollywood 이동",
      "🏙️ Downtown 이동"
    ],
    scores: {
      koreanTown: 93,
      transportation: 92,
      sightseeing: 88,
      luggage: 85
    }
  },

  {
    name: "Best Western Plus LA Midtown",
    location: "Mid-City / Koreatown 인근",
    icon: "🏨",
    rating: "★★★☆☆",
    price: 170,
    description:
      "비교적 실용적인 숙박을 찾을 때 고려할 수 있는 중급 호텔 후보입니다.",
    features: [
      "💰 실용적인 선택",
      "🚗 차량 이동",
      "🧳 짐 보관",
      "👨‍👩‍👧‍👦 가족 여행"
    ],
    scores: {
      koreanTown: 82,
      transportation: 80,
      sightseeing: 78,
      luggage: 88
    }
  },

  {
    name: "Kins Hotel",
    location: "Koreatown / Wilshire 지역",
    icon: "🏨",
    rating: "★★★★☆",
    price: 190,
    description:
      "비교적 새로운 숙박 옵션을 찾는 여행객이 비교해볼 수 있는 후보입니다.",
    features: [
      "🆕 비교적 새로운 선택",
      "🍜 한인타운 접근",
      "🚕 차량 이동",
      "🏙️ LA 관광"
    ],
    scores: {
      koreanTown: 88,
      transportation: 82,
      sightseeing: 82,
      luggage: 84
    }
  },

  {
    name: "Ramada by Wyndham LA/Koreatown West",
    location: "Koreatown West",
    icon: "💰",
    rating: "★★★☆☆",
    price: 145,
    description:
      "호텔 비용을 줄이고 관광에 예산을 더 사용하려는 경우 비교할 수 있는 후보입니다.",
    features: [
      "💵 예산형",
      "🍜 한인타운 접근",
      "🚗 차량 이동",
      "🧳 짐 이동"
    ],
    scores: {
      koreanTown: 87,
      transportation: 75,
      sightseeing: 75,
      luggage: 80
    }
  },

  {
    name: "Garden Suite Hotel",
    location: "Koreatown · Western Ave",
    icon: "🌴",
    rating: "★★★☆☆",
    price: 160,
    description:
      "Western Avenue 주변에서 숙박을 찾을 때 비교할 수 있는 후보입니다.",
    features: [
      "🍜 한인타운",
      "🚗 차량 접근",
      "🧳 짐 이동",
      "💰 가격 비교"
    ],
    scores: {
      koreanTown: 90,
      transportation: 78,
      sightseeing: 77,
      luggage: 85
    }
  }

];


// ============================================
// 3. 일정 화면 생성
// ============================================

function renderSchedule() {

  const container =
    document.getElementById("scheduleList");

  if (!container) return;

  container.innerHTML = "";

  scheduleData.forEach(
    (item, index) => {

      const element =
        document.createElement("div");

      element.className =
        "timeline-item";

      element.innerHTML = `

        <div class="timeline-dot">
          ${index + 1}
        </div>

        <div class="timeline-card">

          <div class="timeline-date">
            ${item.date}
          </div>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.description}
          </p>

        </div>

      `;

      container.appendChild(element);

    }
  );

}


// ============================================
// 4. 호텔 화면 생성
// ============================================

function renderHotels() {

  const container =
    document.getElementById("hotelList");

  if (!container) return;

  container.innerHTML = "";


  hotelData.forEach(
    hotel => {

      const card =
        document.createElement("article");

      card.className =
        "hotel-card";


      card.innerHTML = `

        <div class="hotel-header">

          <div class="hotel-icon">
            ${hotel.icon}
          </div>

          <h3>
            ${hotel.name}
          </h3>

          <p class="hotel-location">
            📍 ${hotel.location}
          </p>

        </div>


        <div class="hotel-body">

          <p class="hotel-description">
            ${hotel.description}
          </p>


          <div class="hotel-rating">

            <span class="rating">
              ${hotel.rating}
            </span>

            <span class="hotel-price">

              $${hotel.price}

              <small>
                참고 1박 가격
              </small>

            </span>

          </div>


          <ul class="hotel-features">

            ${hotel.features
              .map(
                feature =>
                  `<li>${feature}</li>`
              )
              .join("")}

          </ul>


          <div class="hotel-scores">

            ${createScore(
              "한인타운",
              hotel.scores.koreanTown
            )}

            ${createScore(
              "교통",
              hotel.scores.transportation
            )}

            ${createScore(
              "관광 이동",
              hotel.scores.sightseeing
            )}

            ${createScore(
              "짐 이동",
              hotel.scores.luggage
            )}

          </div>

        </div>

      `;


      container.appendChild(card);

    }
  );

}


// ============================================
// 5. 호텔 점수 표시
// ============================================

function createScore(label, score) {

  return `

    <div class="hotel-score">

      <span>
        ${label}
      </span>

      <div class="score-bar">

        <div
          class="score-fill"
          style="width: ${score}%"
        ></div>

      </div>

      <strong>
        ${score}
      </strong>

    </div>

  `;

}


// ============================================
// 6. 메뉴 이동
// ============================================

function setupNavigation() {

  const buttons =
    document.querySelectorAll(
      ".nav-button"
    );

  const sections =
    document.querySelectorAll(
      ".page-section"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const target =
          button.dataset.section;


        buttons.forEach(item => {

          item.classList.remove(
            "active"
          );

        });


        sections.forEach(section => {

          section.classList.remove(
            "active"
          );

        });


        button.classList.add(
          "active"
        );


        const targetSection =
          document.getElementById(
            target
          );


        if (targetSection) {

          targetSection.classList.add(
            "active"
          );

        }


        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }
    );

  });

}


// ============================================
// 7. 예산 계산
// ============================================

function calculateBudget() {

  const ids = [

    "flightCost",
    "hotelCost",
    "carCost",
    "transportCost",
    "foodCost",
    "activityCost",
    "otherCost"

  ];


  let total = 0;


  ids.forEach(id => {

    const input =
      document.getElementById(id);

    const value =
      Number(input.value) || 0;

    total += value;

  });


  const people = 4;


  const perPerson =
    total / people;


  document.getElementById(
    "totalBudget"
  ).textContent =
    formatCurrency(total);


  document.getElementById(
    "perPersonBudget"
  ).textContent =
    formatCurrency(perPerson);

}


// ============================================
// 8. 달러 표시
// ============================================

function formatCurrency(value) {

  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }
  ).format(value);

}


// ============================================
// 9. 예산 버튼
// ============================================

function setupBudget() {

  const button =
    document.getElementById(
      "calculateBudget"
    );


  if (!button) return;


  button.addEventListener(
    "click",
    calculateBudget
  );

}


// ============================================
// 10. 체크리스트 저장
// ============================================

function setupChecklist() {

  const items =
    document.querySelectorAll(
      ".check-item input"
    );


  items.forEach(
    (item, index) => {

      const storageKey =
        `usaTripChecklist_${index}`;


      const saved =
        localStorage.getItem(
          storageKey
        );


      if (saved === "true") {

        item.checked = true;

      }


      item.addEventListener(
        "change",
        () => {

          localStorage.setItem(
            storageKey,
            item.checked
          );

        }
      );

    }
  );

}


// ============================================
// 11. 앱 시작
// ============================================

function initializeApp() {

  renderSchedule();

  renderHotels();

  setupNavigation();

  setupBudget();

  setupChecklist();

}


// ============================================
// 12. 페이지 로딩 완료
// ============================================

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
