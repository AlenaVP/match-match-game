export class User {
  name: string;

  email: string;

  ava: any;

  score: number;

  constructor(name: string, email: string, ava: any, score: number) {
    this.name = name;
    this.email = email;
    this.ava = ava;
    this.score = score;
  }
}
