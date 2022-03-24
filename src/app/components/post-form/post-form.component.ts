import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

    @Output() submitted = new EventEmitter<Post>();

    newTitle: string = "";
    newThought: string = "";

    submitPost(): void {
        this.submitted.emit({ title: this.newTitle, thought: this.newThought });
        this.newTitle = "";
        this.newThought = "";
    }

    constructor() { }

    ngOnInit(): void {
    }

}
