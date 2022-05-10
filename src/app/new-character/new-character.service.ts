import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ProficiencyChoice {
  choose: number;
  from: ProficiencyDetails[];
}

export interface ProficiencyDetails {
  index: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewCharacterService {
  proficiencyChoices = new Subject<ProficiencyChoice[]>();

  constructor(private http: HttpClient) {}

  onClassSelect(charClass: string) {
    const formattedSearch = charClass.toLocaleLowerCase();

    this.http
      .get(`https://www.dnd5eapi.co/api/classes/${formattedSearch}`)
      .subscribe((results: any) => {
        console.log(results);
        const choices = results.proficiency_choices;
        this.proficiencyChoices.next(choices);
      });
  }
}
