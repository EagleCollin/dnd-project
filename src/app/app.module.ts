import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterHomeComponent } from './character-home/character-home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCharacterComponent } from './new-character/new-character.component';
import { AppRoutingModule } from './shared/app-router.module';
import { ProficiencySelectionComponent } from './proficiency-selection/proficiency-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterHomeComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterDisplayComponent,
    NewCharacterComponent,
    ProficiencySelectionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
