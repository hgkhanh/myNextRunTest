import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-country',
  moduleId: module.id,
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class CountryComponent {
  countries: string[];

  constructor(public nameListService: NameListService) {
    this.countries = nameListService.getCountries();
    console.log('clgt');
  }

  onCountryChangeEvent (newCountry): void {
    console.log('change');
    this.nameListService.updateUserList(newCountry);
  }
}
