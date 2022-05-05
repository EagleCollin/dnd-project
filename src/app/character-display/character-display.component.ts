import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '../shared/character-model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css'],
})
export class CharacterDisplayComponent implements OnInit {
  character: Character;
  idx: number;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.character = this.characterService.displayCharacter(this.idx);
    });
  }

  genScores(att) {
    let modifier = Math.floor((att - 10) / 2);
    return modifier;
  }
}
