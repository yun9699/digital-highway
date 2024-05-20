import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";
import axios from "axios"

const Join = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userID: "",
    password: "",
    password2: "",
    phoneNum: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onJoinMainRegisterButtonClick = useCallback(async () => {
    if (formData.password !== formData.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/join", formData);
      if (response.status === 200) {
        alert("회원가입 성공!");
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("회원가입 실패: " + error.response.data.message);
      } else {
        alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  }, [formData, navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="join">
      <footer className="joinfooter">
        <div className="copyright8">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext8">
          <div className="div91">고객센터</div>
          <div className="div92">저작권 보호정책</div>
          <div className="div93">개인정보처리방침</div>
          <div className="div94">제휴제안</div>
          <div className="div95">오시는길</div>
          <div className="div96">이용약관</div>
        </div>
        <div className="title10">디지털지름길</div>
        <img className="logo-icon8" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="joinmain">
        <button
          className="joinmainregisterbutton"
          onClick={onJoinMainRegisterButtonClick}
        >
          <div className="div97">가입하기</div>
        </button>
        <div className="joinmaininputset">
          <input className="idinput5 pn-box" type="tel" name="phoneNum" placeholder="핸드폰번호" value={formData.phoneNum}
          onChange={handleChange}/>
          <input className="idinput4 pw-confirm" type="password" placeholder="비밀번호 확인" name="password2"
          value={formData.password2}
          onChange={handleChange} />
          <input className="idinput3 pw-box" placeholder="비밀번호"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}/>
          <input className="idinput2 id-box" placeholder="아이디"
          type="text"
          name="userID"
          value={formData.userID}
          onChange={handleChange}/>
          <input className="idinput1 name-box" placeholder="이름"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}/>
        </div>
        <div className="joinmainttitle">회원가입</div>
      </main>
      <header className="joinheader">
        <div className="headertitle5">
          <img
            className="headertitleimage-icon7"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div99">디지털지름길</div>
        </div>
        <button className="headerbackbutton8" onClick={onHeaderBackButtonClick}>
          <div className="div100">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default Join;