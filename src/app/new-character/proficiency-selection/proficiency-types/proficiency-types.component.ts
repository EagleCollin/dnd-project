import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NewCharacterService } from '../../new-character.service';

@Component({
  selector: 'app-proficiency-types',
  templateUrl: './proficiency-types.component.html',
  styleUrls: ['./proficiency-types.component.css'],
})
export class ProficiencyTypesComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  @Input() proficiencyChoices: any = [];
  proficiencyChoiceList = [];
  proficiencyChoiceArray = [];
  proficiencyGroupArray = [];
  proficienciesForm: UntypedFormGroup;
  hasSubmit = false;

  get proficienciesFormArray() {
    return this.proficienciesForm.controls['proficiencies'] as UntypedFormArray;
  }
  constructor(
    private newCharacterService: NewCharacterService,
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {
    this.proficienciesForm = this.formBuilder.group({
      proficiencies: new UntypedFormArray([]),
    });
  }

  ngOnInit(): void {
    if (this.newCharacterService.newCharacter.class == '') {
      this.router.navigate(['create-character']);
    } else {
      this.proficiencyChoiceList = this.newCharacterService.proficiencyChoices;
      this.setProficiencyChoiceArray();
      this.addCheckboxesToForm();
    }
  }

  private addCheckboxesToForm() {}

  private setProficiencyChoiceArray() {
    this.proficiencyChoiceList?.forEach((object) => {
      this.proficiencyGroupArray.push(object);
    });
    console.log(this.proficiencyGroupArray);
  }

  hasChoicesLeft() {
    const numBoxesChecked = this.proficienciesForm.value.proficiencies.filter(
      (item) => item == true
    ).length;

    return numBoxesChecked < this.proficiencyChoices.choose ? true : false;
  }

  resetChoice() {
    this.proficienciesForm.reset();

    this.hasSubmit = false;

    this.newCharacterService.newCharacter.proficiencies =
      this.newCharacterService.newCharacter.proficiencies.slice(0, -3);
  }

  onSubmitProficiencyChoices() {
    const selectedChoices: string[] = [];
    const benchmark = this.proficienciesForm.value.proficiencies;

    this.proficiencyChoices.from.forEach((choice: any, idx: number) => {
      benchmark[idx] && selectedChoices.push(choice.name);
    });

    this.newCharacterService.newCharacter.proficiencies.push(
      ...selectedChoices
    );

    this.hasSubmit = true;
    this.nextStep.emit();
  }
}
