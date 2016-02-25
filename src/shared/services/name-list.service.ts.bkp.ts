import {Injectable}     from 'angular2/core';
// import {Http} from 'angular2/http';
// import {Http, Response} from 'angular2/http';

@Injectable()
export class NameListService {

  //Test
  users = [
    'Kay Bui',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ];

  userList = [];

  countryList = [];

  countries = [
    'Finland',
    'Norway',
    'Denmark',
    'Estonia'
  ];

  // URL to web api
  // private _countryListUrl = 'http://crossorigin.me/'+
  // 'https://api-test.mynextrun.com/site/v1/profile-stats/countries/'; 

  // constructor(public http: Http) { }

  getCountries(): string[] {
    return this.countryList;
  }

  getUsers(): string[] {
    return this.userList;
  }

  fetchUserList(country: string): void {
    // call api 
    //Mock 
    this.userList = [];
    this.userList.push(this.users[+country]);
  }

  fetchCountryList(): void {
    // call api 
    //Mock 
    this.countryList = this.countries;
  }
}
