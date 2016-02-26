import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Runner} from './runner';
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

  countries = [];
  selected_country = 'Selected Country';
  runners = [];
  errorMessage: string;
  searchText = '';
  isLoading: Boolean = false;

  ngOnInit() { this.fetchCountries(); }

  // Call service to fetch Country List, save to this.countries
  fetchCountries() {
    this.isLoading = true;
    this.nameListService.fetchCountryList()
      .subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      },
      error => this.errorMessage = <any>error);
  }

  // Call service to fetch User List, save to this.runners
  fetchUsers(newCountry) {
    this.isLoading = true;
    this.nameListService.fetchUserList(newCountry)
      .subscribe(
      runners => {
        this.runners = runners;
        this.isLoading = false;
      },
      error => this.errorMessage = <any>error);
  }

  onCountryChangeEvent(newCountry): void {
    this.selected_country = newCountry;
    this.fetchUsers(newCountry);
  }

  filterUsers(searchText): Runner[] {
    searchText = searchText.toLowerCase();
    if (searchText == null || searchText.length == 0) {
      return this.runners;
    } else {
      return this.runners.map((runner) => {
        //foreach element of runners array, 
        //return if its 'name' or 'city' match searchText
        if (runner.name.toLowerCase().indexOf(searchText) !== -1
      || runner.city.toLowerCase().indexOf(searchText) !== -1)
          return runner;
      }).filter(x=>!!x);
    }
  }
}
