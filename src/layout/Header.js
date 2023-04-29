import { Fragment, useState } from "react";
import logo from '../img/logo.png';
import search from '../img/search.png';
import earth from '../img/earth.png';
import profile from '../img/profile.png';
import menubar from '../img/menubar.png';

import styled from './Header.css';
import { Outlet } from "react-router-dom";




const Header = () => {

    // const [height, setHeight] = useState('');

    // const header_height = {height:height
    //                       }

    const [display, setDisplay] = useState('');
    const [display2, setDisplay2] = useState('none');

    
    const [height, setHeight] = useState('20px');



    const searchClick = (e) => {
        setTimeout(() => setHeight('110px'));
        setDisplay('none');
        setDisplay2('block');
    }

    const menuOn = () => {
        setHeight(!height);
        console.log(height);
    }

    const close = (e) => {
        setTimeout(() => setHeight('10px'));
        setDisplay('block');
        setDisplay2('none');
    }
    
    const search2Click = (e) => {
        console.log(e.target);
    }


    return (
        <Fragment>
            <header >
                <div className="header_wrap">
                    <div className="header" > {/* style={header_height} 헤더 */}
                        <div className="logo">  {/*logo*/}
                            <a href="/">
                                <img src={logo} width={45} />
                                <span>airbnb</span>
                            </a>
                        </div>
                        <div className="search" style={{display:display}}>
                            <ul >
                                <li onClick={searchClick} ><a href="#">어디든지</a></li>
                                <li onClick={searchClick}><a href="#">언제든 일주일</a></li>
                                <li onClick={searchClick}><a href="#">게스트 추가</a></li>
                                <li><button onClick={searchClick}><img src={search} width={15} /></button></li>
                            </ul>

                        </div>

                        <div className="searchOn" style={{display:display2}} >
                            {/* search 온클릭시 */}
                            <ul>
                                <li><a href="#">숙소</a></li>
                                <li><a href="#">체험</a></li>
                                <li><a href="#">온라인 체험</a></li>
                            </ul>
                        </div>

                        <div className="profile"> {/*profile*/}
                            <div className="profile_wrap">
                                <div className="space">
                                    <a href="#">당신의 공간을 에어비앤비하세요</a>
                                </div>
                                <div className="earth">
                                    <a href="#"><img src={earth} width={20} /></a>
                                </div>
                                <div>
                                    <button>
                                        <img src={menubar} width={30} />
                                        <img src={profile} width={30} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="search2_wrap_div" style={{display:display2, height:height, transition: "all 1s"}} onClick={menuOn} >

                    <div className="search2_wrap"  >
                        <div className="search2" onClick={search2Click}>

                            <div>
                                <a href="#">여행지</a>
                                <input placeholder="여행지 검색" type="text"></input>
                            </div>

                            <div>
                                <a href="#">체크인</a>
                                <input placeholder="날짜 추가" type="text"></input>
                            </div>
                            <div>
                                <a href="#">체크아웃</a>
                                <input placeholder="날짜 추가" type="text"></input>
                            </div>
                            <div className="btn">
                                <a href="#">여행자</a>
                                <input placeholder="날짜 추가" type="text"></input>
                                <button><img src={search} width={30} /></button>
                            </div>

                        </div>

                        <div className="search_menu">
                            <div className="search_menu1">
                                <div className="search_menu1_wrap">
                                    <p>지역으로 검색하기</p>
                                    <div>
                                        <img src="img/map1.jpg" width="120"></img>
                                        <span>유연한 검색</span>
                                    </div>
                                    <div>
                                        <img src="img/map2.jpg" width="120"></img>
                                        <span>유럽</span>
                                    </div><div>
                                        <img src="img/map3.jpg" width="120"></img>
                                        <span>일본</span>
                                    </div><div>
                                        <img src="img/map4.jpg" width="120"></img>
                                        <span>동남아시아</span>
                                    </div><div>
                                        <img src="img/map5.jpg" width="120"></img>
                                        <span>프랑스</span>
                                    </div><div>
                                        <img src="img/map6.jpg" width="120"></img>
                                        <span>미국</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </header>
            <section>
                <div className="bggray" style={{display:display2}} onClick={close}>

                </div>
                <div className="container">
                    <Outlet></Outlet>
                </div>
            </section>
        </Fragment>
    );
}

export default Header;