import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import Swiper from "swiper";
import {SwiperOptions} from "swiper/types";
import {ProjectsInterface} from "../../interfaces/projects.interface";
import {ProjectsService} from "../../services/projects.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  swiper?: Swiper
  projects!: Observable<ProjectsInterface[]>;

  @ViewChild('swiperRef', {static: true})
  protected _swiperRef: ElementRef | undefined;


  constructor(private projectsService: ProjectsService) {
  }

  ngAfterViewInit() {
    this.getProjects();
    this._initSwiper()
  }

  getProjects() {
    this.projects = this.projectsService.getProjects()
  }

  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: {clickable: true},
      navigation: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    }

    const swiperEl = this._swiperRef?.nativeElement
    Object.assign(swiperEl, options)

    swiperEl.initialize()

    if (this.swiper) this.swiper.currentBreakpoint = false
    this.swiper = this._swiperRef?.nativeElement.swiper

    this.swiper?.off('slideChange')
  }
}
