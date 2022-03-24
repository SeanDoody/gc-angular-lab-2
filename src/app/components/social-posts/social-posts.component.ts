import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-social-posts',
    templateUrl: './social-posts.component.html',
    styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

    showPostForm: boolean = false;

    posts: Post[] = [
        { title: "Fall", thought: "Fall is the best season of the year! The cooler weather is great and the colors are beautiful." },
        { title: "Grand Circus", thought: "Grand Circus did a great job teaching me the fundamentals of Angular!" },
        { title: "Job Search", thought: "I can't wait to find a new job as an Angular developer!" }
    ];

    newThought(): void {
        if (!this.showPostForm) {
            this.showPostForm = true;
        }
    }

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(newPost: Post): void {
        this.posts.push(newPost);
        this.showPostForm = false;
    }

    onDelete(deletedPost: Post): void {
        const index = this.posts.findIndex(post => post === deletedPost);
        this.posts.splice(index, 1);
    }

}