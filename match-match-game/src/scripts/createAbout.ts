export function createAbout(isAuthorized: boolean): void {
  const registerImg = require('../assets/images/image1.svg');
  const settingsImg = require('../assets/images/image2.svg');
  const gameFieldImg = require('../assets/images/image3.svg');

  const emptyImg = require('../assets/images/empty.svg');

  const main: any = document.querySelector('.main');

  if (!isAuthorized) {
    const emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"
    + "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    main.innerHTML = `
    <div class="cover hidden"></div>
    <div class="form-register hidden" id="form-register">
      <div class="form-title">Register new Player</div>
      <form action="" id="register">
        <div class="left">
          <div class="input-field">
            <input type="text" name="first-name" id="first-name" required pattern="[A-Za-z]+">
            <div class="label-box">
              <label for="first-name">First Name</label>
            </div>
            <div class="validate-box"></div>
          </div>
          <div class="input-field">
            <input type="text" name="last-name" id="last-name" required pattern="[A-Za-z]+">
            <div class="label-box">
              <label for="last-name">Last Name</label>
            </div>
            <div class="validate-box"></div>
          </div>
          <div class="input-field">
            <input type="email" name="email" id="email" required
              pattern="${emailPattern}">
            <div class="label-box">
              <label for="email">E-mail</label>
            </div>
            <div class="validate-box"></div>
          </div>
        </div>
        <div class="right">
          <div class="photo">
            <img src="${emptyImg}" alt="avatar">
          </div>
          <div class="buttons">
            <button type="submit" id="add-user" class="btn btn-add invalid">Add user</button>
            <button type="reset" class="btn btn-cancel">cancel</button>
          </div>
        </div>
      </form>
    </div>
    <h2>How to play?</h2>
    <div class="content-wrapper">
      <div class="column1">
        <div class="column1-item1">
          <div class="number">1</div>
          <div class="text">Register new player in game</div>
        </div>
        <div class="column1-item2">
          <div class="number">2</div>
          <div class="text">Configure your game settings</div>
        </div>
        <div class="column1-item3">
          <div class="number">3</div>
          <div class="text">Start you new game! Remember card positions and match it before times up.</div>
        </div>
      </div>
      <div class="column2">
        <a href="../index.html" class="column2-item1"><img src="${registerImg}" alt="register"></a>
        <a href="../index.html" class="column2-item2"><img src="${settingsImg}" alt="settings"></a>
        <a href="../index.html" class="column2-item3"><img src="${gameFieldImg}" alt="game field"></a>
      </div>
    </div>
  </main>
    `;
  }
}
