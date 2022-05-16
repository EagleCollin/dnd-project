import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character } from '../shared/character-model';
import { CharacterService } from '../shared/character.service';

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
  selectedProficiencyIds = new Subject();
  proficiencyChoices = new Subject<ProficiencyChoice[]>();
  newCharacter: any = {
    name: '',
    class: '',
    level: 1,
    race: '',
    background: '',
  };

  constructor(
    private http: HttpClient,
    private characterService: CharacterService
  ) {}

  onClassSelect(charClass: string) {
    const formattedSearch = charClass.toLocaleLowerCase();
    this.newCharacter.class = charClass;

    this.http
      .get(`https://www.dnd5eapi.co/api/classes/${formattedSearch}`)
      .subscribe((results: any) => {
        console.log(results);
        const choices = results.proficiency_choices;
        this.proficiencyChoices.next(choices);
      });
  }
}
