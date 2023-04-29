import { useEffect, useRef, useState } from "react";
import styled from './DataTest.module.css';

const DataTest = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/devTozi/react-airbnb/master/bnb%EB%8D%B0%EC%9D%B4%ED%84%B0.json")
        .then(res => res.json())
        .then(data => {setData(data);});
    }, [])

    const src = "https://firebasestorage.googleapis.com/v0/b/deploytest-3f355.appspot.com/o/";
    const alt = "?alt=media";

    const [modalImage, setModalImage] = useState();

    const modalOn = (e) => {
        // 스크롤바 처리용
        // body.style.overflow = 'hidden';
        modalRef.current.style.display = 'block';
        setModalImage(e.target.dataset.key);
    }
    const modalOff = (e) => {
        modalRef.current.style.display = 'none';
    }

    const modalRef = useRef();

    return(
        <div>
            <div>
                {data === undefined ? '로딩중' : 
                    data.map((item, idx) => <a /* href={"/room/"+`${idx}`} */ key={idx} onClick={modalOn}>
                        <img src={src+item.img[0]+alt} data-key={idx} width="300px" height="250px" style={{padding : "20px 20px"}}/>
                        </a>)
                }
            </div>
            <div className={styled.modal} ref={modalRef} onClick={modalOff}>
                <div className={styled.modal_body}>
                    {modalImage === undefined ? undefined : <img src={src+data[modalImage].img[0]+alt} width="300px" height="250px"/>}
                </div>
            </div>
        </div>
    )
}
export default DataTest;