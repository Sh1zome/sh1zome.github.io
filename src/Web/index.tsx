import { useState } from 'react';
import './style.scss';

function WebIndex() {

  const [selectedNav, setSelectedNav] = useState<'home' | 'projects' | 'about' | 'contact'>('home');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget as HTMLDivElement;
    const rect = btn.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    
    btn.style.setProperty('--mouse-x', `${x}px`);
    btn.style.setProperty('--mouse-y', `${y}px`);
  };

  const onClickNav = (e: React.MouseEvent<HTMLDivElement>) => {
    const btnId = e.currentTarget.id as 'home' | 'projects' | 'about' | 'contact'
    setSelectedNav(btnId)
  }

  const renderContent = () => {
    switch (selectedNav) {
      case 'home': return <div>Home content</div>
      case 'projects': return <div>Projects content</div>
      case 'about': return <div>About content</div>
      case 'contact': return <div>Contact content</div>
      default: return null
    }
  }

  return (
    <div className='body'>

      <div className='navBar'>

        <div className='logo'>
          <div className='badge'>
            <div className='badgeImg'>
            </div>
          </div>
          <div className='name'>SH1ZOME</div>
          <div className='os'>OS_v2.0</div>
        </div>

        <div className='navLinks'>
          <div className={`btn home ${selectedNav === 'home' ? 'pressed' : ''}`} id='home' onMouseMove={handleMouseMove} onClick={onClickNav}>
            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" width="12.000000" height="12.000000" fill="none">
              <rect id="home" width="12.000000" height="12.000000" x="0.000000" y="0.000000" />
              <path id="vec1" d="M2.25 10.5L9.75 10.5L9.75 4.5L6 1.5L2.25 4.5L2.25 10.5Z" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.750000" />
              <path id="vec2" d="M4.75 10.5L7.25 10.5L7.25 7.25L4.75 7.25L4.75 10.5Z" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linejoin="round" stroke-width="0.750000" />
              <path id="vec3" d="M2.25 10.5L9.75 10.5" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-width="0.750000" />
            </svg>
            <div className='text'>HOME</div>
          </div>
          <div className={`btn projects ${selectedNav === 'projects' ? 'pressed' : ''}`} id='projects' onMouseMove={handleMouseMove} onClick={onClickNav}>
            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" width="12.000000" height="12.000000" fill="none">
              <rect id="folder-open" width="12.000000" height="12.000000" x="0.000000" y="0.000000" />
              <path id="vec4" d="M3 6.99999L3.75 5.54999C3.83154 5.38806 3.95556 5.25134 4.10881 5.15446C4.26205 5.05758 4.43875 5.00419 4.62 4.99999L10 4.99999C10.2044 4.99963 10.404 5.0619 10.5719 5.17843C10.7398 5.29495 10.868 5.46013 10.9391 5.65171C11.0103 5.8433 11.0211 6.05209 10.97 6.24999L10.2 9.24999C10.1631 9.3931 10.0948 9.52625 10.0003 9.63985C9.90568 9.75344 9.7871 9.84466 9.65305 9.90693C9.519 9.9692 9.37281 10.001 9.225 9.99999L2 9.99999C1.82446 9.99999 1.65202 9.95378 1.5 9.86601C1.34798 9.77824 1.22174 9.65201 1.13397 9.49999C1.04621 9.34797 1 9.17552 1 8.99999L1 2.49999C1 2.32445 1.04621 2.15201 1.13397 1.99999C1.22174 1.84797 1.34798 1.72173 1.5 1.63396C1.65202 1.54619 1.82446 1.49999 2 1.49999L3.95 1.49999C4.11724 1.49835 4.28223 1.53868 4.42985 1.6173C4.57747 1.69591 4.70302 1.8103 4.795 1.94999L5.2 2.54999C5.29106 2.68825 5.41501 2.80175 5.56075 2.88029C5.70649 2.95883 5.86945 2.99996 6.035 2.99999L9 2.99999C9.17554 2.99999 9.34798 3.04619 9.5 3.13396C9.65202 3.22173 9.77826 3.34797 9.86602 3.49999C9.95379 3.65201 10 3.82445 10 3.99999L10 4.99999" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
            </svg>
            <div className='text'>PROJECTS</div>
          </div>
          <div className={`btn about ${selectedNav === 'about' ? 'pressed' : ''}`} id='about' onMouseMove={handleMouseMove} onClick={onClickNav}>
            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" width="12.000000" height="12.000000" fill="none">
              <rect id="cpu" width="12.000000" height="12.000000" x="0.000000" y="0.000000" />
              <path id="vec5" d="M6 10L6 11" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec6" d="M6 1L6 2" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec7" d="M8.5 10L8.5 11" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec8" d="M8.5 1L8.5 2" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec9" d="M1 6L2 6" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec10" d="M1 8.5L2 8.5" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec11" d="M1 3.5L2 3.5" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec12" d="M10 6L11 6" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec13" d="M10 8.5L11 8.5" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec14" d="M10 3.5L11 3.5" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec15" d="M3.5 10L3.5 11" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec16" d="M3.5 1L3.5 2" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <rect id="rect1" width="8.000000" height="8.000000" x="2.000000" y="2.000000" rx="1.000000" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <rect id="rect2" width="4.000000" height="4.000000" x="4.000000" y="4.000000" rx="0.500000" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
            </svg>
            <div className='text'>ABOUT</div>
          </div>
          <div className={`btn contact ${selectedNav === 'contact' ? 'pressed' : ''}`} id='contact' onMouseMove={handleMouseMove} onClick={onClickNav}>
            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" width="12.000000" height="12.000000" fill="none">
              <rect id="radio" width="12.000000" height="12.000000" x="0.000000" y="0.000000" />
              <path id="vec17" d="M8.12354 3.88049C8.49517 4.25277 8.76239 4.71622 8.89839 5.22436C9.0344 5.73251 9.0344 6.26748 8.89839 6.77562C8.76239 7.28376 8.49517 7.74722 8.12354 8.11949" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec18" d="M9.53748 2.46649C10.1573 3.087 10.603 3.85963 10.8298 4.70682C11.0566 5.55402 11.0566 6.44597 10.8298 7.29316C10.603 8.14035 10.1573 8.91298 9.53748 9.53349" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec19" d="M2.46249 9.53349C1.8427 8.91298 1.39701 8.14035 1.17018 7.29316C0.943353 6.44597 0.943353 5.55402 1.17018 4.70682C1.39701 3.85963 1.84269 3.08701 2.46249 2.46649" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <path id="vec20" d="M3.87649 8.11949C3.50486 7.74722 3.23764 7.28376 3.10163 6.77562C2.96563 6.26748 2.96563 5.73251 3.10163 5.22436C3.23764 4.71622 3.50486 4.25277 3.87649 3.88049" fill-rule="nonzero" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
              <circle id="circ1" cx="6" cy="6" r="1" stroke="rgb(141,150,167)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.000000" />
            </svg>
            <div className='text'>CONTACT</div>
          </div>
        </div>

        <div className='navRight'>
          <div className='status'>
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="18.000000" height="18.000000" fill="none">
              <defs>
                <filter id="filter_0" width="18.000000" height="18.000000" x="0.000000" y="0.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feOffset dx="0.000000" dy="0.000000" in="SourceAlpha" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.819608 0 0 0 0 1 0 0 0 0.533333 0 " />
                  <feBlend result="effect_dropShadow_1" in2="BackgroundImageFix" mode="normal" />
                  <feBlend result="shape" in="SourceGraphic" in2="effect_dropShadow_1" mode="normal" />
                </filter>
              </defs>
              <g filter="url(#filter_0)">
                <rect id="rect3" width="6.000000" height="6.000000" x="6.000000" y="6.000000" rx="3.000000" fill="rgb(79,209,255)" />
              </g>
            </svg>
            <div className='text'>SYSTEM ONLINE</div>
          </div>
        </div>

      </div>

      <div className='content'>
        {renderContent()}
      </div>

    </div>
  )
}

export default WebIndex
