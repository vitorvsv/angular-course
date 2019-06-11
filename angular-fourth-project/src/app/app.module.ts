import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { GameResultComponent } from './game-result/game-result.component';
import { GameOddComponent } from './game-result/game-odd/game-odd.component';
import { GameEvenComponent } from './game-result/game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlsComponent,
    GameResultComponent,
    GameOddComponent,
    GameEvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
