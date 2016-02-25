import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Runner} from '../../country/component/runner';

@Injectable()
export class NameListService {

  private _countryListUrl = 'http://crossorigin.me/'+
  'https://api-test.mynextrun.com/site/v1/profile-stats/countries/';

  constructor(private http: Http) { }

  fetchUserList(country: string): Runner[] {
    return this.http.get(this._countryListUrl+country)
      .map(res => res.json());
  }

  fetchCountryList() {
    return this.http.get(this._countryListUrl)
      .map(res => res.json());
  }

}
