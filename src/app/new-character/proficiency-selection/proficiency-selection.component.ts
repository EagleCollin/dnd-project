import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  proficienciesSelectedForm: FormGroup;

  proficiencyChoices = [];
  proficiencyChoiceTypes = [];
  proficiencyChoiceNumber = [];

  get proficienciesFormArray() {
    return this.proficienciesSelectedForm.controls.proficiencies as FormArray;
  }

  constructor(
    private newCharacterService: NewCharacterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.newCharacterService.newCharacter);

    this.newCharacterService.proficiencyChoices.subscribe((response) => {
      this.proficiencyChoiceNumber = response.map((res) => res.choose);
      this.proficiencyChoiceTypes = response.map((data) => data.from);

      console.log(this.proficiencyChoiceNumber);
      this.proficienciesSelectedForm = this.formBuilder.group({
        proficiencies: new FormArray([]),
      });
      for (let i = 0; i < this.proficiencyChoiceTypes.length; i++) {
        this.proficiencyChoiceTypes[i].forEach((choice) => {
          this.proficiencyChoices.push(choice);
        });
        console.log(this.proficiencyChoices);
      }
      this.addCheckboxesToForm();
    });
  }
  private addCheckboxesToForm() {
    this.proficiencyChoiceTypes[0].forEach(() =>
      this.proficienciesFormArray.push(new FormControl(false))
    );
  }

  proficiencyChoicesSubmit() {
    const selectedProficiencies =
      this.proficienciesSelectedForm.value.proficiencies
        .map((selected, i) =>
          selected ? this.proficiencyChoices[i].name : null
        )
        .filter((v) => v !== null);
    console.log(selectedProficiencies);
    this.newCharacterService.selectedProficiencyIds.next(selectedProficiencies);
    this.router.navigate(['input'], { relativeTo: this.route });
  }
}
