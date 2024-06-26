import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import "./InsertPW.css";

const InsertPW = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/sertify");
  }, [navigate]);

  const onInputBoxClick = useCallback(() => {
    navigate("/maincontents/insert-id");
  }, [navigate]);

  return (
    <div className="insta-insert-pw">
      <button className="insta-input-box2" onClick={onInputBoxClick}>
        <div className="insta-div7">다음</div>
      </button>
      <input
        className="insta-input-box3"
        placeholder="비밀번호를 입력하세요"
        type="password"
      />
      <div className="insta-div8">
        <p className="insta-p">
          <span className="insta-span1">6자 이상</span>
          <span className="insta-span2">{`의 `}</span>
          <span className="insta-span3">문자 혹은 숫자</span>
          <span>{`로 `}</span>
        </p>
        <p className="insta-p">비밀번호를 만드세요</p>
      </div>
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="absolute"
        headerTop="0rem"
        headerLeft="-0.125rem"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
    </div>
  );
};

export default InsertPW;
