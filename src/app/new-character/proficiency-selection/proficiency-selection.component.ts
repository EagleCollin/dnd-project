import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  proficienciesSelectedForm = new FormGroup({
    // proficiencyChoices: new FormArray([])
  })

  proficiencyChoices = [];
  proficiencyChoiceTypes = [];
  proficiencyChoiceNumber = [];

  constructor(private newCharacterService: NewCharacterService) {}

  ngOnInit(): void {
    this.newCharacterService.proficiencyChoices.subscribe((response) => {
      this.proficiencyChoiceNumber = response.map((res) => res.choose);
      this.proficiencyChoiceTypes = response.map((data) => data.from);


      console.log(this.proficiencyChoiceTypes);
      console.log(this.proficiencyChoiceNumber);
    });

  }

  proficiencyChoicesSubmit(){
    console.log(this.proficienciesSelectedForm)
  }

  proficiencyChoiceList(choice){
    this.proficiencyChoices.push(choice)
    console.log(this.proficiencyChoices)
  }
}
