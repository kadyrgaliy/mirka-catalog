'use strict';

const WA_NUMBER = '77052242422';
let currentLang = localStorage.getItem('lang') || 'ru';

const LANG = {
  ru: {
    nav_logo:      'Модульные кухни',
    nav_order:     'Заказать',
    hero_title:    'Модульные кухни\nпрямо с мастерской',
    hero_sub:      'Готовые модули для самостоятельной сборки — выбирайте нужное',
    hero_cta:      'Рассчитать стоимость',
    hero_cta2:     'Смотреть каталог',
    adv_title:     'Почему выбирают нас',
    adv1_t:        'Прямо с мастерской',
    adv1_d:        'Без посредников — заказ идёт напрямую от нас',
    adv2_t:        'Готовые модули',
    adv2_d:        'Не нужно ждать индивидуального изготовления',
    adv3_t:        'На ваш выбор',
    adv3_d:        'Собираете именно ту комплектацию, которая нужна',
    adv4_t:        'Быстро и надёжно',
    adv4_d:        'Уточните сроки у менеджера — ответим в течение часа',
    cat_title:     'Каталог',
    cat_download:  'Скачать каталог (PDF)',
    cat_from:      'от',
    cat_currency:  '₸',
    calc_title:    'Калькулятор стоимости',
    calc_tab_sqm:  'По площади (м²)',
    calc_tab_mod:  'По модулям',
    calc_w:        'Ширина кухни (м)',
    calc_d:        'Глубина (м)',
    calc_sqm_res:  'Площадь',
    calc_total:    'Итого: от',
    calc_cta:      'Узнать точную цену в WhatsApp',
    calc_msg:      'Здравствуйте! Хочу узнать стоимость кухни',
    book_title:    'Записаться',
    book_cons:     'Консультация',
    book_install:  'Монтаж',
    book_name:     'Ваше имя',
    book_phone:    'Номер телефона',
    book_submit:   'Отправить в WhatsApp',
    book_msg_cons: 'Хочу записаться на консультацию',
    book_msg_inst: 'Хочу записаться на монтаж',
    contact_title: 'Связаться с нами',
    contact_sub:   'Ответим в течение часа',
    contact_wa:    'Написать в WhatsApp',
    contact_ig:    'Instagram',
    footer_copy:   '© 2026 Модульные кухни. Все права защищены.',
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь',
             'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    days_short: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    calc_approx:    'примерная сумма',
    calc_total_wa:  'итого',
  },
  kz: {
    nav_logo:      'Модульді асүйлер',
    nav_order:     'Тапсырыс беру',
    hero_title:    'Модульді асүйлер\nшеберханадан тікелей',
    hero_sub:      'Өзіңіз жинауға арналған дайын модульдер — қажеттісін таңдаңыз',
    hero_cta:      'Құнын есептеу',
    hero_cta2:     'Каталогты қарау',
    adv_title:     'Неліктен бізді таңдайды',
    adv1_t:        'Шеберханадан тікелей',
    adv1_d:        'Делдалсыз — тапсырыс тікелей бізден',
    adv2_t:        'Дайын модульдер',
    adv2_d:        'Жеке дайындауды күтудің қажеті жоқ',
    adv3_t:        'Өзіңіз таңдайсыз',
    adv3_d:        'Дәл қажет жиынтықты өзіңіз құрастырасыз',
    adv4_t:        'Жылдам және сенімді',
    adv4_d:        'Мерзімді менеджерден сұраңыз — бір сағатта жауап береміз',
    cat_title:     'Каталог',
    cat_download:  'Каталогты жүктеу (PDF)',
    cat_from:      'бастап',
    cat_currency:  '₸',
    calc_title:    'Құн калькуляторы',
    calc_tab_sqm:  'Ауданы бойынша (м²)',
    calc_tab_mod:  'Модульдер бойынша',
    calc_w:        'Асүй ені (м)',
    calc_d:        'Тереңдігі (м)',
    calc_sqm_res:  'Аудан',
    calc_total:    'Барлығы: бастап',
    calc_cta:      'WhatsApp арқылы нақты бағасын білу',
    calc_msg:      'Сәлеметсіз! Асүйдің құнын білгім келеді',
    book_title:    'Жазылу',
    book_cons:     'Консультация',
    book_install:  'Монтаж',
    book_name:     'Есіміңіз',
    book_phone:    'Телефон нөмірі',
    book_submit:   'WhatsApp-қа жіберу',
    book_msg_cons: 'Консультацияға жазылғым келеді',
    book_msg_inst: 'Монтажға жазылғым келеді',
    contact_title: 'Бізбен байланыс',
    contact_sub:   'Бір сағатта жауап береміз',
    contact_wa:    'WhatsApp-қа жазу',
    contact_ig:    'Instagram',
    footer_copy:   '© 2026 Модульді асүйлер. Барлық құқықтар қорғалған.',
    months: ['Қаңтар','Ақпан','Наурыз','Сәуір','Мамыр','Маусым',
             'Шілде','Тамыз','Қыркүйек','Қазан','Қараша','Желтоқсан'],
    days_short: ['Дс','Сс','Ср','Бс','Жм','Сб','Жк'],
    calc_approx:    'шамалас сомасы',
    calc_total_wa:  'барлығы',
  }
};

// Add module name keys to both languages
LANG.ru.mod_base_60 = 'Нижний модуль 60 см';
LANG.ru.mod_base_80 = 'Нижний модуль 80 см';
LANG.ru.mod_wall_60 = 'Верхний модуль 60 см';
LANG.ru.mod_corner  = 'Угловой модуль';
LANG.ru.mod_drawer  = 'Модуль с ящиками';
LANG.kz.mod_base_60 = 'Төменгі модуль 60 см';
LANG.kz.mod_base_80 = 'Төменгі модуль 80 см';
LANG.kz.mod_wall_60 = 'Жоғарғы модуль 60 см';
LANG.kz.mod_corner  = 'Бұрыштық модуль';
LANG.kz.mod_drawer  = 'Жәшікті модуль';

const CATALOG_DATA = {
  pricePerSqm: { min: 85000, max: 150000 },
  modules: [
    { id: 'base_60', icon: '▭', nameKey: 'mod_base_60', price: 45000 },
    { id: 'base_80', icon: '▭', nameKey: 'mod_base_80', price: 55000 },
    { id: 'wall_60', icon: '▯', nameKey: 'mod_wall_60', price: 32000 },
    { id: 'corner',  icon: '◱', nameKey: 'mod_corner',  price: 75000 },
    { id: 'drawer',  icon: '▤', nameKey: 'mod_drawer',  price: 38000 },
  ],
  catalogPdf: 'catalog.pdf',
  phone:      `+${WA_NUMBER}`.replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5'),
  instagram:  'https://instagram.com/',
};

function t(key) {
  return LANG[currentLang][key] ?? key;
}

function switchLang(lang) {
  if (!LANG[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  renderAll();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
});

function renderAll() {
  document.documentElement.lang = currentLang;
  document.title = t('nav_logo');
  renderNavbar();
  renderHero();
  renderAdvantages();
  renderCatalog();
  renderCalculator();
  renderBooking();
  renderContact();
  renderFooter();
}

function renderNavbar() {
  document.getElementById('navbar').innerHTML = `
    <div class="container nav-inner">
      <a class="nav-logo" href="#">${t('nav_logo')}</a>
      <div class="nav-right">
        <div class="lang-switch">
          <button class="lang-btn${currentLang==='ru'?' active':''}" data-lang="ru" onclick="switchLang('ru')">RU</button>
          <span class="lang-sep">|</span>
          <button class="lang-btn${currentLang==='kz'?' active':''}" data-lang="kz" onclick="switchLang('kz')">KZ</button>
        </div>
        <a class="btn btn-gold" href="#booking">${t('nav_order')}</a>
      </div>
    </div>
  `;
}
function renderHero() {
  document.getElementById('hero').innerHTML = `
    <div class="hero-inner">
      <div class="hero-content">
        <h1 class="hero-title">${t('hero_title').replace(/\n/g,'<br>')}</h1>
        <p class="hero-sub">${t('hero_sub')}</p>
        <div class="hero-actions">
          <a class="btn btn-gold" href="#calculator">${t('hero_cta')}</a>
          <a class="btn btn-outline" href="#catalog">${t('hero_cta2')}</a>
        </div>
      </div>
    </div>
  `;
}
function renderAdvantages() {
  const icons = ['🏭', '📦', '✅', '⚡'];
  const cards = [
    [t('adv1_t'), t('adv1_d')],
    [t('adv2_t'), t('adv2_d')],
    [t('adv3_t'), t('adv3_d')],
    [t('adv4_t'), t('adv4_d')],
  ];
  document.getElementById('advantages').innerHTML = `
    <div class="container">
      <h2 class="section-title">${t('adv_title')}</h2>
      <div class="adv-grid">
        ${cards.map((c, i) => `
          <div class="adv-card">
            <div class="adv-icon">${icons[i]}</div>
            <h3 class="adv-card-title">${c[0]}</h3>
            <p class="adv-card-desc">${c[1]}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function renderCatalog() {
  const modules = CATALOG_DATA.modules;
  document.getElementById('catalog').innerHTML = `
    <div class="container">
      <h2 class="section-title">${t('cat_title')}</h2>
      <div class="cat-grid">
        ${modules.map(m => `
          <div class="cat-card">
            <div class="cat-icon">${m.icon}</div>
            <div class="cat-info">
              <h3 class="cat-name">${t(m.nameKey)}</h3>
              <p class="cat-price">${t('cat_from')} ${m.price.toLocaleString()} ${t('cat_currency')}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="cat-download">
        <a class="btn btn-outline" href="${CATALOG_DATA.catalogPdf}" target="_blank" download>
          📄 ${t('cat_download')}
        </a>
      </div>
    </div>
  `;
}
function renderCalculator() {
  document.getElementById('calculator').innerHTML = `
    <div class="container">
      <h2 class="section-title">${t('calc_title')}</h2>
      <div class="calc-tabs">
        <button class="calc-tab active" id="tab-sqm" onclick="showCalcTab('sqm')">${t('calc_tab_sqm')}</button>
        <button class="calc-tab"        id="tab-mod" onclick="showCalcTab('mod')">${t('calc_tab_mod')}</button>
      </div>

      <!-- Mode A: by m² -->
      <div class="calc-panel" id="panel-sqm">
        <div class="calc-inputs">
          <label class="calc-label">
            ${t('calc_w')}
            <input class="calc-input" type="number" id="calc-w" min="1" max="20" step="0.1" value="3" oninput="calcSqm()" />
          </label>
          <span class="calc-x">×</span>
          <label class="calc-label">
            ${t('calc_d')}
            <input class="calc-input" type="number" id="calc-d" min="0.5" max="5" step="0.1" value="2.5" oninput="calcSqm()" />
          </label>
        </div>
        <p class="calc-sqm-result" id="sqm-area"></p>
        <p class="calc-total" id="sqm-total"></p>
        <a class="btn btn-gold calc-wa-btn" id="calc-wa-sqm" href="#" target="_blank">${t('calc_cta')}</a>
      </div>

      <!-- Mode B: by modules -->
      <div class="calc-panel hidden" id="panel-mod">
        <div class="mod-list" id="mod-list"></div>
        <p class="calc-total" id="mod-total"></p>
        <a class="btn btn-gold calc-wa-btn" id="calc-wa-mod" href="#" target="_blank">${t('calc_cta')}</a>
      </div>
    </div>
  `;
  renderModList();
  calcSqm();
}

function showCalcTab(tab) {
  document.getElementById('panel-sqm').classList.toggle('hidden', tab !== 'sqm');
  document.getElementById('panel-mod').classList.toggle('hidden', tab !== 'mod');
  document.getElementById('tab-sqm').classList.toggle('active', tab === 'sqm');
  document.getElementById('tab-mod').classList.toggle('active', tab === 'mod');
}

function calcSqm() {
  const w = parseFloat(document.getElementById('calc-w')?.value) || 0;
  const d = parseFloat(document.getElementById('calc-d')?.value) || 0;
  const sqm = +(w * d).toFixed(2);
  const min = Math.round(sqm * CATALOG_DATA.pricePerSqm.min);
  const max = Math.round(sqm * CATALOG_DATA.pricePerSqm.max);
  const areaEl = document.getElementById('sqm-area');
  const totalEl = document.getElementById('sqm-total');
  const waBtn   = document.getElementById('calc-wa-sqm');
  if (!areaEl) return;
  areaEl.textContent = `${t('calc_sqm_res')}: ${sqm} м²`;
  totalEl.textContent = `${t('calc_total')} ${min.toLocaleString()} – ${max.toLocaleString()} ${t('cat_currency')}`;
  if (sqm === 0) {
    waBtn.href = '#';
    waBtn.style.opacity = '0.5';
    waBtn.style.pointerEvents = 'none';
  } else {
    waBtn.style.opacity = '';
    waBtn.style.pointerEvents = '';
    const msg = encodeURIComponent(`${t('calc_msg')} ~${sqm} м², ${t('calc_approx')}: ${min.toLocaleString()} – ${max.toLocaleString()} ${t('cat_currency')}`);
    waBtn.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  }
}

function renderModList() {
  const list = document.getElementById('mod-list');
  if (!list) return;
  CATALOG_DATA.modules.forEach(m => { modQty[m.id] = 0; });
  list.innerHTML = CATALOG_DATA.modules.map(m => `
    <div class="mod-row">
      <span class="mod-row-icon">${m.icon}</span>
      <span class="mod-row-name">${t(m.nameKey)}</span>
      <span class="mod-row-price">${m.price.toLocaleString()} ${t('cat_currency')}</span>
      <div class="mod-counter">
        <button onclick="changeQty('${m.id}',-1)">−</button>
        <span id="qty-${m.id}">0</span>
        <button onclick="changeQty('${m.id}',1)">+</button>
      </div>
    </div>
  `).join('');
  calcMod();
}

const modQty = {};
function changeQty(id, delta) {
  modQty[id] = Math.max(0, (modQty[id] || 0) + delta);
  document.getElementById(`qty-${id}`).textContent = modQty[id];
  calcMod();
}

function calcMod() {
  const total = CATALOG_DATA.modules.reduce((sum, m) => sum + (modQty[m.id] || 0) * m.price, 0);
  const totalEl = document.getElementById('mod-total');
  const waBtn   = document.getElementById('calc-wa-mod');
  if (!totalEl) return;
  totalEl.textContent = `${t('calc_total')} ${total.toLocaleString()} ${t('cat_currency')}`;
  const lines = CATALOG_DATA.modules
    .filter(m => (modQty[m.id] || 0) > 0)
    .map(m => `${t(m.nameKey)} x${modQty[m.id]}`)
    .join(', ');
  if (total === 0) {
    waBtn.href = '#';
    waBtn.style.opacity = '0.5';
    waBtn.style.pointerEvents = 'none';
  } else {
    waBtn.style.opacity = '';
    waBtn.style.pointerEvents = '';
    const msg = encodeURIComponent(`${t('calc_msg')}: ${lines}, ${t('calc_total_wa')}: ${total.toLocaleString()} ${t('cat_currency')}`);
    waBtn.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  }
}

let bookingState = {
  type: 'cons',
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  selected: null,
};

function renderBooking() {
  document.getElementById('booking').innerHTML = `
    <div class="container">
      <h2 class="section-title">${t('book_title')}</h2>
      <div class="booking-wrap">
        <div class="book-type-toggle">
          <button class="book-type-btn${bookingState.type==='cons'?' active':''}" onclick="setBookType('cons')">${t('book_cons')}</button>
          <button class="book-type-btn${bookingState.type==='inst'?' active':''}" onclick="setBookType('inst')">${t('book_install')}</button>
        </div>
        <div class="calendar-wrap" id="calendar-wrap"></div>
        <div class="book-form${bookingState.selected?'':' hidden'}" id="book-form">
          <p class="book-selected-date" id="book-date-label"></p>
          <input class="calc-input" type="text"  id="book-name"  placeholder="${t('book_name')}"  />
          <input class="calc-input" type="tel"   id="book-phone" placeholder="${t('book_phone')}" />
          <button class="btn btn-gold book-submit-btn" onclick="submitBooking()">${t('book_submit')}</button>
        </div>
      </div>
    </div>
  `;
  renderCalendar();
}

function setBookType(type) {
  bookingState.type = type;
  bookingState.selected = null;
  renderBooking();
}

function renderCalendar() {
  const { year, month, selected } = bookingState;
  const today = new Date(); today.setHours(0,0,0,0);
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let startDow = (firstDay.getDay() + 6) % 7; // Monday-based: 0=Mon … 6=Sun

  const months = LANG[currentLang].months;
  const days   = LANG[currentLang].days_short;

  let html = `
    <div class="cal-header">
      <button class="cal-nav" onclick="calMove(-1)">‹</button>
      <span class="cal-month-label">${months[month]} ${year}</span>
      <button class="cal-nav" onclick="calMove(1)">›</button>
    </div>
    <div class="cal-grid">
      ${days.map(d => `<div class="cal-day-name">${d}</div>`).join('')}
      ${Array(startDow).fill('<div></div>').join('')}
  `;

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isSun = date.getDay() === 0;
    const isPast = date < today;
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isSelected = selected === dateStr;
    const disabled = isSun || isPast;
    html += `<button
      class="cal-day${isSelected?' selected':''}${disabled?' disabled':''}"
      ${disabled ? 'disabled' : `onclick="selectDate('${dateStr}')"`}
    >${d}</button>`;
  }
  html += '</div>';

  document.getElementById('calendar-wrap').innerHTML = html;

  if (selected) {
    document.getElementById('book-form')?.classList.remove('hidden');
    const [sy, sm, sd] = selected.split('-');
    document.getElementById('book-date-label').textContent =
      `${+sd} ${LANG[currentLang].months[+sm - 1]} ${sy}`;
  }
}

function calMove(dir) {
  const now = new Date();
  const newMonth = bookingState.month + dir;
  const newYear  = bookingState.year;
  if (dir < 0) {
    const target = new Date(newYear, newMonth, 1);
    const curStart = new Date(now.getFullYear(), now.getMonth(), 1);
    if (target < curStart) return;
  }
  bookingState.month += dir;
  if (bookingState.month > 11) { bookingState.month = 0; bookingState.year++; }
  if (bookingState.month < 0)  { bookingState.month = 11; bookingState.year--; }
  renderCalendar();
}

function selectDate(dateStr) {
  bookingState.selected = dateStr;
  renderCalendar();
}

function submitBooking() {
  const name  = document.getElementById('book-name')?.value.trim()  || '—';
  const phone = document.getElementById('book-phone')?.value.trim() || '—';
  const typeText = bookingState.type === 'cons' ? t('book_msg_cons') : t('book_msg_inst');
  const msg = encodeURIComponent(`${typeText} ${bookingState.selected}. ${t('book_name')}: ${name}, ${t('book_phone')}: ${phone}`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

function renderContact() {
  document.getElementById('contact').innerHTML = `
    <div class="container">
      <h2 class="section-title">${t('contact_title')}</h2>
      <p class="contact-sub">${t('contact_sub')}</p>
      <div class="contact-actions">
        <a class="btn btn-gold contact-btn"
           href="https://wa.me/${WA_NUMBER}"
           target="_blank">
          💬 ${t('contact_wa')}
        </a>
        <a class="btn btn-outline contact-btn"
           href="${CATALOG_DATA.instagram}"
           target="_blank">
          📸 ${t('contact_ig')}
        </a>
      </div>
      <p class="contact-phone">${CATALOG_DATA.phone}</p>
    </div>
  `;
}
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="container footer-inner">
      <span class="footer-logo">${t('nav_logo')}</span>
      <span class="footer-copy">${t('footer_copy')}</span>
    </div>
  `;
}
