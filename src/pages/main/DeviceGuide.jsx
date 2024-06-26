import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; //useChatBot context
import ChatBot from "../../components/ChatBot"; //ChatBot component
import MainHeader from "../../components/main/MainHeader"
import MainFooter from "../../components/main/MainFooter";
import "./DeviceGuide.css";

const DeviceGuide = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // ChatBot Statement

  const onDeviceGuideButton6Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartphoneImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onChromeImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton5Click = useCallback(() => {
    setSelectedCategory("chrome")
    navigate("/devicesubpage",{state:{selectedCategory:"chrome"}});
  }, [navigate,setSelectedCategory]);

  const onSmartwatchImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton3Click = useCallback(() => {
    setSelectedCategory("kiosc")
    navigate("/devicesubpage",{state:{selectedCategory:"kiosc"}});
  }, [navigate,setSelectedCategory]);


  const onDeviceGuideButton4Click = useCallback(() => {
    setSelectedCategory("smartwatch")
    navigate("/devicesubpage",{state:{selectedCategory:"smartwatch"}});
  }, [navigate,setSelectedCategory]);

  const onKioskImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton2Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onEarbudsImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton1Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartTVImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/appguide");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/info");
  }, [navigate]);

  const onStartButtonClick = () => {
    console.log('Start button clicked');
    try {
      activateChatBot();
    } catch (error) {
      console.error('Error activating ChatBot:',error);
    }
  };

  return (
    <div className="mainpage-deviceguide">
      <div className="mainpage-appguidemain1">
        <div className="mainpage-title15">전자기기 가이드</div>
        <div className="mainpage-deviceguidebuttonset">
          <button
            className="mainpage-deviceguidebutton6"
            onClick={onDeviceGuideButton6Click}
          >
            <img
              className="mainpage-smartphone-icon"
              alt=""
              src="main/smartphone@2x.png"
              onClick={onSmartphoneImageClick}
            />
          </button>
          <button
            className="mainpage-deviceguidebutton5"
            onClick={onDeviceGuideButton1Click}
          >
            <img
              className="mainpage-smartphone-icon"
              alt=""
              src="main/smarttv@2x.png"
              onClick={onSmartTVImageClick}
            />
          </button>
          <button
            className="mainpage-deviceguidebutton4"
            onClick={onDeviceGuideButton2Click}
          >
            <img
              className="mainpage-smartphone-icon"
              alt=""
              src="main/earbuds@2x.png"
              onClick={onEarbudsImageClick}
            />
          </button>
          <button
            className="mainpage-deviceguidebutton3"
            onClick={onDeviceGuideButton5Click}
          >
            <img
              className="mainpage-smartphone-icon"
              alt=""
              src="main/chrome@2x.png"
              onClick={onChromeImageClick}
            />
          </button>
          <button
            className="mainpage-deviceguidebutton2"
            onClick={onDeviceGuideButton4Click}
          >
            <img
              className="mainpage-smartphone-icon"
              alt=""
              src="main/smartwatch@2x.png"
              onClick={onSmartwatchImageClick}
            />
          </button>
          <button
            className="mainpage-deviceguidebutton1"
            onClick={onDeviceGuideButton3Click}
          >
            <img
              className="mainpage-smartphone-icon"
              alt=""
              src="main/kiosk@2x.png"
              onClick={onKioskImageClick}
            />
          </button>
        </div>
        <div className="mainpage-guidescrollbackground1" />
        <div className="mainpage-appguidemaincontentbanner1">
          <div className="mainpage-div184">
            <span className="mainpage-txt">
              <p className="mainpage-deviceguide-ment">
                키오스크와 같은 다양한 디지털 기기가 많아서 힘드신 분들을 위해
              </p>
              <p className="mainpage-deviceguide-ment">자주 사용하는 기능들만 모아서 알려드립니다</p>
              <p className="mainpage-deviceguide-ment">원하는 기기를 선택한 뒤 직접 따라해보세요!</p>
            </span>
          </div>
        </div>
        <div className="mainpage-appguidemainbuttonset11">
          <button className="mainpage-button26" onClick={onButtonClick}>
            커뮤니티
          </button>
          <div className="mainpage-infomainbuttonset1line6" />
          <button className="mainpage-button27">전자기기 가이드</button>
          <div className="mainpage-infomainbuttonset1line7" />
          <button className="mainpage-button28" onClick={onButton2Click}>
            앱 배우기
          </button>
          <div className="mainpage-infomainbuttonset1line8" />
          <button className="mainpage-button29" onClick={onButton3Click}>
            정보제공
          </button>
        </div>
        <div className="mainpage-title15">전자기기 가이드</div>
        <section className="mainpage-chatbot6" style = {chatBotStyle}>
          <div className="mainpage-box-icon10"/>
          <div className="mainpage-intro11">
            <span className="mainpage-txt">
              <p className="mainpage-p28">어려운 단어가 있으신가요?</p>
              <p className="mainpage-p28">이제 제가 도와드릴게요</p>
            </span>
          </div>
          <button className="mainpage-start10" onClick={onStartButtonClick}>
            <div className="mainpage-start-child7">
              <div className="mainpage-div185">시작하기</div>
            </div>
          </button>
          <img className="mainpage-character-icon10" alt="" src="main/no_jaggle.png" />
          {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
        </section>
      </div>
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default DeviceGuide;
