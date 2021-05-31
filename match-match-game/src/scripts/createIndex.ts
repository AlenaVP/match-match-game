export function createIndex(): void {
  const circleImg = require('../assets/images/icon/circle.svg');
  const starImg = require('../assets/images/icon/star.svg');
  const gearImg = require('../assets/images/icon/gear.svg');

  document.body.innerHTML = `
<header class="header">
<div class="header-wrapper">
  <div class="header-left">
    <div class="logo">
      <div class="logo-top">match</div>
      <div class="logo-bottom">match</div>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__list__item">
          <a href="about.html" class="active">
            <figure>
              <img src="${circleImg}" alt="">
              <div class="question-sign">?</div>
              <figcaption>about game</figcaption>
            </figure>
          </a>
        </li>
        <li class="nav__list__item">
          <a href="score.html">
            <figure>
              <img src="${starImg}" alt="">
              <figcaption>best score</figcaption>
            </figure>
          </a>
        </li>
        <li class="nav__list__item">
          <a href="settings.html">
            <figure>
              <img src="${gearImg}" alt="">
              <figcaption>game settings</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="header-right">
    <button type="button" class="btn register-btn">register new player</button>
  </div>
</div>
<h1>Match-match-game</h1>
</header>
<main class="main"></main>`;
}
