import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrls: ['./character-input.component.css']
})
export class CharacterInputComponent implements OnInit {
  characterInputForm: FormGroup
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.characterInputForm)
  }
}
