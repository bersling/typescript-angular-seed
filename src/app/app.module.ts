import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ResourceService} from './services/resource.service';
import {HeroService} from './services/hero.service';
import {UtilsService} from './services/utils.service';
import {BroadcastService} from './services/broadcast.service';
import {UserService} from './services/user.service';
import {NotifyService} from './services/notify.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CreateHeroComponent} from './components/create-hero/create-hero.component';
import {DeleteHeroComponent} from './components/delete-hero/delete-hero.component';
import {DisplayHeroComponent} from './components/display-hero/display-hero.component';
import {DisplayHeroListComponent} from './components/display-hero-list/display-hero-list.component';
import {TopnavComponent} from './components/topnav/topnav.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {NotifyComponent} from './components/notify/notify.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LandingComponent} from './components/landing/landing.component';
import {SignupPageComponent} from './components/signup-page/signup-page.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {SpacerComponent} from './components/spacer/spacer.component';
import {LoginComponent} from './components/login/login.component';
import {HeroWrapperComponent} from './components/hero-wrapper/hero-wrapper.component';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdInputModule, MdCardModule, MdButtonModule, MdToolbarModule, MdMenuModule,
  MdIconModule
} from '@angular/material';
import 'hammerjs';
import { LernnaviComponent } from './components/lernnavi/lernnavi.component';
import { LnTopnavComponent } from './components/ln-topnav/ln-topnav.component';
import { LnPlanetComponent } from './components/ln-planet/ln-planet.component';
import { LehrpersonEinladenComponent } from './components/lehrperson-einladen/lehrperson-einladen.component';
import { AufgabenEditorComponent } from './components/aufgaben-editor/aufgaben-editor.component';
import { AufgabentypenComponent } from './components/aufgabentypen/aufgabentypen.component';
import { ForumComponent } from './components/forum/forum.component';
import { KompetenzenUebersichtComponent } from './components/kompetenzen-uebersicht/kompetenzen-uebersicht.component';
import { EinstufungstestComponent } from './components/einstufungstest/einstufungstest.component';
import { TileComponent } from './components/tile/tile.component';
import {StoreService} from './services/store.service';



@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent,
    DeleteHeroComponent,
    DisplayHeroComponent,
    DisplayHeroListComponent,
    TopnavComponent,
    SignUpComponent,
    NotifyComponent,
    PageNotFoundComponent,
    LandingComponent,
    SignupPageComponent,
    JumbotronComponent,
    SpacerComponent,
    LoginComponent,
    HeroWrapperComponent,
    LernnaviComponent,
    LnTopnavComponent,
    LnPlanetComponent,
    LehrpersonEinladenComponent,
    AufgabenEditorComponent,
    AufgabentypenComponent,
    ForumComponent,
    KompetenzenUebersichtComponent,
    EinstufungstestComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  providers: [
    ResourceService,
    HeroService,
    UtilsService,
    BroadcastService,
    UserService,
    NotifyService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
