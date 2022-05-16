import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewCharacterService } from '../new-character.service';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrls: ['./character-input.component.css'],
})
export class CharacterInputComponent implements OnInit {
  characterInputForm: FormGroup;
  constructor(private newCharacterService: NewCharacterService) {}

  ngOnInit(): void {
    this.newCharacterService.selectedProficiencyIds.subscribe((proficiencies) =>
      console.log('Chosen:', proficiencies)
    );
  }

  onFormSubmit() {
    console.log(this.characterInputForm);
  }
}
