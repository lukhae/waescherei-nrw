/**
 * cursor.ts — Sparkle Star Cursor (Cleaning Service Edition)
 */
(function () {
  'use strict';

  const COLORS: string[] = ['#4DB8D4', '#9ADDEF', '#C8EEF7', '#ffffff', '#6CCCE7'];

  // Cursor dot
  const dot = document.createElement('div');
  dot.style.cssText = [
    'position:fixed', 'width:10px', 'height:10px',
    'background:#4DB8D4', 'border-radius:50%',
    'pointer-events:none', 'z-index:2147483647',
    'transform:translate(-50%,-50%)',
    'transition:width .15s,height .15s,background .15s',
    'will-change:left,top',
  ].join(';');
  document.body.appendChild(dot);
  document.body.style.cursor = 'none';

  const glStyle = document.createElement('style');
  glStyle.textContent = [
    '.glightbox-container', '.glightbox-container *',
    '.goverlay', '.glightbox-clean', '.gslide', '.gslide *',
  ].join(',') + '{ cursor: none !important; }';
  document.head.appendChild(glStyle);

  let mX = -200, mY = -200;

  function starPath(cx: number, cy: number, outerR: number, innerR: number): string {
    const pts: string[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI / 4) * i - Math.PI / 2;
      const r = i % 2 === 0 ? outerR : innerR;
      pts.push(`${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`);
    }
    return 'M' + pts.join('L') + 'Z';
  }

  function spawnStar(x: number, y: number): void {
    const size = 7 + Math.random() * 10;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const angle = Math.random() * 360;
    const vx = (Math.random() - 0.5) * 2.8;
    const vy = (Math.random() - 0.5) * 2.8 - 1.2;
    const spin = (Math.random() - 0.5) * 7;
    const half = size / 2;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
    svg.style.cssText = [
      'position:fixed', 'pointer-events:none',
      'z-index:2147483646', 'will-change:transform,opacity',
      `left:${x}px`, `top:${y}px`,
      `transform:translate(-50%,-50%) rotate(${angle}deg)`,
    ].join(';');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', starPath(half, half, half, half * 0.38));
    path.setAttribute('fill', color);
    svg.appendChild(path);
    document.body.appendChild(svg);

    let opacity = 1, scale = 1, px = x, py = y, rot = angle;

    (function tick() {
      opacity -= 0.038;
      scale   -= 0.018;
      px += vx;
      py += vy;
      rot += spin;
      if (opacity <= 0) { svg.remove(); return; }
      svg.style.left = `${px}px`;
      svg.style.top  = `${py}px`;
      svg.style.opacity = String(opacity);
      svg.style.transform = `translate(-50%,-50%) rotate(${rot}deg) scale(${Math.max(0, scale)})`;
      requestAnimationFrame(tick);
    })();
  }

  let lastSpawnX = 0, lastSpawnY = 0;
  const SPAWN_DIST = 12;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mX = e.clientX;
    mY = e.clientY;
    dot.style.left = `${mX}px`;
    dot.style.top  = `${mY}px`;
    const dx = mX - lastSpawnX, dy = mY - lastSpawnY;
    if (Math.sqrt(dx * dx + dy * dy) >= SPAWN_DIST) {
      spawnStar(mX, mY);
      lastSpawnX = mX;
      lastSpawnY = mY;
    }
  }, { passive: true });

  const INTERACTIVE = 'a,button,input,select,textarea,[role="button"],label';

  document.addEventListener('mouseover', (e: MouseEvent) => {
    if ((e.target as Element).closest(INTERACTIVE)) {
      dot.style.width = '5px';
      dot.style.height = '5px';
      dot.style.background = '#2DA5C1';
    }
  });
  document.addEventListener('mouseout', (e: MouseEvent) => {
    if ((e.target as Element).closest(INTERACTIVE)) {
      dot.style.width = '10px';
      dot.style.height = '10px';
      dot.style.background = '#4DB8D4';
    }
  });

  window.addEventListener('click', (e: MouseEvent) => {
    for (let i = 0; i < 5; i++) spawnStar(e.clientX, e.clientY);
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; });
})();
