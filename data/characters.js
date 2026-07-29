export const CHARACTERS = {
  male: {
    id: "male",
    defaultName: "강태양",
    title: "열정 청년 이장",
    gender: "male",
    description: "패기와 행동력이 뛰어난 청년. 강한 리더십과 지치지 않는 체력으로 마을 주민들을 끌어나갑니다.",
    avatarSvg: `<svg width="80" height="80" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fef08a"/><circle cx="50" cy="48" r="22" fill="#fca5a5"/><circle cx="42" cy="44" r="3.5" fill="#0f172a"/><circle cx="58" cy="44" r="3.5" fill="#0f172a"/><circle cx="36" cy="52" r="3" fill="#f43f5e" opacity="0.6"/><circle cx="64" cy="52" r="3" fill="#f43f5e" opacity="0.6"/><path d="M 42 54 Q 50 62 58 54" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M 24 38 C 24 20, 76 20, 76 38 Z" fill="#2563eb"/><rect x="18" y="35" width="64" height="6" rx="3" fill="#1d4ed8"/><circle cx="50" cy="30" r="4" fill="#facc15"/></svg>`,
    initialStats: {
      leadership: 20, // 보너스 +10
      administration: 10,
      affinity: 10,
      expertise: 5,
      stamina: 110,   // 보너스 +10
      maxStamina: 110
    }
  },
  female: {
    id: "female",
    defaultName: "이햇살",
    title: "기획형 청년 이장",
    gender: "female",
    description: "친화력과 기획력이 돋보이는 청년. 뛰어난 행정 감각과 공감 능력으로 주민들의 마음을 얻습니다.",
    avatarSvg: `<svg width="80" height="80" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#fed7aa"/><circle cx="50" cy="48" r="22" fill="#fca5a5"/><circle cx="42" cy="44" r="3.5" fill="#0f172a"/><circle cx="58" cy="44" r="3.5" fill="#0f172a"/><circle cx="36" cy="52" r="3" fill="#f43f5e" opacity="0.6"/><circle cx="64" cy="52" r="3" fill="#f43f5e" opacity="0.6"/><path d="M 42 54 Q 50 60 58 54" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M 20 40 Q 50 15 80 40 Z" fill="#eab308"/><rect x="15" y="38" width="70" height="5" rx="2" fill="#ca8a04"/><circle cx="50" cy="28" r="4" fill="#ef4444"/></svg>`,
    initialStats: {
      leadership: 10,
      administration: 20, // 보너스 +10
      affinity: 20,       // 보너스 +10
      expertise: 5,
      stamina: 100,
      maxStamina: 100
    }
  }
};

export const INITIAL_VILLAGE_STATS = {
  villageFunds: 500,        // 초기 예산 (만원)
  satisfaction: 50,         // 주민 만족도 (%)
  energyIndependence: 0,    // 에너지 자립도 (%)
  population: 120,          // 마을 인구 (명)
  environment: 30           // 친환경 지수
};
