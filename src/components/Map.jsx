import {useEffect, useRef, useState} from 'react'
import '../css/Main.css'
import kakao from '../assets/images/kakao_navi.svg'
import tmap from '../assets/images/T_map.svg'
import naver from '../assets/images/navermap.png'

function Map() {
  const mapRef = useRef(null)
  const [naverLoaded, setNaverLoaded] = useState(false) // ✅ 네이버 API 로드 여부 상태 추가
  const navButtonStyle = {
    display: 'flex', // 내부 정렬용 flex
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '36px',
    gap: '6px', // 아이콘과 텍스트 사이 간격
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '11px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    whiteSpace: 'nowrap' // 줄바꿈 방지
  }

  const coordinates = {
    latitude: 37.590979,
    longitude: 127.043653
  }

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      setNaverLoaded(true) // ✅ 네이버 API 로드 완료 시 상태 업데이트
    }
  }, [])

  useEffect(() => {
    if (!naverLoaded) return

    const {naver} = window
    const location = new naver.maps.LatLng(coordinates.latitude, coordinates.longitude)

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
      <div className="venue-address">
        <div className="venue-icon">📍</div>
        <div className="venue-details">
          <div className="venue-name">세종대왕 기념관</div>
          <div className="venue-location">서울 동대문구 회기로 56</div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <div id="map" style={{width: '100%', height: '300px'}} />
      </div>
      <div
        style={{
          paddingTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '95%', // 1. 부모 div 너비를 꽉 채우고
          maxWidth: '500px', // 2. 너무 넓어지지 않게 제한
          margin: '0 auto', // 3. 부모 div 자체를 가운데 정렬
          gap: '12px'
        }}
      >
        <a
          href={`tmap://route?goalname=세종대왕 기념관&goalx=${coordinates.longitude}&goaly=${coordinates.latitude}`}
          style={navButtonStyle}
        >
          <img src={tmap} alt="티맵" className="map-button" />
          티맵
        </a>
        <a
          href={`https://map.kakao.com/link/map/세종대왕기념관,37.59074398064007,127.04359231098572`}
          style={navButtonStyle}
        >
          <img src={kakao} alt="카카오" className="map-button" />
          카카오
        </a>
        <a
          href={`nmap://route/car?dname=세종대왕 기념관&dlat=${coordinates.latitude}&dlng=${coordinates.longitude}`}
          style={navButtonStyle}
        >
          <img src={naver} alt="네이버" className="map-button" />
          네이버
        </a>
      </div>
      <div className="content" style={{textAlign: 'left', paddingLeft: '20px', paddingTop: '20px'}}>
        <h3>🚌 셔틀버스</h3>
        <p>
          <strong style={{color: '#0303a5'}}>1호선</strong> 청량리역 하차 2번출구
        </p>
        <p>
          <strong style={{color: '#772c00'}}>6호선</strong> 고려대역 하차 3번출구 앞
        </p>
        <p>
          <span style={{color: '#7e7d7d'}}> (식 시간 1시간 전 15분 ~ 20분 간격 운행)</span>
        </p>
        <p>&nbsp;</p>

        <h3>🚇 지하철</h3>
        <p>
          <strong style={{color: '#0303a5'}}>1호선</strong> 청량리역 2번출구 도보 15분 거리
        </p>
        <p>
          <strong style={{color: '#772c00'}}>6호선</strong> 고려대역 3번출구 도보 5분 거리
        </p>
        <p>&nbsp;</p>

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
