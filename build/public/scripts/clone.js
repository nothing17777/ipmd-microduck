// hand-ported behaviors from BEHAVIORS.md — mobile drawer, cookie banner, gallery video play, sound toggle.
(function () {
  var burger = document.getElementById('mduck-burger');
  var drawer = document.getElementById('drawer');
  var backdrop = document.getElementById('drawer-backdrop');
  var closeBtn = document.getElementById('drawer-close');
  function openDrawer() { drawer.classList.add('open'); backdrop.classList.add('open'); }
  function closeDrawer() { drawer.classList.remove('open'); backdrop.classList.remove('open'); }
  if (burger) burger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  var banner = document.getElementById('cookie-banner');
  function hideBanner() { if (banner) banner.classList.add('hidden'); }
  var accept = document.getElementById('cookie-accept');
  var reject = document.getElementById('cookie-reject');
  var customize = document.getElementById('cookie-customize');
  if (accept) accept.addEventListener('click', function () { localStorage.setItem('cookie-consent', 'accepted'); hideBanner(); });
  if (reject) reject.addEventListener('click', function () { localStorage.setItem('cookie-consent', 'rejected'); hideBanner(); });
  if (customize) customize.addEventListener('click', hideBanner);
  try { if (localStorage.getItem('cookie-consent')) hideBanner(); } catch (e) {}

  document.querySelectorAll('.tile-video, .film-play-btn').forEach(function (el) {
    el.addEventListener('click', function () {
      var video = el.querySelector('video');
      if (!video) return;
      if (video.paused) { video.muted = false; video.play(); } else { video.pause(); }
    });
  });

  document.querySelectorAll('.sound-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var video = btn.closest('.tile-video').querySelector('video');
      video.muted = !video.muted;
      btn.textContent = video.muted ? '🔇 Sound off' : '🔊 Sound on';
    });
  });
})();
