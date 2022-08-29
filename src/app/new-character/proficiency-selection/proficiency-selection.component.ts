import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CharacterDisplayService } from 'src/app/character-display/charatcer-display.service';

import { CharacterService } from 'src/app/shared/character.service';
import { NewCharacterService } from '../new-character.service';
import {
  ProficiencyChoice,
  ProficiencyDetails,
} from '../new-character.service';

@Component({
  selector: 'app-proficiency-selection',
  templateUrl: './proficiency-selection.component.html',
  styleUrls: ['./proficiency-selection.component.css'],
})
export class ProficiencySelectionComponent implements OnInit {
  currStep = 1;
  proficiencyChoices: any[] = [];

  constructor(
    private newCharacterService: NewCharacterService,
    private characterDisplayService: CharacterDisplayService,
    private router: Router,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    if (this.newCharacterService.newCharacter.class == '') {
      this.router.navigate(['create-character']);
    } else {
      this.proficiencyChoices = this.newCharacterService?.proficiencyChoices;
    }
  }

  onNextStep() {
    this.currStep - this.currStep + 1;

    if (this.currStep > this.proficiencyChoices.length) {
      this.characterDisplayService.currCharacter.next(
        this.newCharacterService.newCharacter
      );

      this.router.navigate(['create-character/attributes']);
    }
  }
}
