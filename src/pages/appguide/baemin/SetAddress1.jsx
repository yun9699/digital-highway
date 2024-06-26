import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import "./SetAddress1.css";

const SetAddress1 = () => {
  const { baseAddress, setDetailAddress, detailAddress } = useAddress(); // 전역 주소 상태와 설정 함수 사용
  const navigate = useNavigate();

  // 상세 주소를 기존 주소에 추가하고 다음 페이지로 네비게이트
  const onButtonFrameClick = useCallback(() => {
    if (detailAddress) {
      const fullAddress = `${baseAddress}, ${detailAddress}`; // 기존 주소와 상세 주소 결합
      navigate("/maincontents/main", { state: { address: fullAddress } });
    } else {
      alert("상세 주소를 입력해주세요.");
    }
  }, [navigate, baseAddress, detailAddress]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("배달받고 싶은 주소로 \n [부경대학교 창의관]을 \n 입력해주세요", "배달받고 싶은 주소의 \n 상세주소를 [303호]로 \n 입력해주세요.", "배달 앱의 메인 화면입니다. \n 여기서는 원하는 메뉴를 \n 선택하거나 검색할 수 있습니다. \n 족발/보쌈을 선택해주세요.")},[])

  return (
    <div className="baeman-setaddress2">
      <div className="baeman-button2">
        <div className="baeman-buttonframe2" onClick={onButtonFrameClick} />
        <div className="baeman-buttontext2" onClick={onButtonFrameClick}>완료</div>
      </div>
      <input
        className="baeman-setaddress2-child"
        placeholder="상세주소를 입력해주세요"
        type="text"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
      />
      <div className="baeman-addresstext">{baseAddress}</div>
    </div>
  );
};

export default SetAddress1;
