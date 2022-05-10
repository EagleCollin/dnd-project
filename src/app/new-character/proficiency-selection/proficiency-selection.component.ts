import { Component, OnInit } from '@angular/core';
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
  proficiencyChoices;

  constructor(private newCharacterService: NewCharacterService) {}

  ngOnInit(): void {
    this.newCharacterService.proficiencyChoices.subscribe((response) => {
      this.proficiencyChoices = response;
      console.log(response);
    });
  }
}
