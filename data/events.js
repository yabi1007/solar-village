export const EVENTS = [
  {
    id: "evt_001",
    year: 1,
    week: 1,
    type: "main",
    title: "마을 어르신들께 취임 인사",
    description: "최연소 이장으로 부임했습니다. 마을회관에 모여 계신 어르신들께 첫인사를 드려야 합니다.",
    options: [
      {
        text: "막걸리와 정성스러운 선물을 준비해 친근하게 다가간다.",
        cost: { villageFunds: 30, stamina: 10 },
        reward: { affinity: 5, satisfaction: 10 },
        message: "어르신들이 싹싹한 새 이장의 모습에 미소를 지으십니다."
      },
      {
        text: "마을 재건을 위한 정돈된 공약 발표회를 갖는다.",
        cost: { stamina: 15 },
        reward: { leadership: 5, administration: 5 },
        message: "어르신들이 고개를 끄덕이며 야무진 모습에 기대감을 표합니다."
      }
    ]
  },
  {
    id: "evt_002",
    year: 1,
    week: 12,
    type: "main",
    title: "첫 주민 설명회와 소문",
    description: "\"태양광 세우면 전자파 나와서 농사 망친다는데?\" 어르신들의 우려와 소문이 번집니다.",
    options: [
      {
        text: "공인 기관의 실증 데이터로 과학적으로 설득한다. (행정력 15 이상)",
        req: { stat: "administration", value: 15 },
        cost: { stamina: 20 },
        reward: { expertise: 10, satisfaction: 10 },
        failReward: { satisfaction: -10, stamina: -20 },
        message: "객관적인 자료로 근거 없는 소문을 차단하고 신뢰를 얻었습니다."
      },
      {
        text: "어르신들 댁을 일일이 방문해 이야기하며 안심시킨다.",
        cost: { stamina: 30 },
        reward: { affinity: 10, satisfaction: 5 },
        message: "진심 어린 설득에 어르신들의 마음이 조금씩 열립니다."
      }
    ]
  },
  {
    id: "evt_003",
    year: 1,
    week: 36,
    type: "main",
    title: "협동조합 발기인 모집",
    description: "햇빛소득 협동조합을 정식 설립하기 위해 뜻을 함께할 발기인 5인을 모아야 합니다.",
    options: [
      {
        text: "마을의 영향력 있는 청년회장과 노인회장을 먼저 포섭한다.",
        cost: { stamina: 20 },
        reward: { leadership: 10, satisfaction: 5 },
        message: "주요 인사들의 가입으로 조합원 모집에 탄력이 붙습니다."
      },
      {
        text: "소외된 소농과 빈집 가구를 찾아가 혜택을 꼼꼼히 설명한다.",
        cost: { stamina: 25 },
        reward: { affinity: 10, population: 3 },
        message: "마을 전반에 걸친 균등한 참여 기반을 마련했습니다."
      }
    ]
  },
  {
    id: "evt_004",
    year: 2,
    week: 60,
    type: "main",
    title: "정부 공모전 신청서 작성",
    description: "햇빛소득마을 지원사업 공모가 발표되었습니다. 밤을 새워 완벽한 사업 계획서를 써야 합니다.",
    options: [
      {
        text: "마을의 친환경 가치와 주민 복지 혜택을 강조해 작성한다.",
        cost: { stamina: 25 },
        reward: { administration: 10, environment: 5 },
        message: "감동적이면서도 체계적인 사업계획서가 완성되었습니다."
      },
      {
        text: "외부 전문가에게 자문을 구해 정밀한 경제성 분석을 첨부한다.",
        cost: { villageFunds: 50, stamina: 10 },
        reward: { expertise: 15, villageFunds: 100 },
        message: "완성도 높은 서류로 가산점을 확보했습니다."
      }
    ]
  },
  {
    id: "evt_005",
    year: 2,
    week: 80,
    type: "main",
    title: "금융 지원 저리 융자 심사",
    description: "사업비의 85%를 대출받기 위한 정책금융 심사관 면담이 진행됩니다.",
    options: [
      {
        text: "마을 협동조합의 출자 구조와 주민 동의율을 강점으로 제시한다.",
        cost: { stamina: 15 },
        reward: { leadership: 10, villageFunds: 300 },
        message: "탄탄한 주민참여 구조를 인정받아 최저 금리 승인을 받았습니다."
      },
      {
        text: "발전 수익을 통한 융자 원리금 상환 계획을 수학적으로 증명한다.",
        cost: { stamina: 20 },
        reward: { expertise: 15, villageFunds: 400 },
        message: "완벽한 재무 모델링으로 심사 위원들의 찬사를 받았습니다."
      }
    ]
  },
  {
    id: "evt_006",
    year: 2,
    week: 100,
    type: "main",
    title: "군청 인허가 이격거리 보완 요구",
    description: "도로 이격 거리 규제로 인해 발전 부지 인허가가 보류될 위기입니다.",
    options: [
      {
        text: "군청 담당자를 찾아가 주민참여형 특례 조례 적용을 협의한다. (행정력 20 이상)",
        req: { stat: "administration", value: 20 },
        cost: { stamina: 20 },
        reward: { administration: 10, satisfaction: 5 },
        failReward: { satisfaction: -5, stamina: -10 },
        message: "행정력을 발휘해 이격거리 완화 승인을 이끌어냈습니다."
      },
      {
        text: "사업 부지 경계를 안쪽으로 약간 축소하여 수정 제출한다.",
        cost: { villageFunds: 30, stamina: 15 },
        reward: { expertise: 5 },
        message: "부지 규모는 약간 줄었지만 무사히 인허가를 통과했습니다."
      }
    ]
  },
  {
    id: "evt_007",
    year: 3,
    week: 115,
    type: "main",
    title: "태양광 부지 입지 확정",
    description: "어떤 유형의 발전 시설을 구축할지 최종 선택해야 합니다.",
    options: [
      {
        text: "마을회관 및 공공건물 지붕 태양광 (안전/주민동의 용이)",
        cost: { villageFunds: 100 },
        reward: { satisfaction: 10, energyIndependence: 15 },
        message: "민원 없이 안정적이고 깔끔한 지붕 태양광을 확정했습니다."
      },
      {
        text: "농지와 발전을 병행하는 영농형 태양광 (농가소득 증대)",
        cost: { villageFunds: 200 },
        reward: { energyIndependence: 30, villageFunds: 150 },
        message: "농가 소득과 전력 생산을 동시에 잡는 혁신 모델을 채택했습니다."
      }
    ]
  },
  {
    id: "evt_008",
    year: 3,
    week: 135,
    type: "main",
    title: "시공 과정 소음 및 도로 민원",
    description: "대형 자재 트럭 통행으로 인한 소음과 먼지로 일부 어르신들이 공사를 막아섰습니다.",
    options: [
      {
        text: "공사 현장에 상주하며 먼지 방지망 설치 및 차량 우회로를 확보한다.",
        cost: { stamina: 30, villageFunds: 20 },
        reward: { satisfaction: 10, leadership: 5 },
        message: "발 빠른 조치로 어르신들의 불편을 최소화했습니다."
      },
      {
        text: "마을 공용 세차/청소 자원봉사를 추진하고 마을 잔치를 연다.",
        cost: { villageFunds: 50 },
        reward: { affinity: 15, satisfaction: 15 },
        message: "주민들의 마음을 다독이며 화기애애하게 공사를 진행합니다."
      }
    ]
  },
  {
    id: "evt_009",
    year: 4,
    week: 165,
    type: "main",
    title: "첫 햇빛 연금(배당금) 지급식",
    description: "상업 운전 시작 후 첫 번째 발전 수익 배당금이 가구별 통장에 입금됩니다.",
    options: [
      {
        text: "균등 배분을 원칙으로 하여 전 가구에 동일하게 지급한다.",
        cost: { stamina: 10 },
        reward: { satisfaction: 20, affinity: 10 },
        message: "모든 주민이 소외 없이 기뻐하며 마을에 웃음이 넘칩니다."
      },
      {
        text: "일부를 마을 복지기금으로 적립하고 배당금을 분배한다.",
        cost: { stamina: 10 },
        reward: { villageFunds: 200, satisfaction: 10 },
        message: "미래 마을 복지를 위한 단단한 재정이 마련되었습니다."
      }
    ]
  },
  {
    id: "evt_010",
    year: 5,
    week: 260,
    type: "main",
    title: "5년 임기 종료 및 최종 평가",
    description: "햇빛소득마을 이장으로서의 5년 임기가 끝났습니다. 주민들이 마을회관에 모여 결과를 기다립니다.",
    options: [
      {
        text: "주민들과 함께 지난 5년간의 성과를 확인한다.",
        cost: {},
        reward: {},
        message: "최종 평가 및 엔딩 결과로 이동합니다."
      }
    ]
  }
];
