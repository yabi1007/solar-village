export const PROLOGUE_SCENES = [
  {
    scene: 1,
    title: "쇠락하는 마을",
    text: "한때는 아이들의 웃음소리가 골목마다 울려 퍼지던 곳... 하지만 지금의 {villageName}은 인구 감소와 고령화로 빈집만 늘어가는 쇠락한 농촌 마을입니다. 마을회관에 모인 어르신들은 적막 속에 텔레비전만 바라보실 뿐입니다.",
    bgClass: "bg-decay"
  },
  {
    scene: 2,
    title: "청년의 결심",
    text: "이곳에 유일하게 남아 있던 청년 {leaderName}. 마을의 마지막 불씨를 지키기 위해 결심합니다.\n\n\"{leaderName}: 이대로 우리 {villageName}이 사라지게 둘 순 없어. 내가 직접 발로 뛰어서 마을을 바꿔보겠어!\"",
    bgClass: "bg-resolve"
  },
  {
    scene: 3,
    title: "이장 취임식과 선언",
    text: "주민들의 기대 반, 우려 반 속에 {leaderName} 님은 {villageName}의 최연소 이장으로 공식 부임했습니다.\n\n\"공약: 주민참여형 햇빛소득마을 조성을 통한 마을 재건!\"",
    bgClass: "bg-sunny"
  }
];

// 변수 치환 헬퍼 함수
export function parseText(text, leaderName, villageName) {
  return text
    .replace(/{leaderName}/g, leaderName || "이장")
    .replace(/{villageName}/g, villageName || "햇빛마을");
}

// 엔딩 산출 로직
export function getEnding(villageStats, characterStats) {
  const { satisfaction, energyIndependence, population, villageFunds } = villageStats;

  // 1. 진 엔딩
  if (satisfaction >= 80 && energyIndependence >= 50 && population >= 130) {
    return {
      type: "TRUE",
      title: "🏆 대한민국 1등 햇빛소득마을",
      description: "전국 지자체에서 벤치마킹을 오는 명품 마을이 되었습니다! 청년들이 돌아오고 어르신들의 통장에는 매달 햇빛 연금이 들어옵니다.",
      rank: "S"
    };
  }
  // 2. 경제 중심 엔딩
  if (villageFunds >= 1000 && satisfaction < 50) {
    return {
      type: "WEALTHY",
      title: "💰 부자 마을, 차가운 민심",
      description: "발전 수익은 많이 남겼지만, 성과 배분 과정에서 발생한 주민 간 갈등으로 마을 분위기가 냉랭해졌습니다.",
      rank: "B"
    };
  }
  // 3. 빛좋은 개살구 엔딩
  if (energyIndependence >= 30 && villageFunds < 100) {
    return {
      type: "DEBT",
      title: "📉 빛좋은 개살구 (대출 상환 부담)",
      description: "태양광 시설은 무사히 완공되었으나 대출 원리금 상환 부담이 커서 정작 주민들에게 돌아가는 배당금은 적습니다.",
      rank: "C"
    };
  }
  // 4. 실패 엔딩
  return {
    type: "FAIL",
    title: "🥀 지켜주지 못해 미안해",
    description: "주민 설득과 행정 절차의 벽을 넘지 못하고 사업이 유야무야되었습니다. 마을은 다시 고요해집니다.",
    rank: "F"
  };
}
