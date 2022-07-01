import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDisplayComponent } from '../character-display/character-display.component';
import { CharacterHomeComponent } from '../character-home/character-home.component';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { ProficiencySelectionComponent } from '../new-character/proficiency-selection/proficiency-selection.component';
import { SelectClassComponent } from '../new-character/select-class/select-class.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharacterHomeComponent,
    children: [{ path: ':id', component: CharacterDisplayComponent }],
  },
  {
    path: 'create-character',
    component: NewCharacterComponent,
    children: [
      { path: '', component: SelectClassComponent },
      {
        path: 'select-proficiencies',
        component: ProficiencySelectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
