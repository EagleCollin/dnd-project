import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  characterSubject = new Subject<[]>();
  proficiencyChoices: any = [];
  newCharacter: any = {
    name: '',
    class: '',
    level: 1,
    race: '',
    background: '',
    proficiencies: [],
    otherProficiencies: [],
  };

  constructor(
    private http: HttpClient,
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  chooseCless(newClassName: string) {
    this.newCharacter.class = newClassName;
    this.characterSubject.next(this.newCharacter);

    this.prepareProficiencies(newClassName);
  }

  prepareProficiencies(charClass: string) {
    this.http
      .get(`https://www.dnd5eapi.co/api/classes/${charClass}`)
      .subscribe((results: any) => {
        this.newCharacter.proficiencies = results.proficiencies.map(
          (proficiency: any) => proficiency.name
        );
        this.proficiencyChoices = results.proficiency_choices;

        this.router.navigate(['create-character/select-proficiencies'], {
          relativeTo: this.route,
        });
      });
  }

  onCharacterCreationComplete() {
    this.characterService.addCharacter(this.newCharacter);
  }
}
