// import { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import PopupMenubar from "./PopupMenubar";
// import PortalDrawer from "./PortalDrawer";
// import "./Agreement.css";

// const Agreement = () => {
//   const navigate = useNavigate();
//   const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);

//   const onAgreementFooterClick = useCallback(() => {
//     navigate("/maincontents/pass-05");
//   }, [navigate]);

//   const openPopupMenubar = useCallback(() => {
//     setPopupMenubarOpen(true);
//   }, []);

//   const closePopupMenubar = useCallback(() => {
//     setPopupMenubarOpen(false);
//   }, []);

//   return (
//     <>
//       <div className="krail-agreement-04">
//         <button className="krail-agreementfooter" onClick={onAgreementFooterClick}>
//           <b className="krail-b25">다음</b>
//         </button>
//         <main className="krail-agreementmain">
//           <div className="krail-agreementmain3">
//             <div className="krail-agreementmain3c">
//               <input className="krail-rectangle-input" type="checkbox" />
//               <div className="krail-frame">
//                 <b className="krail-b26">
//                   이벤트/혜택/마케팅을 위한 정보 활용에 동의합니다.(선택)
//                 </b>
//                 <b className="krail-b27">
//                   *선택정보에 동의하지 않아도 서비스 이용제한은 없습니다.
//                 </b>
//               </div>
//             </div>
//             <div className="krail-agreementmain3b">
//               <input className="krail-rectangle-input" type="checkbox" />
//               <div className="krail-frame1">
//                 <b className="krail-b28">
//                   선택 개인정보 수집 및 이용에 동의합니다.(선택)
//                 </b>
//                 <b className="krail-b29">
//                   *선택정보에 동의하지 않아도 서비스 이용제한은 없습니다.
//                 </b>
//               </div>
//             </div>
//             <div className="krail-agreementmain3a">
//               <h2 className="krail-h2">개인정보 수집 및 이용에 동의합니다.(필수)</h2>
//               <input className="krail-rectangle-input" type="checkbox" />
//             </div>
//             <div className="krail-agreementmain3ttitle">
//               <div className="krail-rectangle-parent">
//                 <div className="krail-frame-child" />
//                 <b className="krail-b30">약관보기</b>
//               </div>
//               <h1 className="krail-h1">
//                 <ol className="krail-ol">
//                   <li>개인정보 수집 및 이용에 대한 안내</li>
//                 </ol>
//               </h1>
//             </div>
//           </div>
//           <div className="krail-agreementmain2">
//             <div className="krail-agreementmain2line" />
//             <div className="krail-agreementmain2check">
//               <b className="krail-b31">회원약관 동의(필수)</b>
//               <input className="krail-rectangle-input" type="checkbox" />
//             </div>
//             <div className="krail-wrapper">
//               <b className="krail-b32">약관보기</b>
//             </div>
//             <h1 className="krail-h11">
//               <ol className="krail-ol">
//                 <li>코레일톡 회원약관</li>
//               </ol>
//             </h1>
//           </div>
//           <div className="krail-agreementmain1">
//             <div className="krail-agreementmain1line" />
//             <b className="krail-b31">회원약관 전체 동의(필수)</b>
//             <input className="krail-rectangle-input" type="checkbox" />
//           </div>
//         </main>
//         <header className="krail-agreementheader">
//           <b className="krail-b34">회원가입</b>
//           <button className="krail-agreementheaderbutton" onClick={openPopupMenubar}>
//             <div className="krail-agreementheaderbuttonline3" />
//             <div className="krail-agreementheaderbuttonline2" />
//             <div className="krail-agreementheaderbuttonline1" />
//           </button>
//         </header>
//       </div>
//       {isPopupMenubarOpen && (
//         <PortalDrawer placement="Right" onOutsideClick={closePopupMenubar}>
//           <PopupMenubar onClose={closePopupMenubar} />
//         </PortalDrawer>
//       )}
//     </>
//   );
// };

// export default Agreement;


import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupMenubar from "./PopupMenubar";
import PortalDrawer from "./PortalDrawer";
import "./Agreement.css";

const Agreement = () => {
  const navigate = useNavigate();
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);

  const onAgreementFooterClick = useCallback(() => {
    navigate("/maincontents/pass-05");
  }, [navigate]);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  return (
    <>
      <div className="krail-agreement-04">
        <button className="krail-agreementfooter" onClick={onAgreementFooterClick}>
          <b className="krail-b25">다음</b>
        </button>
        <main className="krail-agreementmain">
          <div className="krail-agreementmain3">
            <div className="krail-agreementmain3c">
              <input className="krail-rectangle-input" type="checkbox" />
              <div className="krail-frame">
                <b className="krail-b26">
                  이벤트/혜택/마케팅을 위한 정보 활용에 동의합니다.(선택)
                </b>
                <b className="krail-b27">
                  *선택정보에 동의하지 않아도 서비스 이용제한은 없습니다.
                </b>
              </div>
            </div>
            <div className="krail-agreementmain3b">
              <input className="krail-rectangle-input" type="checkbox" />
              <div className="krail-frame1">
                <b className="krail-b28">
                  선택 개인정보 수집 및 이용에 동의합니다.(선택)
                </b>
                <b className="krail-b29">
                  *선택정보에 동의하지 않아도 서비스 이용제한은 없습니다.
                </b>
              </div>
            </div>
            <div className="krail-agreementmain3a">
              <h2 className="krail-h2">개인정보 수집 및 이용에 동의합니다.(필수)</h2>
              <input className="krail-rectangle-input" type="checkbox" />
            </div>
            <div className="krail-agreementmain3ttitle">
              <div className="krail-rectangle-parent">
                <div className="krail-frame-child" />
                <b className="krail-b30">약관보기</b>
              </div>
              <h1 className="krail-h1">
                <ol className="krail-ol">
                  <li>개인정보 수집 및 이용에 대한 안내</li>
                </ol>
              </h1>
            </div>
          </div>
          <div className="krail-agreementmain2">
            <div className="krail-agreementmain2line" />
            <div className="krail-agreementmain2check">
              <b className="krail-b31">회원약관 동의(필수)</b>
              <input className="krail-rectangle-input" type="checkbox" />
            </div>
            <div className="krail-wrapper">
              <b className="krail-b32">약관보기</b>
            </div>
            <h1 className="krail-h11">
              <ol className="krail-ol">
                <li>코레일톡 회원약관</li>
              </ol>
            </h1>
          </div>
          <div className="krail-agreementmain1">
            <div className="krail-agreementmain1line" />
            <b className="krail-b31">회원약관 전체 동의(필수)</b>
            <input className="krail-rectangle-input" type="checkbox" />
          </div>
        </main>
        <header className="krail-agreementheader">
          <b className="krail-b34">회원가입</b>
          <button className="krail-agreementheaderbutton" onClick={openPopupMenubar}>
            <div className="krail-agreementheaderbuttonline3" />
            <div className="krail-agreementheaderbuttonline2" />
            <div className="krail-agreementheaderbuttonline1" />
          </button>
        </header>
      </div>
      {isPopupMenubarOpen && (
        <PortalDrawer placement="Right" onOutsideClick={closePopupMenubar}>
          <PopupMenubar onClose={closePopupMenubar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Agreement;