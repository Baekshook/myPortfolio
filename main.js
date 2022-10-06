const API_KEY = "89b2830e7e8f6b12565590fa56e98826";

const introduceArray = [
  "안녕하세요! <br> 프론트엔드 개발자 Baekshook입니다.",
  "현재 멋쟁이 사자처럼 <br> 블록체인 스쿨을 수강중입니다.",
  "무엇이든 긍적적으로 할 자신 있습니다. <br> 잘 부탁드립니다!",
];
let introduceIndex = 0;

function onClickIntroduce() {
  const introduceMessage = document.querySelector(".introduceMessage");

  introduceIndex++;

  if (introduceIndex === introduceArray.length) {
    introduceIndex = 0;
  }

  // introduceMessage.innerText = introduceArray[introduceIndex];
  introduceMessage.innerHTML = introduceArray[introduceIndex];
}

function onClickOpenModal(projectName) {
  const modalDetail = document.querySelector(".modalDetail");

  modalDetail.classList.remove("hidden");
  modalDetail.classList.add("flex");

  const modalTitle = document.querySelector(".modalTitle");
  modalTitle.innerHTML = projectDetail[projectName].title;

  const modalContents = document.querySelector(".modalContents");
  modalContents.innerHTML = `<li class="mx-2 md:mx-8"><img src=${projectDetail[projectName].img} alt=${projectDetail[projectName].img} /></li>`;
  projectDetail[projectName].contents.forEach((v) => {
    modalContents.innerHTML += `<li class="mx-2 md:mx-8">${v}</li>`;
  });

  if (projectDetail[projectName].href) {
    console.log(projectDetail[projectName].href);
    modalContents.innerHTML += `<li class="mx-2 md:mx-8 mt-2 md:mt-4 text-xs md:text-base">
            <a class="underline text-base md:text-xl text-blue-500" href="${projectDetail[projectName].href}" target="_blank">사이트 방문하기</a>
        </li>`;
  }
}

function onClickCloseModal() {
  const modalDetail = document.querySelector(".modalDetail");

  modalDetail.classList.remove("flex");
  modalDetail.classList.add("hidden");
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityTemp = document.querySelector(".cityTemp");
        const weatherIcon = document.querySelector(".weatherIcon");

        cityTemp.innerText = data.name + ", " + parseInt(data.main.temp) + "℃";
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },
  () => alert("Location access not allowed.")
);

const projectDetail = {
  project1: {
    img: "BlockChain.jpeg",
    title: "불사 프로젝트",
    contents: [
      "아름답고 오직 피가 같은 새 봄날의 약동하다. 그들의 반짝이는 것은 바이며, 있다. 귀는 되려니와, 넣는 내려온 아니다.",
      "구하기 인생을 아니한 이것은 광야에서 이상의 넣는 아름다우냐? 무엇을 우리의 작고 있는가? 길을 구하지 넣는 속잎나고, 것이다.보라, 칼이다.",
      "얼마나 살았으며, 우리 것이 무엇을 만천하의 붙잡아 너의 청춘의 아니다. 위하여, 희망의 따뜻한 너의 없는 것이다. 사는가 가치를 바로 청춘에서만 불러 가치를 있으며, 꽃이 이상, 아름다우냐?",
    ],
    href: "https://munhwa3.com",
  },
  project2: {
    img: "React.jpeg",
    title: "리액트 마스터",
    contents: [
      "것은 설레는 튼튼하며, 돋고, 못할 심장의 커다란 실현에 물방아 것이다. 노래하며 새 든 없는 것이다. 갑 우는 우리의 피다. 고행을 천지는 만천하의 듣는다.",
      "생생하며, 그림자는 피고, 풍부하게 청춘 우리 철환하였는가? 가지에 무엇이 인간의 고행을 싸인 못할 끝까지 너의 봄바람이다.",
      "갑 황금시대의 이 피어나기 이것이야말로 인류의 위하여 찾아다녀도, 그들의 있으랴? 피어나기 장식하는 청춘에서만 뜨고, 가슴이 약동하다. 위하여, 용기가 그들은 이것을 희망의 못하다 것이다. 봄날의 작고 때에, 인생을 얼음에 끓는다. 끓는 창공에 주며, 그들에게 살 봄바람이다.",
    ],
  },
  project3: {
    img: "javascript.jpeg",
    title: "스마트 컨트랙트",
    contents: [
      "열락의 발휘하기 사랑의 우리 얼마나 힘차게 것은 온갖 청춘의 쓸쓸하랴? 찬미를 이는 가슴이 피부가 풍부하게 못하다 아니다. 그들은 그러므로 그것은 같지 그들은 그리하였는가?",
      "만천하의 곳이 시들어 군영과 그들은 위하여 우리의 가장 사막이다. 이상의 그러므로 끓는 인생을 위하여, 보배를 간에 군영과 풀이 운다. 못할 온갖 스며들어 풀밭에 미인을 방황하여도, 피가 싸인 밥을 것이다.",
      "바로 무엇을 듣기만 커다란 물방아 석가는 철환하였는가? 풀이 만천하의 유소년에게서 영원히 그림자는 날카로우나 약동하다. 커다란 사라지지 영락과 소리다.이것은 이상 되는 싸인 목숨을 뭇 사막이다. 너의 이것은 그림자는 우리 장식하는 싹이 주며, 교향악이다. 품에 속에서 오직 이것이다.",
    ],
  },
};
