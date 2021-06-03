import { User } from "../../models/user";

const usersJson = require('../../../public/users.json');
const imagesJson = require('../../../public/images.json');

export class BestScoreInnerHTML {
  trs: string;
  constructor() {
    this.trs = this.create();
  }

  private collectUsers(): User[] {
    const fullUsers: User[] = [];

    const usersFromJson = [];
    for (const key in usersJson) {
      if (Object.prototype.hasOwnProperty.call(usersJson, key)) {
        usersFromJson.push(usersJson[key]);
      }
    }

    const imagesFromJson = [];
    for (const key in imagesJson) {
      if (Object.prototype.hasOwnProperty.call(imagesJson, key)) {
        imagesFromJson.push(imagesJson[key]);
      }
    }
    const avas = [];
    for (const key in imagesFromJson) {
      if (Object.prototype.hasOwnProperty.call(imagesFromJson, key)) {
        const element = imagesFromJson[key];
        if (element.category === 'ava') {
          for (const el of element.images) {
            avas.push(`./images/ava/${el}`);
          }
        }
      }
    }

    for (let i = 0; i < usersFromJson.length; i++) {
      const ava = i >= avas.length - 1 ? avas[0] : avas[i + 1];
      const score = Math.floor(350 + Math.random() * (3500 - 350));
      const user = new User(usersFromJson[i].name, usersFromJson[i].email, ava, score);
      fullUsers.push(user);
    }

  return fullUsers;
}

  private create(): string {
    const users: User[] = this.collectUsers();
    const sortedUsers = users.sort((u1, u2) => u2.score - u1.score);

    let allTrs = '';
    for (let i = 0; i < sortedUsers.length; i++) {
      const tr = `
      <tr>
        <td><img src="${sortedUsers[i].ava}" alt="" class="ava"></td>
        <td>
          <div class="info">
            <div class="name">${sortedUsers[i].name}</div>
            <div class="email">${sortedUsers[i].email}</div>
          </div>
        </td>
        <td>Score: <span class="score">${sortedUsers[i].score}</span></td>
      </tr>
      `;
      allTrs += tr;
    }
    return allTrs;
  }
}
