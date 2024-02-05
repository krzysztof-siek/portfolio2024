import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./sections/about/about.component";
import {SkillsComponent} from "./sections/skills/skills.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {ContactComponent} from "./sections/contact/contact.component";
import {HomeComponent} from "./sections/home/home.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const MATERIALS_COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ...MATERIALS_COMPONENTS,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
