// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";
  
  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
    // img 넣기
  const avatarImg = document.createElement('img');
  avatarImg.className = "discussion__avatar--image"
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = 'avatar of ' + obj.author;
  avatarWrapper.append(avatarImg);
  
    // title 넣기
  const discussion_h2 = document.createElement('h2');
  discussion_h2.className = "discussion__title";
  const new_content = document.createTextNode(obj.title);
  const discussion_link = document.createElement('a');

  discussion_link.href = obj.url; // a태그의 링크 설정
  discussion_link.appendChild(new_content); // a태그의 자식 요소로 text 추가
  discussion_h2.appendChild(discussion_link); // h2의 자식 요소로 a태그 추가
  discussionContent.append(discussion_h2); // 최종 추가

    // 아이디/시간 넣기
  const discussionInfo = document.createElement('div');
  discussionInfo.className = "discussion__information";
  const infoContent = document.createTextNode(`${obj.id} / ${obj.createdAt}`)

  discussionInfo.appendChild(infoContent);
  discussionContent.append(discussionInfo);

    // 체크박스 넣기
  const checkbox = document.createElement('div');
  checkbox.className = "discussion__answered";
  const check_p = document.createElement('p');
  const check_text = document.createTextNode("☑");

  check_p.appendChild(check_text);
  checkbox.appendChild(check_p);
  discussionAnswered.append(checkbox);



  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

// 제출 이벤트 만들기
const submit_btn = document.querySelector(".form__submit>input");
submit_btn.addEventListener("click", () => {
  const name_value = document.querySelector('.form__input--name>input').value;
  const title_value = document.querySelector('.form__input--title>input').value;
  const question_value = document.querySelector('.form__textbox>textarea').value;
  
  let today = new Date();
  const li = convertToDiscussion({
      id: name_value,
      createdAt: today.toLocaleString(),
      title: title_value,
      url: "",
      author: "",
      answer: {
        id: "",
        createdAt: "",
        url: "",
        author: "",
        bodyHTML:
          '',
        avatarUrl: "",
      },
      bodyHTML:
        question_value,
      avatarUrl:
        "",
    }
    );
  
    document.querySelector('.discussions__container').prepend(li);
  }

)