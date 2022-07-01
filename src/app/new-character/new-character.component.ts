import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../shared/character-model';
import { NewCharacterService } from './new-character.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent implements OnInit {
  newCharacter: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newCharacterService: NewCharacterService
  ) {}

  ngOnInit(): void {
    (this.newCharacter = this.newCharacterService), this.newCharacter;
    this.newCharacterService.characterSubject.subscribe((updatedCharacter) => {
      this.newCharacter = updatedCharacter;
    });
  }
}
