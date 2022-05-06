import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDisplayComponent } from '../character-display/character-display.component';
import { CharacterHomeComponent } from '../character-home/character-home.component';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { ProficiencySelectionComponent } from '../proficiency-selection/proficiency-selection.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharacterHomeComponent,
    children: [
      { path: 'new', component: NewCharacterComponent },
      { path: 'new/choices', component: ProficiencySelectionComponent },
      { path: ':id', component: CharacterDisplayComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
