import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pluto?:User;


  constructor() { }

  ngOnInit(): void {
  }

  
}
