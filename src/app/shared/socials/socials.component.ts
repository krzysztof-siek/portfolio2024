import {Component} from '@angular/core';
import {SocialsInterface} from "../../interfaces/socials.interface";
import {SocialsEnum} from "../../enums/socials.enum";

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  activeTab: string = SocialsEnum.LINKEDIN;
  socialList: SocialsInterface[] = [
    {
      id: 0,
      name: SocialsEnum.LINKEDIN as string,
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/in/krzysztof-siek01/"
    },
    {
      id: 1,
      name: SocialsEnum.GITHUB as string,
      icon: "fa-github",
      link: "https://github.com/krzysztof-siek"
    },
    {
      id: 2,
      name: SocialsEnum.FACEBOOK as string,
      icon: "fa-facebook-f",
      link: "https://www.facebook.com/krzysiek.krzysiek01"
    },
  ]

}
