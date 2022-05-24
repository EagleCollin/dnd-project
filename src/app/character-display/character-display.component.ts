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
  profBonus;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.character = this.characterService.displayCharacter(this.idx);
      console.log(this.character);
    });
    this.profBonus = 1 + Math.floor(this.character.level / 4);
  }

  genMod(att) {
    let modifier = Math.floor((att - 10) / 2);
    let sign = modifier >= 0 ? '+' : '';
    return sign + modifier;
  }

  genScores(att, isChecked, ref) {
    let modifier = Math.floor((att - 10) / 2);
    let sign = modifier >= 0 ? '+' : '';

    this.addProfBonus(sign + modifier, ref, isChecked);

    return sign + modifier;
  }

  addProfBonus(score, ref, isChecked) {
    if (isChecked) {
      let modifier = Number(score) + this.profBonus;
      let sign = modifier >= 0 ? '+' : '';
      ref.innerText = sign + modifier;
    } else {
      let modifier = Number(score);
      let sign = modifier >= 0 ? '+' : '';
      ref.innerText = sign + modifier;
    }
  }
}
