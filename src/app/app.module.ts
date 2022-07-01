import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './shared/app-router.module';

import { AppComponent } from './app.component';
import { CharacterHomeComponent } from './character-home/character-home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { ProficiencySelectionComponent } from './new-character/proficiency-selection/proficiency-selection.component';
import { SelectClassComponent } from './new-character/select-class/select-class.component';
import { ProficiencyTypesComponent } from './new-character/proficiency-selection/proficiency-types/proficiency-types.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterHomeComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterDisplayComponent,
    NewCharacterComponent,
    ProficiencySelectionComponent,
    SelectClassComponent,
    ProficiencyTypesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
