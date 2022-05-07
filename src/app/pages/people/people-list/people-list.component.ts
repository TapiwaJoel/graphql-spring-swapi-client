import {Component, OnInit} from '@angular/core';
import {Person} from "../person.type";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  public people: Partial<Person> | any = {};
  public loading = true;
  public selectedPerson: any;
  public pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public errors: any;


  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.loadPeople('1')
  }

  public loadPeople(page: string): void {
    this.loading = true;
    this.peopleService.getPeople(page).valueChanges.subscribe((results: any) => {
      this.people = results.data.people.results;
      this.loading = results.loading;
      this.errors = results.errors;
    })
  }

  public setSelectedPerson(selectedPerson: any): void {
    this.errors = null;
    this.peopleService.searchPeopleByName(selectedPerson.name).valueChanges.subscribe((results: any) => {
      this.selectedPerson = results.data.search.results[0];
      this.errors = results.errors;
    })
  }
}
