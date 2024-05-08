import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SecondPage_02.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/paymentmethod-03");
  }, [navigate]);

  return (
    <div className="second-02">
      <div className="wrapper">
        <div className="div2">
          <p className="p2">카드 정보를</p>
          <p className="p2">지금 바로 입력해보세요!</p>
        </div>
      </div>
      <div className="container">
        <div className="div2">키키오 택시를 더 편리하게 이용할 수 있습니다</div>
      </div>
      <div className="secondpagebottom">
        <button className="button1">
          <b className="b">나중에 하기</b>
        </button>
        <div className="infoinputbutton">
          <div className="infoinputbutton-child" onClick={onRectangleClick} />
          <b className="b1">추가 정보 입력</b>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
