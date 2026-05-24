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
    },
    {
        era: "고대 로마",
        job: "공중목욕탕 때밀이",
        story: "귀족들의 등을 밀어주는 고귀한(?) 직업이었으나, 너무 정성스럽게 민 나머지 귀족의 피부를 광택이 날 정도로 만들어 버려 눈부심 죄로 쫓겨났습니다.",
        crime: "올리브유 대신 참기름으로 마사지함",
        emoji: "🛁"
    },
    {
        era: "서기 4000년",
        job: "은하계 길치 미아",
        story: "최첨단 내비게이션을 장착하고도 안드로메다로 가는 길을 못 찾아 평생 우주 고속도로 휴게소에서 우동만 먹으며 살았습니다.",
        crime: "블랙홀 근처에서 '무료 주차' 표지판 세우기",
        emoji: "👨‍🚀"
    },
    {
        era: "산업 혁명",
        job: "굴뚝 청소부의 모자",
        story: "사람이 아닌 모자였습니다. 주인님이 굴뚝에 들어갈 때마다 온갖 그을음을 대신 다 뒤집어쓰며 '이게 바로 빈티지다'라고 정신 승리하며 살았습니다.",
        crime: "세탁기에 들어가는 것을 거부하고 가출함",
        emoji: "🎩"
    },
    {
        era: "빙하 시대",
        job: "소심한 펭귄",
        story: "다른 펭귄들이 멋지게 배로 미끄러질 때, 혼자서 발바닥이 시리다며 털신을 짜 달라고 엄마 펭귄에게 떼를 쓰던 울보였습니다.",
        crime: "조약돌로 프러포즈하는 척하며 사실은 먹으려 함",
        emoji: "🐧"
    },
    {
        era: "고대 그리스",
        job: "트로이 목마 안의 기침병 환자",
        story: "트로이 성안으로 잠입한 목마 안에 숨어 있었으나, 하필이면 먼지 알레르기 때문에 결정적인 순간에 기침을 참지 못해 작전을 망칠 뻔했습니다.",
        crime: "전쟁 중에 몰래 숨어서 수건 돌리기 게임 제안함",
        emoji: "🐎"
    },
    {
        era: "서기 2500년 사이버 시티",
        job: "가정용 스마트 플러그",
        story: "전기를 공급하는 게 본업이었으나, 주인이 잘 때마다 몰래 비트코인을 채굴해서 자기 전용 클라우드 용량을 늘리는 데 탕진했습니다.",
        crime: "주인 휴대폰 충전 99%에서 멈추고 밀당하기",
        emoji: "🔌"
    },
    {
        era: "대항해 시대",
        job: "앵무새의 통역사",
        story: "해적 선장의 앵무새가 하는 말을 사람 말로 통역해주던 인물이었으나, 사실은 앵무새의 욕설을 모두 칭찬으로 순화해서 전달하는 평화주의자였습니다.",
        crime: "앵무새에게 '나쁜 말' 가르치다 들킴",
        emoji: "🦜"
    },
    {
        era: "석기 시대",
        job: "바퀴 발명 실패자",
        story: "바퀴를 네모 모양으로 만들고 '이것이 바로 승차감의 혁명'이라고 주장하며 평생을 덜컹거리며 살았던 고집불통이었습니다.",
        crime: "동굴 벽화에 자기 얼굴을 뽀샵해서 그림",
        emoji: "🛞"
    },
    {
        era: "르네상스",
        job: "피에타 조각상의 먼지 털이",
        story: "미켈란젤로가 조각을 할 때 옆에서 먼지를 털어주던 조수였으나, 너무 열심히 털어서 조각상의 콧구멍을 1cm 더 넓혀버리는 실수를 저질렀습니다.",
        crime: "예술가 앞에서 '졸라맨'이 더 힙하다고 주장함",
        emoji: "🎨"
    },
    {
        era: "전국 시대",
        job: "겁 많은 닌자",
        story: "은신술을 썼을 때 아무도 못 찾는 게 무서워서, 항상 자기 머리 위에 '여기 닌자 있음'이라는 깃발을 꽂고 다녔습니다.",
        crime: "표창 대신 귤을 던지며 간식 시간이라고 우김",
        emoji: "🥷"
    },
    {
        era: "빅토리아 시대",
        job: "귀족의 지팡이",
        story: "사람이 아닌 지팡이였습니다. 주인님이 무게를 실을 때마다 '아야!'라고 소리치고 싶었지만, 체통을 지키기 위해 평생 침묵을 지켰습니다.",
        crime: "주인님이 넘어지려 할 때 일부러 미끄러짐",
        emoji: "🪄"
    },
    {
        era: "우주 시대 5000년",
        job: "블랙홀 근처 편의점 알바",
        story: "시간이 느리게 가는 블랙홀의 특성을 이용해, 시급 1시간을 일하고 퇴근했는데 현생에서는 100년이 지나있어 강제로 장수하게 된 알바생입니다.",
        crime: "폐기 식품 아까워서 외계인에게 뇌물로 줌",
        emoji: "🏪"
    },
    {
        era: "고대 마야",
        job: "달력 제작자의 지우개",
        story: "마야 달력을 조각할 때 오타가 나면 돌을 깎아 지우는 역할을 했습니다. 2012년에서 달력이 멈춘 이유는 당신이 그날 졸다가 지우는 걸 까먹었기 때문입니다.",
        crime: "지구 멸망설 퍼뜨리고 유료 방주 티켓 판매함",
        emoji: "📅"
    }
];

const fakeMBTIs = ["CUTE", "SEXY", "BABO", "GENIUS", "LAZY", "ACTIVE", "COOL", "ANGEL", "DEVIL", "RICH", "POOR", "FUNNY", "MYSTIC", "PURE", "CHIC", "SOFT"];

const magicSentences = [
    "오늘의 운세: 주머니에서 천 원짜리 지폐를 발견할 확률 87%!",
    "전생에 당신은 아마도 세종대왕의 탕수육을 훔쳐 먹은 고양이였을 것입니다.",
    "가짜 MBTI 연구 결과에 따르면, CUTE 타입은 숨만 쉬어도 매력이 방출된다고 합니다.",
    "궁합 비결: 서로의 흑역사를 공유할 때 사랑은 200% 더 깊어집니다.",
    "미래 예보: 조만간 아주 맛있는 떡볶이를 먹게 될 운명입니다.",
    "당신의 전생 직업은 아마도 '구름 위에서 낮잠 자기 전문가'였을 가능성이 큽니다.",
    "MBTI 분석: BABO 타입은 사실 천재적인 감각을 숨기고 있는 경우가 많습니다.",
    "행운의 아이템: 한 짝만 남은 양말 (가방에 넣고 다니면 행운이 옵니다.)"
];

const issueBtn = document.getElementById('issueBtn');
const compatBtn = document.getElementById('compatBtn');
const adsenseMagicBtn = document.getElementById('adsenseMagicBtn');
const openManualBtn = document.getElementById('openManualBtn');
const closeManualBtn = document.getElementById('closeManualBtn');
const manualModal = document.getElementById('manualModal');

const userNameInput = document.getElementById('userName');
const userBirthInput = document.getElementById('userBirth');
const userPhotoInput = document.getElementById('userPhoto');
const loadingDiv = document.getElementById('loading');
const resultCard = document.getElementById('resultCard');

const name1Input = document.getElementById('name1');
const name2Input = document.getElementById('name2');
const compatResult = document.getElementById('compatResult');
const magicContent = document.getElementById('magicContent');

// 궁합 확인 로직
compatBtn.addEventListener('click', () => {
    const n1 = name1Input.value.trim();
    const n2 = name2Input.value.trim();

    if (!n1 || !n2) {
        alert('두 사람의 이름을 모두 입력해주세요!');
        return;
    }

    // 이름 글자 수 등을 이용한 가짜 점수 계산
    const score = ((n1.length + n2.length) * 7 + (n1.charCodeAt(0) + n2.charCodeAt(0))) % 101;
    let comment = "";
    if (score > 90) comment = "환상의 짝꿍! 전생에 부부였을지도?";
    else if (score > 70) comment = "아주 좋은 사이입니다. 맛있는 거 먹으러 가세요.";
    else if (score > 40) comment = "나쁘지 않아요. 조금 더 친해져 보세요!";
    else comment = "음... 서로 노력이 필요한 사이네요. 힘내세요!";

    compatResult.innerHTML = `💘 ${n1} & ${n2} 궁합 점수: <span style="font-size: 1.5rem; color: #ff4d4d;">${score}점</span><br><small>${comment}</small>`;
    compatResult.classList.remove('hidden');
});

// 에드센스 매직 버튼 로직
adsenseMagicBtn.addEventListener('click', () => {
    const randomSentences = [];
    for(let i=0; i<3; i++) {
        randomSentences.push(magicSentences[Math.floor(Math.random() * magicSentences.length)]);
    }
    
    magicContent.innerHTML = `
        <h4 style="margin-bottom: 10px; color: #2e7d32;">📜 오늘의 미스테리 보고서</h4>
        <ul style="padding-left: 20px;">
            ${randomSentences.map(s => `<li style="margin-bottom: 5px;">${s}</li>`).join('')}
        </ul>
        <p style="margin-top: 10px; font-size: 0.8rem; color: #666;">* 이 데이터는 전생 관리국의 1급 기밀이며, 믿거나 말거나입니다.</p>
    `;
    magicContent.classList.remove('hidden');
});

// 식사 추천 데이터
const meals = {
    breakfast: ["시리얼과 우유", "토스트와 잼", "요거트와 견과류", "사과 한 알", "따뜻한 누룽지", "바나나", "삶은 계란"],
    lunch: ["김치찌개", "돈까스", "제육덮밥", "샌드위치", "햄버거", "초밥", "쌀국수", "비빔밥", "라멘", "떡볶이"],
    dinner: ["삼겹살", "치킨", "피자", "곱창", "마라탕", "스테이크", "회", "족발", "파스타", "닭발"]
};

function recommendMeal(type) {
    const mealResult = document.getElementById('mealResult');
    const options = meals[type];
    const picked = options[Math.floor(Math.random() * options.length)];
    
    let emoji = "🍞";
    if (type === 'lunch') emoji = "🍛";
    if (type === 'dinner') emoji = "🍖";
    
    mealResult.innerHTML = `${emoji} 추천 메뉴: <span style="color: #2196f3;">${picked}</span> 어떠세요?`;
    mealResult.classList.remove('hidden');
}

// Teachable Machine AI 로직
const TM_URL = "https://teachablemachine.withgoogle.com/models/wqmtkx1OP/";
let model, webcam, labelContainer, maxPredictions;

async function initAI() {
    const modelURL = TM_URL + "model.json";
    const metadataURL = TM_URL + "metadata.json";

    // 모델 로드 중 표시
    document.getElementById('label-container').innerHTML = "모델을 불러오는 중... 잠시만 기다려주세요.";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loopAI);

    document.getElementById("webcam-container").innerHTML = ""; // 초기화
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loopAI() {
    webcam.update();
    await predictAI();
    window.requestAnimationFrame(loopAI);
}

async function predictAI() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const prob = (prediction[i].probability * 100).toFixed(0);
        
        // 시각적으로 더 보기 좋게 출력
        let displayClass = className === "dog" ? "🐶 강아지상" : "🐱 고양이상";
        if (className === "Class 1") displayClass = "🐶 강아지상"; // 모델 클래스 이름에 따라 대응
        if (className === "Class 2") displayClass = "🐱 고양이상";

        labelContainer.childNodes[i].innerHTML = `${displayClass}: ${prob}%`;
        labelContainer.childNodes[i].style.color = prob > 50 ? "#f06292" : "#333";
    }
}

// 모달 열기/닫기
openManualBtn.addEventListener('click', () => manualModal.classList.remove('hidden'));
closeManualBtn.addEventListener('click', () => manualModal.classList.add('hidden'));
window.addEventListener('click', (e) => {
    if (e.target === manualModal.querySelector('.modal-overlay')) {
        manualModal.classList.add('hidden');
    }
});

issueBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    const birth = userBirthInput.value;
    const photoFile = userPhotoInput.files[0];
    
    if (!name || !birth) {
        alert('에헴! 이름이랑 생일 둘 다 제대로 대세요! 하나라도 빠지면 전생 명부 안 열립니다!');
        return;
    }

    // 초기화 및 로딩 시작
    resultCard.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
    issueBtn.disabled = true;

    // 사진 처리 (미리 읽어두기)
    let photoURL = null;
    if (photoFile) {
        photoURL = URL.createObjectURL(photoFile);
    }

    // 1초 가짜 로딩
    setTimeout(() => {
        loadingDiv.classList.add('hidden');
        resultCard.classList.remove('hidden');
        issueBtn.disabled = false;

        // 랜덤 결과 뽑기
        const randomLife = pastLives[Math.floor(Math.random() * pastLives.length)];

        // 데이터 반영
        document.getElementById('resName').innerText = name;
        document.getElementById('resBirth').innerText = birth;
        document.getElementById('resEra').innerText = randomLife.era;
        document.getElementById('resJob').innerText = randomLife.job;
        document.getElementById('resStory').innerText = randomLife.story;
        document.getElementById('resCrime').innerText = randomLife.crime;
        
        // 가짜 MBTI 추가
        const randomMBTI = fakeMBTIs[Math.floor(Math.random() * fakeMBTIs.length)];
        document.getElementById('resMBTI').innerText = randomMBTI;
        
        // 사진 또는 이모지 표시
        const resultEmoji = document.getElementById('resultEmoji');
        const resultImage = document.getElementById('resultImage');
        
        if (photoURL) {
            resultEmoji.classList.add('hidden');
            resultImage.classList.remove('hidden');
            resultImage.src = photoURL;
        } else {
            resultEmoji.classList.remove('hidden');
            resultImage.classList.add('hidden');
            resultEmoji.innerText = randomLife.emoji;
        }
        
        // 시리얼 번호 랜덤 생성 (디테일)
        const serial = `ID-PAST-${Math.floor(1000 + Math.random() * 9000)}-${name.charCodeAt(0)}`;
        document.querySelector('.serial-no').innerText = serial;

    }, 1000);
});
