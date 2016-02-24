export class NameListService {
  users = [
    'Kay Bui',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ];

  countries = [
    'Finland',
    'Norway',
    'Denmark',
    'Estonia'
  ];

  getCountries(): string[] {
    return this.countries;
  }

  getUsers(country: string): string[] {
    return this.users;
  }
}
