import { Fragment, useState } from "react"
import { NavLink } from "react-router-dom";
import styled from './Home.Category.module.css';
import Myslide from "./Myslide";


const HomeCategory = () => {

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
        opacity: "50%",
        transition: "all 2s"
    }

    const xxx =  category.map( (item, index) =>
    <li key={index}>
        <NavLink key={index} to={item.name === 'all' ? '/' : `/${item.topic}`} style={({isActive})=>isActive ? onStyle : offStyle}>
        
            <img src={"img/"+`${item.name}`+".jpg"} width="30"/>
            <p>{item.topic}</p>
        
        </NavLink>
    </li>);

    return (
        <Fragment>

            <Myslide></Myslide>
            <div className="filter_popup">
            </div>

        </Fragment>
        
    )
}

export default HomeCategory;