import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pluto?:User;

  constructor(private route:ActivatedRoute, private conServ: ConnectionService) { }

  ngOnInit(): void {
  }

  getPosts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conServ.getPosts(id).subscribe(userArray =>);
  }
}
