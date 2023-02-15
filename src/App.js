import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [isOpen, setMenu] = useState(true);
  const [backOpen, setBackOpen] = useState(true);
  const [isOpen1, setMenu1] = useState(true);
  const [backOpen1, setBackOpen1] = useState(true);
  const [isOpen2, setMenu2] = useState(true);
  const [backOpen2, setBackOpen2] = useState(true);
  const [isOpen3, setMenu3] = useState(true);
  const [backOpen3, setBackOpen3] = useState(true);
  const [isOpen4, setMenu4] = useState(true);
  const [backOpen4, setBackOpen4] = useState(true);
  const [isOpen5, setMenu5] = useState(true);
  const [backOpen5, setBackOpen5] = useState(true);
  const [isOpen6, setMenu6] = useState(true);
  const [backOpen6, setBackOpen6] = useState(true);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
    if (!isOpen1) {
      toggleMenu1();toggleOpen1();
    }
    if (!isOpen2) {
      toggleMenu2();toggleOpen2();
    }
    if (!isOpen3) {
      toggleMenu3();toggleOpen3();
    }
    if (!isOpen4) {
      toggleMenu4();toggleOpen4();
    }
    if (!isOpen5) {
      toggleMenu5();toggleOpen5();
    }
    if (!isOpen6) {
      toggleMenu6();toggleOpen6();
    }
  }

  const toggleOpen = () => {
    setBackOpen(backOpen => !backOpen);
  }

  const toggleMenu1 = () => {
    setMenu1(isOpen1 => !isOpen1);
    if (!isOpen) {
      toggleMenu();toggleOpen();
    }
    if (!isOpen2) {
      toggleMenu2();toggleOpen2();
    }
    if (!isOpen3) {
      toggleMenu3();toggleOpen3();
    }
    if (!isOpen4) {
      toggleMenu4();toggleOpen4();
    }
    if (!isOpen5) {
      toggleMenu5();toggleOpen5();
    }
    if (!isOpen6) {
      toggleMenu6();toggleOpen6();
    }
  }

  const toggleOpen1 = () => {
    setBackOpen1(backOpen1 => !backOpen1);
  }

  const toggleMenu2 = () => {
    setMenu2(isOpen2 => !isOpen2);
    if (!isOpen) {
      toggleMenu();toggleOpen();
    }
    if (!isOpen1) {
      toggleMenu1();toggleOpen1();
    }
    if (!isOpen3) {
      toggleMenu3();toggleOpen3();
    }
    if (!isOpen4) {
      toggleMenu4();toggleOpen4();
    }
    if (!isOpen5) {
      toggleMenu5();toggleOpen5();
    }
    if (!isOpen6) {
      toggleMenu6();toggleOpen6();
    }
  }

  const toggleOpen2 = () => {
    setBackOpen2(backOpen2 => !backOpen2);
  }
  const toggleMenu3 = () => {
    setMenu3(isOpen3 => !isOpen3);
    if (!isOpen) {
      toggleMenu();toggleOpen();
    }
    if (!isOpen2) {
      toggleMenu2();toggleOpen2();
    }
    if (!isOpen1) {
      toggleMenu1();toggleOpen1();
    }
    if (!isOpen4) {
      toggleMenu4();toggleOpen4();
    }
    if (!isOpen5) {
      toggleMenu5();toggleOpen5();
    }
    if (!isOpen6) {
      toggleMenu6();toggleOpen6();
    }
  }

  const toggleOpen3 = () => {
    setBackOpen3(backOpen3 => !backOpen3);
  }
  const toggleMenu4 = () => {
    setMenu4(isOpen4 => !isOpen4);
    if (!isOpen) {
      toggleMenu();toggleOpen();
    }
    if (!isOpen2) {
      toggleMenu2();toggleOpen2();
    }
    if (!isOpen3) {
      toggleMenu3();toggleOpen3();
    }
    if (!isOpen1) {
      toggleMenu1();toggleOpen1();
    }
    if (!isOpen5) {
      toggleMenu5();toggleOpen5();
    }
    if (!isOpen6) {
      toggleMenu6();toggleOpen6();
    }
  }

  const toggleOpen4 = () => {
    setBackOpen4(backOpen4 => !backOpen4);
  }
  const toggleMenu5 = () => {
    setMenu5(isOpen5 => !isOpen5);
    if (!isOpen) {
      toggleMenu();toggleOpen();
    }
    if (!isOpen2) {
      toggleMenu2();toggleOpen2();
    }
    if (!isOpen3) {
      toggleMenu3();toggleOpen3();
    }
    if (!isOpen4) {
      toggleMenu4();toggleOpen4();
    }
    if (!isOpen1) {
      toggleMenu1();toggleOpen1();
    }
    if (!isOpen6) {
      toggleMenu6();toggleOpen6();
    }
  }

  const toggleOpen5 = () => {
    setBackOpen5(backOpen5 => !backOpen5);
  }
  const toggleMenu6 = () => {
    setMenu6(isOpen6 => !isOpen6);
    if (!isOpen) {
      toggleMenu();toggleOpen();
    }
    if (!isOpen2) {
      toggleMenu2();toggleOpen2();
    }
    if (!isOpen3) {
      toggleMenu3();toggleOpen3();
    }
    if (!isOpen4) {
      toggleMenu4();toggleOpen4();
    }
    if (!isOpen5) {
      toggleMenu5();toggleOpen5();
    }
    if (!isOpen1) {
      toggleMenu1();toggleOpen1();
    }
  }

  const toggleOpen6 = () => {
    setBackOpen6(backOpen6 => !backOpen6);
  }

  return (
    <div className="background">
      <div className="title">
        <h2>자주 묻는 질문</h2>
        <div className="buttonn">
          <ul style={{listStyle: "none"}}>
            <li className="first">
              <h3 content="넷플릭스란 무엇인가요?">
                <button onClick={()=>{toggleMenu(); toggleOpen()}}>넷플릭스란 무엇인가요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt="">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. <br /><br/>저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.</span></div>
                </div>
            </li>
            <li className="second" style={{marginTop:'10px'}}>
              <h3 content="넷플릭스 요금은 얼마인가요?">
                <button onClick={()=>{toggleMenu1(); toggleOpen1()}}>넷플릭스 요금은 얼마인가요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen1 ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen1 ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen1 ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.</span></div>
                </div>
            </li>
            <li className="second" style={{marginTop:'10px'}}>
              <h3 content="광고형 베이식은 뭐가 다른가요?">
                <button onClick={()=>{toggleMenu2(); toggleOpen2()}}>광고형 베이식은 뭐가 다른가요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen2 ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen2 ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen2 ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">광고형 베이식은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는 방법입니다. 제한된 수의 중간 광고와 함께 다양한 디바이스에서 좋아하는 콘텐츠를 스트리밍할 수 있습니다. 저장 기능은 지원되지 않으며, 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할 수 없습니다. 또한 일부 위치 및 디바이스 제한도 적용됩니다. 자세히 알아보기.</span></div>
                </div>
            </li>
            <li className="second" style={{marginTop:'10px'}}>
              <h3 content="어디에서 시청할 수 있나요?">
                <button onClick={()=>{toggleMenu3(); toggleOpen3()}}>어디에서 시청할 수 있나요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen3 ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen3 ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen3 ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.<br/><br/>iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.</span></div>
                </div>
            </li>
            <li className="second" style={{marginTop:'10px'}}>
              <h3 content="멤버십을 해지하려면 어떻게 하나요?">
                <button onClick={()=>{toggleMenu4(); toggleOpen4()}}>멤버십을 해지하려면 어떻게 하나요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen4 ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen4 ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen4 ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.</span></div>
                </div>
            </li>
            <li className="second" style={{marginTop:'10px'}}>
              <h3 content="넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?">
                <button onClick={()=>{toggleMenu5(); toggleOpen5()}}>넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen5 ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen5 ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen5 ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.</span></div>
                </div>
            </li>
            <li className="second" style={{marginTop:'10px'}}>
              <h3 content="아이들이 넷플릭스를 봐도 좋을까요?">
                <button onClick={()=>{toggleMenu6(); toggleOpen6()}}>아이들이 넷플릭스를 봐도 좋을까요?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isOpen6 ? "default-ltr-cache-1bzktvf" : "default-ltr-cache-13srxut"} alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path></svg>
                </button>
              </h3>
              <div className={backOpen6 ? "backgroundbutton1" : "backgroundbutton"}>
                <div id="content--temp--0" aria-labelledby="button--temp--0" role="region" data-is-open="false" content="[object Object]" className={isOpen6 ? "default-ltr-cache-e0ug1a" : "default-ltr-cache-1xe7mbe"}><span id="" data-uia="">멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.<br/><br/>키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.</span></div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;