
import { Fragment, useEffect, useRef, useState } from 'react';
import ModalBasic from './ModalBasic';
import './Room.css';
import styled from './DataTest.module.css';
import Kakao from './Kakao';
import { useParams } from 'react-router-dom';
import Footer from '../component/Footer'
import Calendar from './Calendar';


const Room = () => {

    // hostingNumber 받기
    let {hostingNumber} = useParams();

    //모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    //모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };
    const [data, setData] = useState();
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/devTozi/react-airbnb/master/bnb%EB%8D%B0%EC%9D%B4%ED%84%B0.json")
            .then(res => res.json())
            .then(data => { setData(data); });
    }, [])

    const src = "https://firebasestorage.googleapis.com/v0/b/deploytest-3f355.appspot.com/o/";
    const alt = "?alt=media";

    const modalOn = () => {
        // 스크롤바 처리용
        document.body.style.overflow = 'hidden';
        modalRef.current.style.display = 'block';
    }
    const modalOff = (e) => {
        if (e.target.className === styled.modal || e.target.className === styled.modal_close) {
            modalRef.current.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    const modalRef = useRef();

    return (

        <Fragment>
            {data === undefined ? '로딩중' :
                <div>
                    <div className='content_top'>
                        {/*============== 숙소 제목 ===============*/}
                        <div>
                            <div className="title">
                                <div className=''>
                                    <h1>{data[hostingNumber].title}</h1>
                                </div>
                                <div className='inner-title'>
                                    <div className='left'>
                                        <span>★ {data[hostingNumber].score} ㆍ</span>
                                        <a href='#' onClick={showModal} >후기 {data[hostingNumber].review.length}개</a>ㆍ {/* 팝업 */}
                                        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                                        <img src="/medal.png" alt='슈퍼호스트아이콘' />
                                        <span>슈퍼호스트ㆍ</span>
                                        <a href="#" >{data[hostingNumber].address.join(',')}</a> {/* 팝업 */}

                                    </div>

                                    <div className='right'>
                                        <a href='#'><img src='/share.png' alt="공유아이콘" className='share' />공유하기</a>
                                        <a href='#'><img src='/heart.png' alt='하트아이콘' className='heart' />저장</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*============ 숙소 사진 ===============*/}
                        <div>
                        <div className='picture' >{/* 팝업 */}
                            <div className='room1'>
                                <img src={src + data[hostingNumber].img[0] + alt} alt='숙소사진1' target="_self" onClick={modalOn} />
                            </div>
                            <div className='rooms'>
                                <img src={src + data[hostingNumber].img[1] + alt} alt='숙소사진2' className='room2' target="_self" onClick={modalOn} />
                                <img src={src + data[hostingNumber].img[2] + alt} alt='숙소사진3' className='room2' target="_self" onClick={modalOn} />
                                <img src={src + data[hostingNumber].img[3] + alt} alt='숙소사진4' className='room3' target="_self" onClick={modalOn} />
                                <img src={src + data[hostingNumber].img[4] + alt} alt='숙소사진5' className='room3 room5' target="_self" onClick={modalOn} />
                            </div>
                        </div>
                        </div>

                        {/*============== 사진 밑에 숙소 광고 내용 ==============*/}
                        <div className='host_reservation_all'>
                            <div className='room_info'>

                                {/*=============== 오른쪽에 예약 창 ==============*/}
                                <div className='reservation_right'>
                                    <div className='res_box'>
                                        <div className='res_innerbox'>
                                            <div className='res_detail'>
                                                {/* 가격 및 후기 부분 */}
                                                <div className='cost'>
                                                    {/* <div className='inner_cost'> */}
                                                    <div className='pernight_cost'>

                                                        <span className='price'>₩{data[hostingNumber].cost}</span>
                                                        <p>/박</p>

                                                        <div className='review_right'>
                                                            <span className='review'>★ {data[hostingNumber].score}ㆍ</span>
                                                            <a href='#'>후기 {data[hostingNumber].review.length}개</a>
                                                        </div>
                                                    </div>

                                                    {/* </div> */}
                                                </div>

                                                {/* 예약 날짜 및 인원 입력 칸 */}
                                                <div className='res_table'>
                                                    <div className='check_in'>
                                                        <h6>체크인</h6>
                                                        <div>날짜 추가</div>
                                                    </div>
                                                    <div className='check_out'>
                                                        <h6>체크아웃</h6>
                                                        <div>날짜 추가</div>
                                                    </div>
                                                    <div className='total_personnel'>
                                                        <h6>인원</h6>
                                                        <div>게스트1명 <p>∨</p></div>
                                                    </div>
                                                </div>
                                                <div className='res_btn'>
                                                    <button>예약 가능 여부 보기</button>
                                                </div>

                                               
                                            </div>
                                          
                                        </div>
                                           {/* 숙소 신고하기 */}
                                           <div className='report_room'>
                                                    <div className='flag'>
                                                        <img src='/flag.png' alt='깃발아이콘' /><a>숙소 신고하기</a>
                                                    </div>
                                                </div>

                                    </div>

                                </div>


                                <div className='hosting_left'>
                                    {/*============ 숙소 소개 ===========*/}
                                    <div className='hosting_title_box'>
                                        <div className='hosting_title_innerbox'>
                                            <div className='hosting_title'>
                                                <h2>{data[hostingNumber].host}님이 호스팅하는 트리하우스</h2>
                                                <p>최대 인원 {data[hostingNumber].max}명ㆍ침실 {data[hostingNumber].bedroom}개ㆍ침대 {data[hostingNumber].bed}개ㆍ간이 욕실 {data[hostingNumber].bathroom}개 </p>
                                            </div>
                                            <button className='host_btn'><img src='/host.png' alt='호스트이미지' /></button>
                                        </div>
                                    </div>


                                    {/*================== 숙소 광고 내용 ===================*/}
                                    <div className='hosting_promotion'>
                                        <div className='promotion_contents'>

                                            <img src='/medal1.png' alt='슈퍼호스트아이콘' />
                                            <div className='promotion_contents_detail'>
                                                <h4>{data[hostingNumber].host}님은 슈퍼호스트입니다</h4>
                                                <p>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록
                                                    <br />최선을 다하는 호스트 입니다.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='promotion_contents'>

                                            <img src='/location.png' alt='위치마크아이콘' />

                                            <div className='promotion_contents_detail'>
                                                <h4>훌륭한 숙소 위치</h4>
                                                <p>최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.</p>
                                            </div>
                                        </div>

                                        <div className='promotion_contents promotion_contents3'>

                                            <img src='/calendar.png' alt='달력아이콘' />

                                            <div className='promotion_contents_detail'>
                                                <h4>3월 21일 전까지 무료로 취소하실 수 있습니다.</h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/*================ 에어커버(예약 보호 보장 장치) ===============*/}
                                    <div className='protect_res'>
                                        <div className='aircover'>
                                            <img src='/aircover.png' alt='에어커버이미지' />
                                            <div>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</div>
                                            <a href='#'>더 알아보기</a>
                                        </div>
                                    </div>

                                    {/*==================== 숙소 설명 ================*/}
                                    <div className='translate'>
                                        <div>
                                            {<img src='/translate.png' alt='번역아이콘' />}
                                            <span>일부 정보는 자동 번역되었습니다. <a href='#'>원문 보기</a></span>
                                        </div>
                                    </div>

                                    <div className='description'>
                                        <div>
                                            <p>
                                                이 독특한 현대적인 Birdbox에서 휴식을 취하고 활력을 되찾아보세요.
                                                최고의 편안함 속에서 자연과 가깝게 느껴보세요.
                                                Blegja와 Førdefjord의 장대한 산맥 전망을 즐기세요.
                                                새들이 지저귀고, 강이 흐르고, 나무가 바람에 흔들리는 진정한 노르웨이 시골의 고요함을 느껴보세요.
                                                전원 지역을 둘러보고, 피요르드로 걸어가 수영을 즐기고, 주변 산을 하이킹하고, 좋은 책과 명상으로 휴식을 취하세요.
                                                독특한 Birdbox 경험을 즐기세요.<br />...
                                            </p>
                                        </div><br />
                                        <a href='#'>더 보기</a><span>＞</span>
                                    </div>

                                    {/*================= 숙박 장소 ==================*/}
                                    <div className='place'>
                                        <div className='place_title'>
                                            <h2>숙박 장소</h2>
                                        </div>
                                        <div className='place_outerbox'>
                                            <div className='place_innerbox'>
                                                <div className='bed'><img src='/bed.png' alt='침대아이콘' /></div>
                                                <div className='bedroom'><h3>침실</h3></div>
                                                <p>킹사이즈 침대 {data[hostingNumber].bed}개</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*================= 숙박 편의시설 =================*/}
                                    <div className='facility'>

                                        <div className='facility_title'>
                                            <h2>숙소 편의시설</h2>
                                        </div>

                                        <div>
                                            <div className='facility_content'>
                                                <div className='facility_detail facility_detail1'>
                                                    <img src='/car.png' alt='자동차아이콘' />
                                                    <p>{data[hostingNumber].facility[2]}</p>
                                                </div>
                                            </div>

                                            <div className='facility_content'>
                                                <div className='facility_detail facility_detail1'>
                                                    <img src='/calendar.png' alt='달력아이콘' />
                                                    <p>장기 숙박 가능</p>
                                                </div>
                                            </div>

                                            <div className='facility_content'>
                                                <div className='facility_detail facility_detail2'>
                                                    <img src='/tv.png' alt='tv아이콘' />
                                                    <p>{data[hostingNumber].facility[3]}</p>
                                                </div>
                                            </div>

                                            <div className='facility_content'>
                                                <div className='facility_detail facility_detail2'>
                                                    <img src='/paw.png' alt='동물발자국아이콘' />
                                                    <p>반려동물 입실 가능</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='facility_btn'>
                                            <button>편의시설 9개 모두 보기</button>
                                        </div>
                                    </div>

                                    {/*=============== 달력 =================*/}
                                    <div className="calendar_wrap">
                                        <Calendar/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className='content_bottom'>
                        <div className='review_wrap'>
                            <hr style={{marginBottom : "40px", backgroundColor:"#dfe6e8"}} />
                            <div className='review_score'>
                                <div className='score'>
                                    ★ {data[hostingNumber].score} ㆍ 후기 {data[hostingNumber].review.length}개
                                </div>
                                <div className='score2'>
                                    <div className='score3'>
                                        <div className='left'>
                                            청결도
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[hostingNumber].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            정확성
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[hostingNumber].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            의사소통
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[hostingNumber].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            위치
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[hostingNumber].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            체크인
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[hostingNumber].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            가격 대비 만족도
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[hostingNumber].score}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='review_list'>
                                {data[hostingNumber].review.map((item, idx) =>
                                    <div className='review' key={idx}>
                                        <div className='review_info'>
                                            <div style={{ verticalAlign: "top" }}><img src={src + data[hostingNumber].img[0] + alt} /></div>
                                            <div className='info'>
                                                <span style={{ fontSize: "19px", fontWeight: "600" }}>{item.id}</span><br />
                                                <span style={{ fontSize: "13px", color: '#777' }}>{item.date}</span>
                                            </div>
                                        </div>
                                        <div className='review_comment'>
                                            {item.comment}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button className='review_btn'>후기 {data[hostingNumber].review.length}개 모두 보기</button>
                            </div>
                        </div>

                        <div className='map_wrap'>
                        <hr style={{backgroundColor:"#dfe6e8"}} />
                            <h3 style={{ marginTop: '55px' }}>호스팅 지역</h3>
                            {/* 카카오 지도 API */}
                            <Kakao location={data[hostingNumber].location} />
                            <div className='review_address'>
                                {data[hostingNumber].address.join(', ')}
                            </div>
                            <hr style={{backgroundColor:"#dfe6e8"}} />
                        </div>

                        <div className='hostInfo_wrap'>
                            <div className='hostInfo'>
                                <div style={{ marginBottom: "15px" }}>
                                    <img src={src + data[hostingNumber].img[0] + alt} style={{ verticalAlign: "top", width: "60px", height: "60px", borderRadius: "30px" }} />
                                    <div style={{ display: "inline-block", marginLeft: "10px", height: "60px", paddingTop: "6px" }}>
                                        <span style={{ fontSize: "18px", fontWeight: "600" }}>호스트: {data[hostingNumber].host}님</span><br />
                                        <span style={{ fontSize: "14px", color: "#999" }}>회원 가입일: 2023년 1월</span>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                    <span style={{ fontSize: "17px" }}>★ </span>
                                    <span style={{ fontSize: "15px" }}>후기 {data[hostingNumber].review.length}개&emsp;&emsp;</span>
                                    <span style={{ fontSize: "17px" }}>&#9745; </span>
                                    <span style={{ fontSize: "15px" }}>본인 인증 완료&emsp;&emsp;</span>
                                    <span style={{ fontSize: "18px" }}>&#127894; </span>
                                    <span style={{ fontSize: "15px" }}>슈퍼호스트</span>
                                </div>
                                <div style={{ marginBottom: "25px" }}>
                                    <span>Born and raised in a small town on the west coast of Norway between the mouintains and fjords. Im working as a ship designer at Brødrene Aa as well as designing tiny cabins and workspaces with attention to detail and connection to nature in Livit, founded by me and 2 partners. Also im a father currently enjoying the baby life!</span>
                                </div>
                                <div style={{ marginBottom: "25px" }}>
                                    <span style={{ fontWeight: "600" }}>숙박 중 게스트와의 교류</span><br />
                                    <div style={{ marginTop: "5px" }}>Feel free to contact me for any questions :)</div>
                                </div>
                                <div style={{ marginBottom: "40px" }}>
                                    <span style={{ fontWeight: "600" }}>{data[hostingNumber].host}님은 슈퍼호스트입니다.</span><br />
                                    <div style={{ marginTop: "8px" }}>
                                        슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                                    </div>
                                </div>
                            </div>
                            <div className='hostCall'>
                                <div style={{ marginBottom: "15px" }}>응답률: 100%</div>
                                <div style={{ marginBottom: "20px" }}>응답 시간: 1시간 이내</div>
                                <button className='hostCall_btn'>호스트에게 연락하기</button>
                                <div style={{ marginTop: "20px" }}>
                                    <div style={{ fontSize: "25px", display: 'inline-block', verticalAlign: "top" }}>🛡️</div>
                                    <div style={{ display: "inline-block", fontSize: "11px", width: "300px", verticalAlign: "top", height: "40px", paddingTop: "3px" }}>안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</div>
                                </div>
                            </div>
                        </div>

                        <div className='rule_wrap'>
                        <hr style={{backgroundColor:"#dfe6e8"}} />
                            <h3 style={{ marginTop: "50px" }}>알아두어야 할 사항</h3>
                            <div className='rules'>
                                <div className='rule1'>
                                    <span style={{ fontWeight: 600 }}>숙소 이용규칙</span>
                                    <br /><br />
                                    체크인 가능 시간: 오후 5:00 이후
                                    <br /><br />
                                    체크아웃 시간: 오후 12:00 전까지
                                    <br /><br />
                                    게스트 정원 2명
                                    <br /><br />
                                    <button className='rule_btn'>더보기 &gt;</button>
                                </div>
                                <div className='rule1'>
                                    <span style={{ fontWeight: 600 }}>안전 및 숙소</span>
                                    <br /><br />
                                    일산화탄소 경보기 설치 여부 정보 없음
                                    <br /><br />
                                    화재경보기
                                    <br /><br />
                                    <button className='rule_btn'>더보기 &gt;</button>
                                </div>
                                <div className='rule1'>
                                    <span style={{ fontWeight: 600 }}>환불 정책</span>
                                    <br /><br />
                                    3월 21일 전까지 무료로 취소하실 수 있습니다.
                                    <br /><br />
                                    <button className='rule_btn'>더보기 &gt;</button>
                                </div>
                            </div>
                        </div>

                        

                    </div>

                    {/* 모달창 */}                
                    <div className={styled.modal} ref={modalRef} onClick={modalOff}>
                        <div className={styled.modal_body}>
                            <button className={styled.modal_close}>&#60;</button><br /><br />
                            <div>
                                {data[hostingNumber].img.map((item, idx) => <img key={idx} src={src + item + alt} width="600px" height="400px" />)}
                            </div>
                        </div>
                    </div>

                    <Footer/>

                </div>

                
            }
        </Fragment>
    )
}
export default Room;