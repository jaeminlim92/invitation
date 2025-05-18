import {useEffect, useRef, useState} from 'react'
import '../css/Main.css'
import kakao from '../assets/images/kakao_navi.svg'
import tmap from '../assets/images/T_map.svg'
import naver from '../assets/images/navermap.png'

function Map() {
  const mapRef = useRef(null)
  const [naverLoaded, setNaverLoaded] = useState(false)
  const [kakaoLoaded, setKakaoLoaded] = useState(false)

  const navButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '36px',
    gap: '6px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '11px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  }

  const coordinates = {
    latitude: 37.590979,
    longitude: 127.043653
  }

  // 네이버 지도 API 로드 상태 체크
  useEffect(() => {
    if (window.naver && window.naver.maps) {
      setNaverLoaded(true)
    }
  }, [])

  // 카카오 SDK 로드 체크 및 내비 API 로드
  useEffect(() => {
    const checkKakaoSdk = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          // Footer.jsx에서 초기화되었는지 확인, 초기화되지 않았다면 초기화
          window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY || '842323c31c71098b0e3d3406310ee58e')
        }

        // 카카오내비 API 로드
        if (!window.Kakao.Navi) {
          window.Kakao.load('navi')
        }

        setKakaoLoaded(true)
      }
    }

    // 초기 체크
    checkKakaoSdk()

    // Kakao SDK가 로드되지 않았다면 주기적으로 확인
    if (!kakaoLoaded) {
      const interval = setInterval(() => {
        checkKakaoSdk()
        if (kakaoLoaded) {
          clearInterval(interval)
        }
      }, 500)

      return () => clearInterval(interval)
    }
  }, [kakaoLoaded])

  // 네이버 지도 생성
  useEffect(() => {
    if (!naverLoaded) return

    const {naver} = window
    const location = new naver.maps.LatLng(coordinates.latitude, coordinates.longitude)

    // 네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      logoControl: false,
      mapDataControl: false,
      scaleControl: false,
      tileDuration: 200,
      zoom: 16,
      zoomControl: false,
      zoomControlOptions: {position: 9}
    }
    mapRef.current = new naver.maps.Map('map', mapOptions)

    new naver.maps.Marker({
      position: location,
      map: mapRef.current
    })
  }, [naverLoaded, coordinates.latitude, coordinates.longitude])

  // 카카오 내비 실행 함수
  const handleKakaoNavi = () => {
    if (window.Kakao && window.Kakao.Navi) {
      window.Kakao.Navi.start({
        name: '세종대왕기념관',
        x: coordinates.longitude,
        y: coordinates.latitude,
        coordType: 'wgs84'
      })
    } else {
      alert('카카오내비를 시작할 수 없습니다. 카카오내비 앱이 설치되어 있는지 확인해주세요.')
    }
  }

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
          width: '95%',
          maxWidth: '500px',
          margin: '0 auto',
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
        <button
          onClick={handleKakaoNavi}
          style={navButtonStyle}
        >
          <img src={kakao} alt="카카오" className="map-button" />
          카카오
        </button>
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
