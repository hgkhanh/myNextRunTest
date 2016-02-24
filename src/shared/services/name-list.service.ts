export class NameListService {
  users = [
    'Kay Bui',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ];

  userList = [];

  countries = [
    'Finland',
    'Norway',
    'Denmark',
    'Estonia'
  ];

  getCountries(): string[] {
    return this.countries;
  }

  getUsers(): string[] {
    return this.userList;
  }

  updateUserList(country: string): void {
    console.log('country:'+country);
    this.userList = [];
    this.userList.push(this.users[+country]);
  }
}
