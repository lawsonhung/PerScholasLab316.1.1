// ============================================= PART ONE

let mainEl = document.querySelector('main');

const rootElement = document.documentElement;
const computedStyles = window.getComputedStyle(rootElement);

let mainBgColor = computedStyles.getPropertyValue('--main-bg');
mainEl.style.backgroundColor = mainBgColor;

const fragment = document.createDocumentFragment();
const h1Element = document.createElement('h1');
h1Element.textContent = 'DOM Manipulation';
fragment.appendChild(h1Element);
mainEl.appendChild(fragment);

mainEl.classList.add('flex-ctr');

// ============================================= PART TWO

let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

let topMenuBgColor = computedStyles.getPropertyValue('--top-menu-bg');
topMenuEl.style.backgroundColor = topMenuBgColor;

topMenuEl.classList.add('flex-around');

// ============================================= PART THREE

