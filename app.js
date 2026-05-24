const pastLives = [
    { era: "백악기 후기", job: "동네북 티라노사우루스", story: "티라노사우루스 중 가장 소심해서 트리케라톱스에게 매일 꼬리로 얻어맞고 다녔습니다. 육식공룡인데 채식주의자를 꿈꿨던 비운의 공룡입니다.", crime: "초식공룡의 풀떼기를 몰래 뺏어 먹다 들킴", emoji: "🦖" },
    { era: "조선시대", job: "한양 제일의 백수", story: "과거 시험을 30년째 준비한다는 핑계로 주막에서 국밥만 축내던 인물입니다. 엽전 한 푼 없으면서 입담 하나로 국밥 리필을 받아내던 전설적인 인물이죠.", crime: "주막에서 국밥 냄새만 맡고 배부르다고 우기기", emoji: "🍶" },
    { era: "르네상스 시대", job: "뚱뚱한 길고양이", story: "레오나르도 다빈치의 화실에 거주하며 모나리자의 모델이 될 뻔했으나, 그림 그리는 도중 캔버스 위에서 낮잠을 자는 바람에 쫓겨났습니다.", crime: "다빈치의 물감을 간식으로 착각하고 핥아먹음", emoji: "🐈" },
    { era: "중세 유럽", job: "바위에 꽂힌 엑스칼리버", story: "생명체가 아닌 사물이었으나 자의식은 충만했습니다. '나를 뽑는 자는 왕이 되리라'는 예언을 듣고 아무도 못 뽑게 바위를 꽉 붙잡고 있었던 고집불통이었습니다.", crime: "아더왕이 뽑으려 할 때 일부러 방구 소리 내기", emoji: "🗡️" },
    { era: "미래 3000년 화성", job: "고장 난 청소 로봇", story: "화성 식민지의 먼지를 흡입해야 했으나, 오히려 깨끗한 곳에 먼지를 뱉어내며 '예술'이라고 주장하던 반항적인 기계였습니다.", crime: "주인님 발가락을 먼지로 착각하고 빨아들임", emoji: "🤖" },
    { era: "빙하기", job: "추위 타는 매머드", story: "털이 그렇게 많음에도 불구하고 추위를 너무 타서 평생 불 피우는 법을 연구했습니다. 결국 불은 못 피우고 콧물만 고드름이 된 채 얼어붙었습니다.", crime: "남의 털 가죽을 몰래 빌려 입고 안 돌려줌", emoji: "🐘" },
    { era: "고대 이집트", job: "피라미드 미끄럼틀 관리자", story: "피라미드 외벽이 너무 매끄러워서 아이들이 자꾸 미끄럼을 타자, 이를 단속하러 올라갔다가 본인이 제일 신나게 타고 내려왔습니다.", crime: "파라오 앞에서 엉덩이로 미끄럼 타기 기술 선보임", emoji: "🏺" },
    { era: "대항해 시대", job: "뱃멀미하는 해적왕", story: "바다의 제왕이 되겠다고 나섰으나 배만 타면 구토를 하는 바람에, 평생 항구에 정박한 배 위에서만 '왕' 노릇을 했습니다.", crime: "보물 상자 대신 멀미약을 훔치다 잡힘", emoji: "🏴‍☠️" },
    { era: "고대 로마", job: "공중목욕탕 때밀이", story: "귀족들의 등을 밀어주는 고귀한(?) 직업이었으나, 너무 정성스럽게 민 나머지 귀족의 피부를 광택이 날 정도로 만들어 버려 눈부심 죄로 쫓겨났습니다.", crime: "올리브유 대신 참기름으로 마사지함", emoji: "🛁" },
    { era: "서기 4000년", job: "은하계 길치 미아", story: "최첨단 내비게이션을 장착하고도 안드로메다로 가는 길을 못 찾아 평생 우주 고속도로 휴게소에서 우동만 먹으며 살았습니다.", crime: "블랙홀 근처에서 '무료 주차' 표지판 세우기", emoji: "👨‍🚀" },
    { era: "산업 혁명", job: "굴뚝 청소부의 모자", story: "사람이 아닌 모자였습니다. 주인님이 굴뚝에 들어갈 때마다 온갖 그을음을 대신 다 뒤집어쓰며 '이게 바로 빈티지다'라고 정신 승리하며 살았습니다.", crime: "세탁기에 들어가는 것을 거부하고 가출함", emoji: "🎩" },
    { era: "빙하 시대", job: "소심한 펭귄", story: "다른 펭귄들이 멋지게 배로 미끄러질 때, 혼자서 발바닥이 시리다며 털신을 짜 달라고 엄마 펭귄에게 떼를 쓰던 울보였습니다.", crime: "조약돌로 프러포즈하는 척하며 사실은 먹으려 함", emoji: "🐧" },
    { era: "고대 그리스", job: "트로이 목마 안의 기침병 환자", story: "트로이 성안으로 잠입한 목마 안에 숨어 있었으나, 하필이면 먼지 알레르기 때문에 결정적인 순간에 기침을 참지 못해 작전을 망칠 뻔했습니다.", crime: "전쟁 중에 몰래 숨어서 수건 돌리기 게임 제안함", emoji: "🐎" },
    { era: "서기 2500년 사이버 시티", job: "가정용 스마트 플러그", story: "전기를 공급하는 게 본업이었으나, 주인이 잘 때마다 몰래 비트코인을 채굴해서 자기 전용 클라우드 용량을 늘리는 데 탕진했습니다.", crime: "주인 휴대폰 충전 99%에서 멈추고 밀당하기", emoji: "🔌" },
    { era: "대항해 시대", job: "앵무새의 통역사", story: "해적 선장의 앵무새가 하는 말을 사람 말로 통역해주던 인물이었으나, 사실은 앵무새의 욕설을 모두 칭찬으로 순화해서 전달하는 평화주의자였습니다.", crime: "앵무새에게 '나쁜 말' 가르치다 들킴", emoji: "🦜" },
    { era: "석기 시대", job: "바퀴 발명 실패자", story: "바퀴를 네모 모양으로 만들고 '이것이 바로 승차감의 혁명'이라고 주장하며 평생을 덜컹거리며 살았던 고집불통이었습니다.", crime: "동굴 벽화에 자기 얼굴을 뽀샵해서 그림", emoji: "🛞" },
    { era: "르네상스", job: "피에타 조각상의 먼지 털이", story: "미켈란젤로가 조각을 할 때 옆에서 먼지를 털어주던 조수였으나, 너무 열심히 털어서 조각상의 콧구멍을 1cm 더 넓혀버리는 실수를 저질렀습니다.", crime: "예술가 앞에서 '졸라맨'이 더 힙하다고 주장함", emoji: "🎨" },
    { era: "전국 시대", job: "겁 많은 닌자", story: "은신술을 썼을 때 아무도 못 찾는 게 무서워서, 항상 자기 머리 위에 '여기 닌자 있음'이라는 깃발을 꽂고 다녔습니다.", crime: "표창 대신 귤을 던지며 간식 시간이라고 우김", emoji: "🥷" },
    { era: "빅토리아 시대", job: "귀족의 지팡이", story: "사람이 아닌 지팡이였습니다. 주인님이 무게를 실을 때마다 '아야!'라고 소리치고 싶었지만, 체통을 지키기 위해 평생 침묵을 지켰습니다.", crime: "주인님이 넘어지려 할 때 일부러 미끄러짐", emoji: "🪄" },
    { era: "우주 시대 5000년", job: "블랙홀 근처 편의점 알바", story: "시간이 느리게 가는 블랙홀의 특성을 이용해, 시급 1시간을 일하고 퇴근했는데 현생에서는 100년이 지나있어 강제로 장수하게 된 알바생입니다.", crime: "폐기 식품 아까워서 외계인에게 뇌물로 줌", emoji: "🏪" },
    { era: "고대 마야", job: "달력 제작자의 지우개", story: "마야 달력을 조각할 때 오타가 나면 돌을 깎아 지우는 역할을 했습니다. 2012년에서 달력이 멈춘 이유는 당신이 그날 졸다가 지우는 걸 까먹었기 때문입니다.", crime: "지구 멸망설 퍼뜨리고 유료 방주 티켓 판매함", emoji: "📅" }
];

const fakeMBTIs = [
    { type: "SEXY", desc: "치명적인 매력의 소유자. 가만히 있어도 페로몬이 방출됩니다." },
    { type: "CUTE", desc: "존재 자체가 귀요미. 숨만 쉬어도 주변 사람들이 녹아내립니다." },
    { type: "BABO", desc: "순수함 100%. 가끔 자기 신발 좌우를 헷갈리지만 착합니다." },
    { type: "GENIUS", desc: "뇌섹남/뇌섹녀. 하지만 리모컨 찾는 법은 모를 수도 있습니다." },
    { type: "LAZY", desc: "움직이는 것을 싫어함. 숨쉬기도 가끔 귀찮아하는 나무늘보과." },
    { type: "ACTIVE", desc: "에너자이저. 잠들기 직전까지 가만히 있지 못하는 타입." },
    { type: "COOL", desc: "차도남/차도녀. 하지만 속은 따뜻한 붕어빵 같은 사람." },
    { type: "ANGEL", desc: "날개 없는 천사. 남의 부탁을 거절 못해 고생하기도 합니다." },
    { type: "DEVIL", desc: "장난꾸러기 악마. 남 괴롭히는 걸 즐기지만 미워할 수 없죠." },
    { type: "RICH", desc: "정신적 부자. 통장 잔고와 상관없이 마음만은 빌게이츠." },
    { type: "POOR", desc: "텅장 소유자. 하지만 쇼핑할 때만큼은 누구보다 행복합니다." },
    { type: "FUNNY", desc: "뼈그맨. 당신이 입만 열면 주변이 웃음바다가 됩니다." },
    { type: "MYSTIC", desc: "신비주의. 가끔 자기 자신도 자기가 누군지 모를 때가 있습니다." },
    { type: "PURE", desc: "맑고 깨끗한 영혼. 동화 속에서 방금 튀어나온 것 같습니다." },
    { type: "CHIC", desc: "세련된 도시인. 무심한 듯 챙겨주는 츤데레의 정석." },
    { type: "SOFT", desc: "말랑말랑한 성격. 누구와도 잘 어울리는 인간 마시멜로." },
    { type: "SLEEPY", desc: "잠만보. 서서도 잘 수 있는 놀라운 능력을 가졌습니다." },
    { type: "HUNGRY", desc: "항상 배고픈 영혼. 밥 먹으면서 다음 끼니를 고민합니다." },
    { type: "BRAVE", desc: "용감한 전사. 바퀴벌레 앞에서도 (아마도) 당당합니다." },
    { type: "SHY", desc: "부끄럼쟁이. 칭찬 한마디에 얼굴이 토마토가 됩니다." },
    { type: "GRUMPY", desc: "투덜이 스머프. 투덜거리지만 할 일은 다 하는 스타일." },
    { type: "HAPPY", desc: "행복 전도사. 세상 모든 것이 즐겁고 아름보입니다." },
    { type: "WEIRD", desc: "4차원. 독특한 사고방식으로 주변을 당황시키곤 합니다." },
    { type: "SASSY", desc: "당당한 매력. 자기주장이 강하고 할 말은 꼭 해야 합니다." }
];

const meals = {
    breakfast: ["시리얼과 우유", "토스트와 잼", "요거트와 견과류", "사과 한 알", "따뜻한 누룽지", "바나나", "삶은 계란"],
    lunch: ["김치찌개", "돈까스", "제육덮밥", "샌드위치", "햄버거", "초밥", "쌀국수", "비빔밥", "라멘", "떡볶이"],
    dinner: ["삼겹살", "치킨", "피자", "곱창", "마라탕", "스테이크", "회", "족발", "파스타", "닭발"]
};

// 섹션 전환 및 제목 변경
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.add('hidden'));
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-id="${sectionId}"]`).classList.add('active');

    // 헤더 텍스트 변경
    const titles = {
        pastlife: "전생 추적 시스템",
        mbti: "본능 아키타입 분석",
        compat: "양자 인연 측정",
        meal: "식생활 최적화 보고서",
        animal: "페이스 형태학 스캔",
        contact: "시스템 피드백"
    };
    document.getElementById('page-title').innerText = titles[sectionId];
    document.querySelector('.scroll-area').scrollTop = 0;
}

function getPhotoURL(input) {
    const file = input.files[0];
    return file ? URL.createObjectURL(file) : null;
}

// 1. 전생 발급
function issuePastLife() {
    const section = document.getElementById('pastlife-section');
    const name = section.querySelector('.userName').value.trim();
    const birth = section.querySelector('.userBirth').value;
    const photoURL = getPhotoURL(section.querySelector('.userPhoto'));

    if (!name || !birth) { alert('데이터가 부족합니다. 이름과 좌표(생일)를 입력하십시오.'); return; }

    const loading = document.getElementById('loading');
    const resultCard = document.getElementById('resultCard');
    loading.classList.remove('hidden');
    resultCard.classList.add('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        resultCard.classList.remove('hidden');
        
        const randomLife = pastLives[Math.floor(Math.random() * pastLives.length)];
        document.getElementById('resName').innerText = name;
        document.getElementById('resEra').innerText = randomLife.era;
        document.getElementById('resJob').innerText = randomLife.job;
        document.getElementById('resStory').innerText = randomLife.story;
        document.getElementById('resCrime').innerText = randomLife.crime;
        document.getElementById('resMBTI').innerText = fakeMBTIs[Math.floor(Math.random() * fakeMBTIs.length)].type;

        const resEmoji = document.getElementById('resultEmoji');
        const resImg = document.getElementById('resultImage');
        if (photoURL) {
            resEmoji.classList.add('hidden'); resImg.classList.remove('hidden'); resImg.src = photoURL;
        } else {
            resEmoji.classList.remove('hidden'); resImg.classList.add('hidden'); resEmoji.innerText = randomLife.emoji;
        }
        resultCard.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// 2. 가짜 MBTI
function checkFakeMBTI() {
    const section = document.getElementById('mbti-section');
    const name = section.querySelector('.userName').value.trim();
    if (!name) { alert('대상 식별자(이름)가 필요합니다.'); return; }

    const resultDiv = document.getElementById('mbtiResult');
    const mbtiValue = document.getElementById('mbtiValue');
    const mbtiDesc = document.getElementById('mbtiDesc');

    const result = fakeMBTIs[Math.floor(Math.random() * fakeMBTIs.length)];
    mbtiValue.innerText = result.type;
    mbtiDesc.innerText = result.desc;
    resultDiv.classList.remove('hidden');
}

// 3. 궁합
function checkCompatibility() {
    const n1 = document.getElementById('name1').value.trim();
    const n2 = document.getElementById('name2').value.trim();
    if (!n1 || !n2) { alert('두 주체의 데이터가 모두 필요합니다.'); return; }

    const score = ((n1.length + n2.length) * 7 + (n1.charCodeAt(0) + (n2.charCodeAt(0) || 0))) % 101;
    let comment = score > 90 ? "완벽한 양자 공명 상태입니다." : score > 70 ? "높은 동기화율을 보입니다." : score > 40 ? "불안정한 간섭 무늬가 발견됩니다." : "데이터 충돌 위험이 감지되었습니다.";
    
    const res = document.getElementById('compatResult');
    res.innerHTML = `<h3>SYNC RATE: ${score}%</h3><p>${comment}</p>`;
    res.classList.remove('hidden');
}

// 4. 식사 추천
function recommendMeal(type) {
    const options = meals[type];
    const picked = options[Math.floor(Math.random() * options.length)];
    const res = document.getElementById('mealResult');
    res.innerHTML = `<h3>RECOMMENDED_FUEL</h3><p style="font-size:1.5rem; color:var(--accent-primary); font-weight:800;">${picked}</p>`;
    res.classList.remove('hidden');
}

// 5. AI 동물상 (최종 복구 버전)
const TM_URL = "https://teachablemachine.withgoogle.com/models/wqmtkx1OP/";
let model, webcam, labelContainer, maxPredictions;

async function initAI() {
    const startBtn = document.getElementById('startAiBtn');
    const aiLoading = document.getElementById('aiLoading');
    startBtn.disabled = true;
    aiLoading.classList.remove('hidden');

    try {
        model = await tmImage.load(TM_URL + "model.json", TM_URL + "metadata.json");
        maxPredictions = model.getTotalClasses();

        webcam = new tmImage.Webcam(300, 300, true);
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loopAI);

        document.getElementById("webcam-container").innerHTML = "";
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        labelContainer.innerHTML = "";
        for (let i = 0; i < maxPredictions; i++) labelContainer.appendChild(document.createElement("div"));
        aiLoading.classList.add('hidden');
    } catch (e) {
        alert('카메라 접근 실패');
        startBtn.disabled = false;
        aiLoading.classList.add('hidden');
    }
}

async function loopAI() { webcam.update(); await predictAI(); window.requestAnimationFrame(loopAI); }

async function predictAI() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const prob = (prediction[i].probability * 100).toFixed(0);
        let label = prediction[i].className;
        if (label.toLowerCase().includes('dog') || label.includes('1')) label = "CANINE (강아지)";
        if (label.toLowerCase().includes('cat') || label.includes('2')) label = "FELINE (고양이)";

        labelContainer.childNodes[i].innerHTML = `
            <div style="margin:10px 0; display:flex; align-items:center; gap:10px;">
                <span style="width:120px; font-size:0.8rem; font-weight:700;">${label}</span>
                <div style="flex:1; background:rgba(255,255,255,0.05); height:8px; border-radius:4px; overflow:hidden;">
                    <div style="width:${prob}%; background:var(--accent-primary); height:100%; box-shadow:0 0 10px var(--accent-primary);"></div>
                </div>
                <span style="width:40px; font-size:0.8rem;">${prob}%</span>
            </div>
        `;
    }
}
