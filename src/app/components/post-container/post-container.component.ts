import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  posts: Post[] = [];
  
  constructor(private route:ActivatedRoute, private conServ: ConnectionService) { }

  ngOnInit(): void {
  }

  getPosts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conServ.getPosts(id).subscribe(userArray =>this.posts = userArray);
  }

}
