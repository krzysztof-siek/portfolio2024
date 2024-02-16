import {Component} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {TranslateService} from "@ngx-translate/core";
import {finalize, Subject, takeUntil, timer} from "rxjs";
import {LoadService} from "../../services/load.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  buttonText = 'buttons.hireMe';
  proffesionText: string[] = "Frontend developer".split('');
  private originalText = 'buttons.hireMe';
  private destroy$: Subject<void> = new Subject<void>();

  constructor(public scrollService: ScrollService,
              private translate: TranslateService,
              private loadService: LoadService) {
  }

  onLoadImage(): void {
    setTimeout(() => {
      this.loadService.isLoading.next(false);
    }, 500)
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
    const characters: string = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({length}).map(() => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }
}
