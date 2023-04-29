import { Fragment } from "react"
import './Room.css';

const Footer = () => {

    return (
        <Fragment>
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
        </Fragment>
    )
}
export default Footer;