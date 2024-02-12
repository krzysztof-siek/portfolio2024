import {Component} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {TranslateService} from "@ngx-translate/core";
import {finalize, Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  buttonText = 'buttons.hireMe';
  private originalText = 'buttons.hireMe';
  private destroy$ = new Subject<void>();

  constructor(public scrollService: ScrollService,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.buttonText = this.originalText;
  }

  animateText(): void {
    this.destroy$.next();

    timer(0, 50).pipe(
      takeUntil(this.destroy$),
      finalize(() => this.buttonText = this.originalText)
    ).subscribe(() => {
      this.buttonText = this.generateRandomString(this.translate.instant(this.originalText).length);
    });

    setTimeout(() => {
      this.destroy$.next();
    }, 500);
  }

  onMouseLeave(): void {
    this.buttonText = this.originalText;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private generateRandomString(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({length}).map(() => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }
}
