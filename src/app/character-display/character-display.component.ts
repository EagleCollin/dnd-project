import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {
   constructor(private characterService: CharacterService,) { }

  ngOnInit(): void {
  }

}
