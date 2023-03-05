// 휠을 굴렸을 때 스크롤이 되지 않도록 하려면 wheel의 기본 이벤트인 scroll을 제거를 해줘야한다.
    // passive는 addeventListener() 옵션 중에 1개이다.
    // passive 옵션은 true와 false 값을 가지게 된다.
    // flase인 경우 : preventDefault()를 이용해서 이벤트 자체를 막을 수 있기 때문에, 
    //              브라우저는 scroll를 계속할지 안할지를 매번 검사하게 된다. 
    //              passive옵션의 기본값이다.
    // true인 경우: 스크롤 이벤트를 막지 않겠다는 의미이다. preventDefalt()를 사용할 수 없다.
    // 그러나, 기본 이벤트를 제거해도 여전히 스크롤이 되고 오류가 발생된다.
    // 그래서 패시브 모드를 끈 상태에서 기본 이벤트를 제거해야 되는 것이다.
    // 무슨 말이지?ㅋㅋㅋㅋㅋ
window.addEventListener("wheel", function(e) {
    e.preventDefault();
}, {passive: false});


const html = document.querySelector("html");
const pages = document.querySelectorAll(".content");
const lastPage = pages.length; // 마지막 페이지의 번호
let page = 1; // 뷰포트에 표시되는 페이지의 번호

html.animate({scrollTop:0}, 10); // 문서가 로드되면 첫 페이지 시작

window.addEventListener("wheel", function(e) { // 이벤트 핸들러로 마우스 휠을 굴리면 발생하는 이벤트
    // 아래에서 호출된 animationPlayState 메서드로 생성된 스크롤 효과가 쌓이지 않도록 
    // 스크롤이 진행되는 동안 발생하는 wheel 이벤트는 무시한다.
    if (html.style.animationPlayState === "running") return;

    // e(이벤트) deltaY(마우스 휠을 어느 방향으로 얼만큼 굴렸는지) 
    // deltaY가 양수이면 아래쪽, 음수이면 위쪽으로 굴린 것이다.
    if(e.deltaY > 0) {
        if (page === lastPage) return; // 마지막 페이지가 되면 이벤트 핸들러 종료

        page++; // 스크롤을 아래로 했으면 페이지 +1
    }
    else if (e.deltaY < 0) {
        if (page === 1) return; // 첫 번째 페이지인 경우에도 이벤트 핸들러 종료(올라갈 곳이 없으니 멈춰)

        page--; // 스크롤을 위로 위로 했으면 -1
    }

    const posTop = (page - 1) * window.innerHeight; // 이동할 페이지의 번호에 스크롤할 위치 계산

    this.window.scrollTo({top: posTop, behavior: "smooth"}); // 계산한 위치로 이동
})