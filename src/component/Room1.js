import medal from '../img/medal.png';
import share from '../img/share.png';
import heart from '../img/heart.png';
import { Fragment, useEffect, useRef, useState } from 'react';
import ModalBasic from './ModalBasic';
import './Room.css';
import styled from './DataTest.module.css';
import Kakao from './Kakao';



const Room = () => {

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

    const modalOn = (e) => {
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
                        <div className="title">
                            <div className=''>
                                <h1>{data[0].title}</h1>
                            </div>
                            <div className='inner-title'>
                                <div className='left'>
                                    <span>★ {data[0].score} ㆍ</span>
                                    <a onClick={showModal} >후기 {data[0].review.length}개</a>ㆍ {/* 팝업 */}
                                    {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                                    <img src={medal} alt='호스트등급아이콘' />
                                    <span>슈퍼호스트ㆍ</span>
                                    <a href="#" >{data[0].address.join(', ')}</a> {/* 팝업 */}

                                </div>

                                <div className='right'>
                                    <a href='#'><img src={share} alt="공유아이콘" className='share' />공유하기</a>
                                    <a href='#'><img src={heart} alt='하트아이콘' className='heart' />저장</a>
                                </div>
                            </div>
                        </div>

                        {/*============ 숙소 사진 ===============*/}
                        <div className='picture' >{/* 팝업 */}
                            <div className='room1'>
                                <img src={src + data[0].img[0] + alt} alt='숙소사진1' target="_self" onClick={modalOn} />
                            </div>
                            <div className='rooms'>
                                <img src={src + data[0].img[1] + alt} alt='숙소사진2' className='room2' target="_self" onClick={modalOn} />
                                <img src={src + data[0].img[2] + alt} alt='숙소사진3' className='room2' target="_self" onClick={modalOn} />
                                <img src={src + data[0].img[3] + alt} alt='숙소사진4' className='room3' target="_self" onClick={modalOn} />
                                <img src={src + data[0].img[4] + alt} alt='숙소사진5' className='room3 room5' target="_self" onClick={modalOn} />
                            </div>
                        </div>
                    </div>

                    <div className='content_bottom'>
                        <div className='review_wrap'>
                        <hr/>

                            <div className='review_score'>
                                <div className='score'>
                                    ★ {data[0].score} ㆍ 후기 {data[0].review.length}개
                                </div>
                                <div className='score2'>
                                    <div className='score3'>
                                        <div className='left'>
                                            청결도
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[0].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            정확성
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[0].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            의사소통
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[0].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            위치
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[0].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            체크인
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[0].score}</span>
                                        </div>
                                    </div>
                                    <div className='score3'>
                                        <div className='left'>
                                            가격 대비 만족도
                                        </div>
                                        <div className='right'>
                                            <hr /> <span>{data[0].score}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='review_list'>
                                {data[0].review.map((item, idx) =>
                                    <div className='review' key={idx}>
                                        <div className='review_info'>
                                            <div style={{ verticalAlign: "top" }}><img src={src + data[0].img[0] + alt} /></div>
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
                                <button className='review_btn'>후기 {data[0].review.length}개 모두 보기</button>
                            </div>
                        </div>

                        <div className='map_wrap'>
                            <hr />
                            <h3 style={{ marginTop: '55px' }}>호스팅 지역</h3>
                            {/* 카카오 지도 API */}
                            <Kakao location={data[0].location} />
                            <div className='review_address'>
                                {data[0].address.join(', ')}
                            </div>
                            <hr />
                        </div>

                        <div className='hostInfo_wrap'>
                            <div className='hostInfo'>
                                <div style={{ marginBottom: "15px" }}>
                                    <img src={src + data[0].img[0] + alt} style={{ verticalAlign: "top", width: "60px", height: "60px", borderRadius: "30px" }} />
                                    <div style={{ display: "inline-block", marginLeft: "10px", height: "60px", paddingTop: "6px" }}>
                                        <span style={{ fontSize: "18px", fontWeight: "600" }}>호스트: {data[0].host}님</span><br />
                                        <span style={{ fontSize: "14px", color: "#999" }}>회원 가입일: 2023년 1월</span>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                    <span style={{ fontSize: "17px" }}>★ </span>
                                    <span style={{ fontSize: "15px" }}>후기 {data[0].review.length}개&emsp;&emsp;</span>
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
                                    <span style={{ fontWeight: "600" }}>{data[0].host}님은 슈퍼호스트입니다.</span><br />
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
                            <hr />
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

                        <footer className='footer'>
                            <div className='footer-box'>
                                <div className="footer-top">
                                    <div className="footer-content">
                                        <ul>
                                            <li><a href="">에어비앤비 지원</a></li>
                                            <li><a href="">호스팅 안내 및 신청</a></li>
                                            <li><a href="">커뮤니티</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-info">
                                        <div>
                                            <p>Address</p>
                                            <span>미국 캘리포니아 샌프란시스코</span>
                                        </div>
                                        <div>
                                            <p>Customer Center</p>
                                            <span>고객센터 : 1577-4410 팩스 : 02-2058-6777</span>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ border: "0", height: "1px", background: "#ccc" }} />


                                <div>
                                    <div className="footer-info2">
                                        <div className="footer-wrap">
                                            <div className="footer-list">
                                                <ul>
                                                    <li><a href="#">이용약관</a></li>
                                                    <li><a href="#">개인정보처리방침</a></li>
                                                    <li><a href="#">위치기반서비스 이용약관</a></li>
                                                    <li><a href="#">이메일 무단수집거부</a></li>
                                                    <li><a href="#">법적고지</a></li>
                                                    <li><a href="#">사업자정보확인</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-info3">대표이사 : 도은영 ㅣ 개인정보보호책임자 : 송은아 ㅣ 사업자등록번호 : 123-45-12345</div>
                                            <div className="footer-info3">통신판매업종신고증 : 제 2018-서울중구-0353호 ㅣ 대표이메일 : helpmaster@airbnb.co.kr
                                            </div>
                                            <div className="footer-info3">Copyright ⓒ 2023 Airbnb Co., LTD. All Rights Reserved.
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </footer>

                    </div>

                    <div className={styled.modal} ref={modalRef} onClick={modalOff}>
                        <div className={styled.modal_body}>
                            <button className={styled.modal_close}>&#60;</button><br /><br />
                            <div>
                                {data[0].img.map((item, idx) => <img key={idx} src={src + item + alt} width="600px" height="400px" />)}
                            </div>
                        </div>
                    </div>

                </div>
            }
        </Fragment>
    )
}
export default Room;