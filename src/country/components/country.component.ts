import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-country',
  moduleId: module.id,
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  providers: [HTTP_PROVIDERS, NameListService]
})
export class CountryComponent implements OnInit {

  constructor(public nameListService: NameListService) { }

  countries: string[];
  users: string[];
  errorMessage: string;

  ngOnInit() { this.getCountries(); }

  getCountries() {
    this.nameListService.fetchCountryList()
      .subscribe(
    countries => this.countries = countries,
      error => this.errorMessage = <any>error);
    // this.countries = this.nameListService.fetchCountryList();
  }

  getUsers(newCountry) {
    this.nameListService.fetchUserList(newCountry)
      .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
  }

  onCountryChangeEvent(newCountry): void {
    this.getUsers(newCountry);
  }
}
