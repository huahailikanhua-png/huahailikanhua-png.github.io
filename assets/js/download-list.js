(function () {
  'use strict';

  var site = window.DOWNLOAD_SITE;
  if (!site) {
    return;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if (site.title) {
    document.title = site.title;
    var title = byId('site-title');
    if (title) {
      title.textContent = site.title;
    }
  }

  var intro = byId('site-intro');
  if (intro && site.intro) {
    intro.textContent = site.intro;
  }

  var list = byId('download-list');
  if (!list) {
    return;
  }

  var items = Array.isArray(site.items) ? site.items : [];
  var pics = [
    'images/pic01.jpg', 'images/pic02.jpg', 'images/pic03.jpg',
    'images/pic04.jpg', 'images/pic05.jpg', 'images/pic06.jpg'
  ];
  var html = '';

  items.forEach(function (item, index) {
    var file = item.file || '#';
    var image = item.image || pics[index % pics.length];
    var meta = [item.version, item.size, item.date]
      .filter(function (value) { return value && String(value).trim(); })
      .map(esc)
      .join(' · ');

    html += '<section>'
      + '<a href="' + esc(file) + '" class="image" download><img src="' + esc(image) + '" alt="' + esc(item.name || '') + '" data-position="center center" /></a>'
      + '<div class="content"><div class="inner">'
      + '<h2>' + esc(item.name || '未命名资源') + '</h2>'
      + (meta ? '<p class="dl-meta">' + meta + '</p>' : '')
      + '<p>' + esc(item.description || '') + '</p>'
      + '<ul class="actions"><li><a href="' + esc(file) + '" class="button" download>下载</a></li></ul>'
      + '</div></div>'
      + '</section>';
  });

  list.innerHTML = html || '<p>暂无资源，请在 downloads.js 里添加。</p>';
})();
