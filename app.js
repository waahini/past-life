const pastLives = [
    {
        era: "백악기 후기",
        job: "동네북 티라노사우루스",
        story: "티라노사우루스 중 가장 소심해서 트리케라톱스에게 매일 꼬리로 얻어맞고 다녔습니다. 육식공룡인데 채식주의자를 꿈꿨던 비운의 공룡입니다.",
        crime: "초식공룡의 풀떼기를 몰래 뺏어 먹다 들킴",
        emoji: "🦖"
    },
    {
        era: "조선시대",
        job: "한양 제일의 백수",
        story: "과거 시험을 30년째 준비한다는 핑계로 주막에서 국밥만 축내던 인물입니다. 엽전 한 푼 없으면서 입담 하나로 국밥 리필을 받아내던 전설적인 인물이죠.",
        crime: "주막에서 국밥 냄새만 맡고 배부르다고 우기기",
        emoji: "🍶"
    },
    {
        era: "르네상스 시대",
        job: "뚱뚱한 길고양이",
        story: "레오나르도 다빈치의 화실에 거주하며 모나리자의 모델이 될 뻔했으나, 그림 그리는 도중 캔버스 위에서 낮잠을 자는 바람에 쫓겨났습니다.",
        crime: "다빈치의 물감을 간식으로 착각하고 핥아먹음",
        emoji: "🐈"
    },
    {
        era: "중세 유럽",
        job: "바위에 꽂힌 엑스칼리버",
        story: "생명체가 아닌 사물이었으나 자의식은 충만했습니다. '나를 뽑는 자는 왕이 되리라'는 예언을 듣고 아무도 못 뽑게 바위를 꽉 붙잡고 있었던 고집불통이었습니다.",
        crime: "아더왕이 뽑으려 할 때 일부러 방구 소리 내기",
        emoji: "🗡️"
    },
    {
        era: "미래 3000년 화성",
        job: "고장 난 청소 로봇",
        story: "화성 식민지의 먼지를 흡입해야 했으나, 오히려 깨끗한 곳에 먼지를 뱉어내며 '예술'이라고 주장하던 반항적인 기계였습니다.",
        crime: "주인님 발가락을 먼지로 착각하고 빨아들임",
        emoji: "🤖"
    },
    {
        era: "빙하기",
        job: "추위 타는 매머드",
        story: "털이 그렇게 많음에도 불구하고 추위를 너무 타서 평생 불 피우는 법을 연구했습니다. 결국 불은 못 피우고 콧물만 고드름이 된 채 얼어붙었습니다.",
        crime: "남의 털 가죽을 몰래 빌려 입고 안 돌려줌",
        emoji: "🐘"
    },
    {
        era: "고대 이집트",
        job: "피라미드 미끄럼틀 관리자",
        story: "피라미드 외벽이 너무 매끄러워서 아이들이 자꾸 미끄럼을 타자, 이를 단속하러 올라갔다가 본인이 제일 신나게 타고 내려왔습니다.",
        crime: "파라오 앞에서 엉덩이로 미끄럼 타기 기술 선보임",
        emoji: "🏺"
    },
    {
        era: "대항해 시대",
        job: "뱃멀미하는 해적왕",
        story: "바다의 제왕이 되겠다고 나섰으나 배만 타면 구토를 하는 바람에, 평생 항구에 정박한 배 위에서만 '왕' 노릇을 했습니다.",
        crime: "보물 상자 대신 멀미약을 훔치다 잡힘",
        emoji: "🏴‍☠️"
    }
];

const issueBtn = document.getElementById('issueBtn');
const userNameInput = document.getElementById('userName');
const loadingDiv = document.getElementById('loading');
const resultCard = document.getElementById('resultCard');

issueBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    
    if (!name) {
        alert('에헴! 이름도 없이 발급받으려고요? 성함을 대세요!');
        return;
    }

    // 초기화 및 로딩 시작
    resultCard.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
    issueBtn.disabled = true;

    // 1초 가짜 로딩
    setTimeout(() => {
        loadingDiv.classList.add('hidden');
        resultCard.classList.remove('hidden');
        issueBtn.disabled = false;

        // 랜덤 결과 뽑기
        const randomLife = pastLives[Math.floor(Math.random() * pastLives.length)];

        // 데이터 반영
        document.getElementById('resName').innerText = name;
        document.getElementById('resEra').innerText = randomLife.era;
        document.getElementById('resJob').innerText = randomLife.job;
        document.getElementById('resStory').innerText = randomLife.story;
        document.getElementById('resCrime').innerText = randomLife.crime;
        document.getElementById('resultEmoji').innerText = randomLife.emoji;
        
        // 시리얼 번호 랜덤 생성 (디테일)
        const serial = `ID-PAST-${Math.floor(1000 + Math.random() * 9000)}-${name.charCodeAt(0)}`;
        document.querySelector('.serial-no').innerText = serial;

    }, 1000);
});
