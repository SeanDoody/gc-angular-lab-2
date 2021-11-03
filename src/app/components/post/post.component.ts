import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @Output() deleted = new EventEmitter<Post>();

  deletePost(): void {
    this.deleted.emit(this.post);
  }

  constructor() { }

  ngOnInit(): void {
  }

}