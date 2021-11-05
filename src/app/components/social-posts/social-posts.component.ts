import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    { title: "Event Binding", thought: "This shit is hard, but I'm slowly gettting it!" },
    { title: "Foot Pain", thought: "I'm so sick of my goddamn foot" },
    { title: "Addiction Issues", thought: "I can't wait to get drunk on fireball and apple cider and play some Minecraft!" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(newPost: Post): void {
    this.posts.push(newPost);
  }

  onDelete(deletedPost: Post): void {
    const index = this.posts.findIndex(post => post === deletedPost);
    this.posts.splice(index, 1);
  }

}