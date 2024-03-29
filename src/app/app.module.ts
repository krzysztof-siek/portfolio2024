import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {AboutComponent} from "./sections/about/about.component";
import {SkillsComponent} from "./sections/skills/skills.component";
import {ProjectsComponent} from "./sections/projects/projects.component";
import {ContactComponent} from "./sections/contact/contact.component";
import {HomeComponent} from "./sections/home/home.component";
import {SocialsComponent} from "./shared/socials/socials.component";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";
import {HobbyComponent} from "./sections/hobby/hobby.component";
import {MatDialogModule} from "@angular/material/dialog";
import {LanguageSelectComponent} from "./navbar/language-select/language-select.component";
import {LoaderComponent} from "./shared/loader/loader.component";
import {LogoComponent} from "./navbar/logo/logo.component";
import {SectionTitleComponent} from "./shared/section-title/section-title.component";
import {ContactListComponent} from "./sections/contact/contact-list/contact-list.component";
import {MapComponent} from "./sections/contact/map/map.component";
import {ContactFormComponent} from "./sections/contact/contact-form/contact-form.component";
import {BubblesAnimationComponent} from "./shared/bubbles-animation/bubbles-animation.component";

export function HttpLoaderFactory(http: HttpClient) {
  const path = window.location.hostname.includes('github.io')
    ? '/portfolio2024/assets/i18n/'
    : './assets/i18n/'
  return new TranslateHttpLoader(http, path, '.json');
}

const MATERIALS_COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBar,
  MatIcon,
  MatDialogModule
]

const COMPONENTS = [
  AppComponent,
  NavbarComponent,
  LanguageSelectComponent,
  HomeComponent,
  AboutComponent,
  SkillsComponent,
  ProjectsComponent,
  ContactComponent,
  SocialsComponent,
  HobbyComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MATERIALS_COMPONENTS,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgOptimizedImage,
    LoaderComponent,
    LogoComponent,
    SectionTitleComponent,
    ContactListComponent,
    MapComponent,
    ContactFormComponent,
    BubblesAnimationComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
