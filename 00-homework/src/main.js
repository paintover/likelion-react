import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

/* Weather 컴포넌트 */

function Weather({type = 'sunny', size = 50}) {
  let iconPath = '';
  let typeDescription = '';

  switch (type) {
    default:
    case 'sunny':
      iconPath = '/icons/type-sunny.svg'
      typeDescription = '맑음'
      break;
    case 'partly-cloudy':
      iconPath = '/icons/type-partly-cloudy.svg'
      typeDescription = '구름 조금'
      break;
    case 'lightning':
      iconPath = '/icons/type-lightning.svg'
      typeDescription = '번개'
      break;
    case 'rainy':
      iconPath = '/icons/type-rainy.svg'
      typeDescription = '비'
      break;
    case 'finedust':
      iconPath = '/icons/type-finedust.svg'
      typeDescription = '미세먼지 많음'
      break;

  }

  // JSX
  return (
    <img src={iconPath} alt={typeDescription} width={size} height={size} title={typeDescription} />
  )
}


/* WeatherListPage 컴포넌트 */

function WeatherListPage() {

  return (
    <ul className="WeatherList">
      <li>
        <Weather type="partly-cloudy" />
      </li>
      <li>
        <Weather type="sunny" />
      </li>
      <li>
        <Weather type="lightning" />
      </li>
      <li>
        <Weather type="rainy" />
      </li>
      <li>
        <Weather type="finedust" />
      </li>
    </ul>
  )
}




/* 렌더링 */
const container = document.getElementById('react-app');

if(container) {
  createRoot(container).render(<WeatherListPage />)
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}