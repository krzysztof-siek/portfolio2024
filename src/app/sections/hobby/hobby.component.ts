import {Component} from '@angular/core';
import {HobbyInterface} from "../../interfaces/hobby.interface";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent {
  hobbyList: HobbyInterface[] = [
    {id: 0, name: 'travel', img: "travel"},
    {id: 1, name: 'bike', img: "bike"},
    {id: 2, name: 'gym', img: "gym"},
    {id: 3, name: 'music', img: "music"},
  ]

}
