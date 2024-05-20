import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketInformation.css";

const TicketInformation = () => {
  const navigate = useNavigate();

  const onInformationMainCancelButtonClick = useCallback(() => {
    navigate("/trainselect-09");
  }, [navigate]);

  const onTicketInformationHeaderCloseBuClick = useCallback(() => {
    navigate("/trainselect-09");
  }, [navigate]);

  const onFooterPaymentButtonClick = useCallback(() => {
    navigate("/payment-13");
  }, [navigate]);

  return (
    <div className="ticketinformation-12">
      <main className="ticketinformationmain">
        <div className="ticketinformationmainnoticetex">
          <div className="ticketinformationmainnoticetex1">
            <b className="b134">
              <p className="p52">
                승차권을 2매 이상 구매할 시, 홈페이지ㆍ코레일톡ㆍ역 창구를 통해
                동행자 마일리지 적립을 신청할 수 있습니다.
              </p>
              <p className="p52">{`전달하기 제외승차권 `}</p>
              <p className="p54">
                {" "}
                - 회원 본인만 사용 가능한 할인상품(힘내라청춘, 청소년 드림,
                정기승차권 등)
              </p>
              <p className="p55"> - 좌석을 지정하지 않는 입석, 자유권 승차권</p>
            </b>
            <b className="b135">
              <p className="p56">ㆍ</p>
              <p className="p56">&nbsp;</p>
              <p className="p56">&nbsp;</p>
              <p className="p55">ㆍ</p>
            </b>
          </div>
          <div className="ticketinformationmainnoticetex2">
            <b className="b136">
              <p className="p58">
                코레일톡에서 구입한 승차권을 역창구에서 변경 시 할인이 취소 될
                수 있습니다.
              </p>
              <p className="p58">
                할인 승차권의 할인율은 별도 공지없이 변경 될 수 있습니다.
              </p>
              <p className="p58">
                <span>할인은 움임에만 적용하고 요금은 미적용</span>
                <span className="span">
                  (특실/우등실은 운임과 요금으로 구분)
                </span>
                <span>{`되며, 최저운임 이하로 할인하지 않습니다. `}</span>
              </p>
              <p className="p58">
                <span>{`승차 시 해당열차 승차권을 소지해야 하며, `}</span>
                <span className="span">
                  사진이나 캡쳐한 화면은 유효한 승차권이 아닙니다.
                </span>
              </p>
              <p className="p55">
                반려동물은 다른 고객에게 불편을 주지 않도록 케이스(이동장)에
                반드시 넣어주시기 바라며, 신체 일부가 밖으로 나오지 않도록
                해야합니다.
              </p>
            </b>
            <b className="b137">
              <p className="p56">ㆍ</p>
              <p className="p56">&nbsp;</p>
              <p className="p56">ㆍ</p>
              <p className="p56">&nbsp;</p>
              <p className="p56">ㆍ</p>
              <p className="p56">&nbsp;</p>
              <p className="p56">&nbsp;</p>
              <p className="p56">ㆍ</p>
              <p className="p56">&nbsp;</p>
              <p className="p55">ㆍ</p>
            </b>
          </div>
          <div className="ticketinformationmainnoticetex3">
            <b className="b138">
              <span className="txt14">
                <p className="p58">ㆍ승차권 환불(반환) 위약금 확인하기</p>
                <p className="p55">ㆍ휴대품 세부 승차기준</p>
              </span>
            </b>
            <b className="b139">꼭 알아두세요!</b>
          </div>
        </div>
        <div className="ticketinformationmainnoticetex4">
          <b className="b140">
            <p className="p56">ㆍ결제하지 않으면 예약이 취소됩니다.</p>
            <p className="p56">
              ㆍ승차권을 발권받은 스마트폰에서만 확인할 수 있습니다.
            </p>
            <p className="p56">
              ㆍ할인승차권 이용시에는 관련 신분증 또는 증명서를
            </p>
            <p className="p73"> 소지하셔야 합니다.</p>
          </b>
        </div>
        <div className="informationmainmyreservation">
          <div className="informationmainbasketbutton">
            <div className="div38">장바구니</div>
          </div>
          <button
            className="informationmaincancelbutton"
            onClick={onInformationMainCancelButtonClick}
          >
            <div className="div39">예약취소</div>
          </button>
          <div className="informationmainmyreservationin">
            <div className="div40">
              <span className="txt14">
                <p className="p55">결제기한: 2025년 05월 01일</p>
                <p className="p55">
                  10분 이내 미결제시 승차권이 자동으로 취소됩니다.
                </p>
              </span>
            </div>
            <b className="ktx-162-1014-container">
              <span className="txt14">
                <p className="p55">[KTX-산천 162] 구포(10:14) → 광명(12:52)</p>
                <p className="p55">일반실 15호차 3A</p>
              </span>
            </b>
            <div className="div41">1매</div>
            <b className="b141">2025년 05월 03일 (토)</b>
          </div>
        </div>
      </main>
      <header className="ticketinformationheader">
        <b className="b142">승차권 정보 확인</b>
        <button
          className="ticketinformationheaderclosebu"
          onClick={onTicketInformationHeaderCloseBuClick}
        >
          <img
            className="ticketinformationheaderclosebu-icon"
            alt=""
            src="/Appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
          />
        </button>
      </header>
      <footer className="ticketinformationfooter">
        <button
          className="footerpaymentbutton"
          onClick={onFooterPaymentButtonClick}
        >
          <b className="b143">결제하기</b>
        </button>
        <div className="footerinformationbutton">
          <b className="b144">부가정보</b>
        </div>
      </footer>
    </div>
  );
};

export default TicketInformation;