'use strict';

// 秋田2泊3日のモデルコース。内容を変えたいときはこの配列を編集してください。
const itinerary = {
  1: {
    kicker: 'DAY 01 / KAKUNODATE · TAZAWAKO · NYUTO',
    title: '小京都を歩き、青い湖に恋する。',
    description: '城下町の静けさから、どこまでも青い湖へ。締めくくりは森の奥の秘湯。秋田に来てよかったと思う、最高の初日。',
    image: 'https://media.timeout.com/images/106164075/1372/1029/image.jpg',
    alt: '角館武家屋敷通りの美しい桜並木',
    visualTitle: '角館、江戸の面影に出会う。',
    events: [
      ['10:00', '秋田空港に到着・レンタカー出発', '旅の始まり。空港で車を受け取り角館へ（移動約1時間）。'],
      ['11:30', '角館・武家屋敷通り', '黒板塀と歴史ある屋敷。季節ごとに表情が変わる町並みを散策。'],
      ['12:45', 'ご当地ランチ＆カフェ', '比内地鶏の親子丼や稲庭うどんを楽しんで。'],
      ['14:15', '田沢湖・たつこ像', '瑠璃色の湖面を眺めて、思い出の一枚を。'],
      ['16:00', '乳頭温泉郷へチェックイン', '山あいの宿でゆったり。宿泊先の温泉を堪能。'],
      ['18:30', '温泉宿で郷土料理の夕食', '夜は星空と静けさを楽しむ、何もしない贅沢。']
    ],
    stay: 'STAY ｜ 乳頭温泉郷周辺の温泉宿'
  },
  2: {
    kicker: 'DAY 02 / NYUTO · OGA PENINSULA',
    title: '秘湯の朝から、日本海の夕日へ。',
    description: '朝風呂と山の空気で心がほどける。車を走らせ男鹿半島へ。なまはげ文化の迫力と、海が金色に染まる夕暮れを。',
    image: 'https://www.jreast.co.jp/akita/touring-guide/img/cs3-spot7.jpg',
    alt: '男鹿半島の入道崎灯台と日本海の夕暮れ',
    visualTitle: '日本海に、日が沈む。',
    events: [
      ['07:30', '森の朝風呂と朝食', '温泉に浸かり、山の澄んだ空気を吸い込んで。'],
      ['09:00', 'チェックアウト・男鹿へ', '男鹿半島へロングドライブ（休憩を含め約3時間）。'],
      ['12:15', '男鹿の海鮮ランチ', '日本海の恵みをいただく。旬の魚を楽しもう。'],
      ['13:45', 'なまはげ館・男鹿真山伝承館', '各地のお面と伝承行事の実演を体感（実演時間要確認）。'],
      ['16:15', '入道崎・灯台と海の風景', '北緯40度の岬へ。夕日が見える時間は季節で変わります。'],
      ['18:30', '男鹿温泉郷で夕食・宿泊', '地元の味と温泉で一日の疲れを癒やす。']
    ],
    stay: 'STAY ｜ 男鹿温泉郷周辺の温泉宿'
  },
  3: {
    kicker: 'DAY 03 / OGA · AKITA CITY',
    title: '秋田のおいしい余韻を持ち帰る。',
    description: '最後の日は少しのんびり。男鹿の景色をあとにして、秋田市へ。美味しいものとお土産をたっぷり選んだら、次に来る約束を。',
    image: 'https://shun-gate.com/wp-content/uploads/2025/02/akita_kiritanpo_TOP-1536x1025.jpg',
    alt: '秋田の名物きりたんぽ鍋',
    visualTitle: '最後の一口まで、秋田を。',
    events: [
      ['08:00', '温泉宿で朝ごはん', '旅の最終日は、いつもより少しゆっくりと。'],
      ['09:30', '男鹿の海岸ドライブ', '天気に合わせて展望スポットへ立ち寄り。'],
      ['11:30', '秋田市へ移動', '道中の景色も楽しみながら市内へ（約1〜1.5時間）。'],
      ['13:00', '秋田グルメで締めのランチ', 'きりたんぽ鍋や稲庭うどんなど、食べ逃しを回収。'],
      ['14:15', '秋田駅周辺でお土産探し', 'いぶりがっこ、銘菓、地酒、曲げわっぱなどをチェック。'],
      ['15:30', '秋田空港へ・レンタカー返却', '空港へは余裕を持って。17時以降の便を想定。']
    ],
    stay: 'GOAL ｜ お土産と思い出をスーツケースに'
  }
};

const dayPanel = document.getElementById('day-panel');
const tabs = [...document.querySelectorAll('.day-tab')];
let selectedDay = 1;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function renderDay(day) {
  const entry = itinerary[day];
  if (!entry || !dayPanel) return;
  selectedDay = Number(day);
  tabs.forEach(tab => {
    const active = Number(tab.dataset.day) === selectedDay;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  dayPanel.innerHTML = `
    <div class="day-panel-grid">
      <div class="day-visual">
        <img src="${escapeHTML(entry.image)}" alt="${escapeHTML(entry.alt)}" loading="lazy">
        <div class="day-visual-caption"><small>AKITA, JAPAN / DAY 0${selectedDay}</small><h3>${escapeHTML(entry.visualTitle)}</h3></div>
      </div>
      <div class="day-copy">
        <span class="day-kicker">${escapeHTML(entry.kicker)}</span>
        <h3>${escapeHTML(entry.title)}</h3>
        <p class="day-description">${escapeHTML(entry.description)}</p>
        <div class="timeline">
          ${entry.events.map(([time, title, desc]) => `
            <div class="timeline-item"><time class="timeline-time">${escapeHTML(time)}</time><h4>${escapeHTML(title)}</h4><p>${escapeHTML(desc)}</p></div>
          `).join('')}
        </div>
        <div class="stay-chip">${escapeHTML(entry.stay)}</div>
      </div>
    </div>`;
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => renderDay(tab.dataset.day));
  tab.addEventListener('keydown', event => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const next = (index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
    renderDay(tabs[next].dataset.day);
    tabs[next].focus();
  });
});
renderDay(1);

// 持ち物チェックをブラウザに保存。保存できない環境でもチェック機能は使えます。
const checkboxes = [...document.querySelectorAll('#packingList input[type="checkbox"]')];
const storageKey = 'akita-trip-packing-v1';
function loadPacking() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    checkboxes.forEach(input => { input.checked = saved.includes(input.dataset.item); });
  } catch (_) { /* 制限環境では保存を省略 */ }
}
function updatePacking() {
  const checked = checkboxes.filter(input => input.checked).map(input => input.dataset.item);
  const percent = Math.round(checked.length / checkboxes.length * 100);
  document.getElementById('packingPercent').textContent = `${percent}%`;
  document.getElementById('packingBar').style.width = `${percent}%`;
  try { localStorage.setItem(storageKey, JSON.stringify(checked)); } catch (_) {}
}
checkboxes.forEach(input => input.addEventListener('change', updatePacking));
document.getElementById('resetPacking').addEventListener('click', () => { checkboxes.forEach(input => { input.checked = false; }); updatePacking(); });
loadPacking();
updatePacking();

// 出発日を選ぶと、現地時間で3日間の日付を表示します。
const dateInput = document.getElementById('startDate');
const dateSummary = document.getElementById('dateSummary');
const dateStorageKey = 'akita-trip-start-v1';
try { dateInput.value = localStorage.getItem(dateStorageKey) || ''; } catch (_) {}
function updateDate() {
  const value = dateInput.value;
  if (!value) { dateSummary.textContent = '日程を選ぶと3日間の日付が表示されます。'; return; }
  const parts = value.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return;
  const start = new Date(parts[0], parts[1] - 1, parts[2], 12);
  const fmt = new Intl.DateTimeFormat('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' });
  const dates = [0, 1, 2].map(offset => { const d = new Date(start); d.setDate(d.getDate() + offset); return fmt.format(d); });
  dateSummary.textContent = `1日目 ${dates[0]} ／ 2日目 ${dates[1]} ／ 3日目 ${dates[2]}`;
  try { localStorage.setItem(dateStorageKey, value); } catch (_) {}
}
dateInput.addEventListener('change', updateDate);
updateDate();

// スクロール進捗バー
const progress = document.getElementById('progress');
let scrollScheduled = false;
function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0}%`;
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) { requestAnimationFrame(updateScroll); scrollScheduled = true; }
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

// 印刷時には全3日分を出す（画面表示は元に戻します）。
function printAllDays() {
  const original = dayPanel.innerHTML;
  const day = selectedDay;
  const fragments = [];
  for (let d = 1; d <= 3; d++) {
    renderDay(d);
    fragments.push(`<section class="print-day"><h2>DAY 0${d}</h2>${dayPanel.innerHTML}</section>`);
  }
  dayPanel.innerHTML = fragments.join('');
  const style = document.createElement('style');
  style.textContent = '@media print{.print-day{break-before:page;page-break-before:always;margin:20px 0}.print-day h2{font-size:24px}.print-day .day-visual{height:300px}}';
  document.head.appendChild(style);
  const cleanup = () => { style.remove(); renderDay(day); window.removeEventListener('afterprint', cleanup); };
  window.addEventListener('afterprint', cleanup);
  window.print();
  // afterprint未対応ブラウザ向け。印刷ダイアログ終了時に戻す。
  window.setTimeout(() => { if (document.querySelector('.print-day')) cleanup(); }, 1500);
}
document.getElementById('printTop').addEventListener('click', printAllDays);
document.getElementById('printGuide').addEventListener('click', printAllDays);
