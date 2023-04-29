import { useEffect } from "react";

const { kakao } = window

function Kakao({ location }) {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(location.latitude, location.longitude),
            level: 3
        };
        // 지도를 생성합니다
        var map = new kakao.maps.Map(container, options);



        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);


        
        // 지도에 표시할 원을 생성합니다
        var circle = new kakao.maps.Circle({
            center: new kakao.maps.LatLng(location.latitude, location.longitude),  // 원의 중심좌표 입니다 
            radius: 70, // 미터 단위의 원의 반지름입니다 
            strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            fillColor: '#71B2E6', // 채우기 색깔입니다
            fillOpacity: 0.5  // 채우기 불투명도 입니다   
        });

        // 지도에 원을 표시합니다 
        circle.setMap(map);


    }, [])

    return (
        <div id="map" style={{
            width: '1120px',
            height: '450px',
            marginTop: '10px'
        }}></div>
    )
}
export default Kakao;