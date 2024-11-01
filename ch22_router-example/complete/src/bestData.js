//배열 데이터만 담을 js파일
const initialBests = [
    {
        id: 1,
        name: "[프랑스] 오르세 프리미엄투어[오후]",
        price: 20000,
        descript: "프랑스 3대 미술관 중 하나로 뽑히며, 반고흐, 마네, 모네 등의 작품을 감상",
        image:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fk0adz%2Fbtsydna0uHj%2F4EvYJ8EPiIOkSTazEroRQk%2Fimg.jpg",
        like: false
    },
    {
        id: 2,
        name: "[이탈리아] 피렌체투어(우피치포함)",
        price: 23000,
        descript: "꽃의 도시. 피렌체 역사 중 가장 화려했던 14세기 르네상스 시대로의 여행",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbmakiu%2FbtsyenIDeD8%2FKGR5sLarN6EEcLBtAVLv80%2Fimg.jpg",
        like: true
    }, 
    {
        id: 3,
        name: "[헝가리] 부다페스트 야경투어",
        price: 25000,
        descript: "유럽 3대 야경 중 하나인 부다페스트 야경은 안전하고 아름답게 여행",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl6QZI%2FbtsynB6Vt9I%2Fq3tczSGTJaKyzPIiFlvM60%2Fimg.jpg",
        like: true
    },
    {
        id: 4,
        name: "[체코] 베스트 체스키 끄르믈로프투어",
        price: 25000,
        descript: "마치 동화에 나올 법한 빨간 지붕 중세마을이 그림처럼 소담하게 들어 앉아 있는 곳",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaN3Yb%2FbtsypwK3WoE%2FNtZmJDEaG93iJhyKBnRMw1%2Fimg.jpg",
        like: false
    },
    {
        id: 5,
        name: "[크로아티아] 두브로브니크 스르지산 투어",
        price: 20000,
        descript: "왕좌의 게임 촬영지, 두브로브니크 시내를 한눈에 볼 수 있는 스르지산 투어",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcfnV8L%2FbtsyaUglYOD%2F3wDuGISkVsw106pjsn3KA0%2Fimg.jpg",
        like: false
    }, 
    {
        id: 6,
        name: "[프랑스] 루브르 프리미엄투어(소규모/오전)",
        price: 25000,
        descript: "건축 규모, 소장품 수, 역사의 시간 등 모든 부분의 세계 최고 프랑스 박물관",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL8rOa%2FbtsygnaTPE5%2FNPfNWgUggkVb1asF3J5s30%2Fimg.jpg",
        like: false
    }, 
    {
        id: 7,
        name: "[이탈리아] 남부환상투어(~10/27)",
        price: 70000,
        descript: "내셔널지오그래픽 트레블러 선정, 죽기 전에 꼭 가봐야할 50곳 중 1위",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclWmDF%2FbtsybQLxx0X%2FC4OIeCBGtFJUFSqxZIjfxK%2Fimg.jpg",
        like: true
    }
];
  
export { initialBests };