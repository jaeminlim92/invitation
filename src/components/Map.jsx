import {useEffect, useRef, useState} from 'react'
import '../css/Main.css'

function Map() {
  const mapRef = useRef(null)
  const [naverLoaded, setNaverLoaded] = useState(false) // ✅ 네이버 API 로드 여부 상태 추가

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      setNaverLoaded(true) // ✅ 네이버 API 로드 완료 시 상태 업데이트
    }
  }, [])

  useEffect(() => {
    if (!naverLoaded) return

    const {naver} = window
    const location = new naver.maps.LatLng(37.590979, 127.043653)

    // 네이버 지도 옵션 선택
    const mapOptions = {
      // 지도의 초기 중심 좌표
      center: location,
      logoControl: false, // 네이버 로고 표시 X
      mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
      scaleControl: false, // 지도 축척 컨트롤의 표시 여부
      tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
      zoom: 16, // 지도의 초기 줌 레벨
      zoomControl: false, // 줌 컨트롤 표시
      zoomControlOptions: {position: 9} // 줌 컨트롤 우하단에 배치
    }
    mapRef.current = new naver.maps.Map('map', mapOptions)

    new naver.maps.Marker({
      position: location,
      map: mapRef.current
    })
  }, [naverLoaded])

  return (
    <div>
      <div className="title">
        <ul>오시는 길</ul>
      </div>
      <div className="content" style={{textAlign: 'left'}}>
        <ul>서울 동대문구 회기로 56</ul>
        <ul>세종대왕 기념관</ul>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <div id="map" style={{width: '100%', height: '300px'}} />
      </div>
      <div className="content" style={{textAlign: 'left', paddingLeft: '20px'}}>
        <h3>🚌 셔틀버스</h3>
        <p>
          <strong style={{color: '#0303a5'}}>1호선</strong> 청량리역 하차 2번출구
        </p>
        <p>
          <strong style={{color: '#772c00'}}>6호선</strong> 고려대역 하차 3번출구 앞
        </p>

        <h3>🚇 지하철</h3>
        <p>
          <strong style={{color: '#0303a5'}}>1호선</strong> 청량리역 2번출구 도보 15분 거리
        </p>
        <p>
          <strong style={{color: '#772c00'}}>6호선</strong> 고려대역 3번출구 도보 5분 거리
        </p>

        <h3>🚌 버스</h3>
        <p>세종대왕기념관 정류장 하차</p>
        <p>
          <strong style={{color: '#2aa32a'}}>지선버스</strong> 1226
        </p>
        <p>
          <strong style={{color: '#0a5ae4'}}>간선버스</strong> 201, 273
        </p>
      </div>
    </div>
  )
}

export default Map
