import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Mystyles.css";

//*****임포트 추가*****
import { NavLink } from "react-router-dom";
import styled from './Home.Category.module.css';
//******************



// import required modules
import { Navigation } from "swiper";




export default () => {

//*******변수 추가******

  const category = [
      {name : "all", topic:"전체"},
      {name : "camping", topic:"캠핑장"},
      {name : "view", topic:"최고의 전망"},
      {name : "hot", topic:"인기 급상승"},
      {name : "hanok", topic:"한옥"},
      {name : "beach", topic:"해변 바로 앞"},
      {name : "oneroom", topic:"개인실"},
      {name : "rokyan", topic:"료칸"},
      {name : "sigol", topic:"시골"},
      {name : "mansion", topic:"맨션"},
      {name : "unbelivable", topic:"기상천외한 숙소"},
      {name : "park", topic:"국립공원"},
      {name : "swim", topic:"멋진 수영장"},
      {name : "castle", topic:"캐슬"},
      {name : "Luxe", topic:"Luxe"},
      {name : "ski", topic:"스키"}
  ]

  const onStyle = {
      opacity: "100%",
      transition: "all 2s"
  }

  const offStyle = {
      opacity: "50%",transition: "all 2s"
  }

  const filter = {
      
  }
//********************





  return (
    <Fragment>
    <div className={styled.cate_div} key={1}>
    <Swiper
      slidesPerView={14}
      spaceBetween={0}
      slidesPerGroup={14}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      className={styled.cate_wrap}
    >
       {
            category.map( (item, index) =>
                <div key={index}>
                  <SwiperSlide key={index}>
                    <NavLink  key={index} to={item.name === 'all' ? '/' : `/${item.topic}`} style={({isActive})=>isActive ? onStyle : offStyle}>
                    
                        <img src={"/img/"+`${item.name}`+".jpg"} width="30"/>
                        <p>{item.topic}</p>
                    
                    </NavLink>
                  </SwiperSlide>
                </div>)
         }
    </Swiper>
    <div className="filter">
      
      <button><img src="img/toggle.png" width="22" onClick={filter}/><spna> 필터</spna></button>
    </div>
   
  </div>

      
  </Fragment>
  );
};