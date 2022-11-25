import { PostDataSharingService } from './../../Services/post-data-sharing.service';
import { CommentEntityService } from './../services/comments/comment-entity.service';
import { PostEntityService } from './../services/post-entity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostHttpService } from './../services/post.http-service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/posts/models/post';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  comments$!: Observable<Comment[]>;

  postId!: string;

  isPosts!: boolean;

  isComments!: boolean;

  newTitle: string = '';

  selectedPost!: Post[];

  @Output() OnPost = new EventEmitter();
  @Output() OnComments = new EventEmitter();

  constructor(
    private postEntityService: PostEntityService,
    private postDataSharing: PostDataSharingService
  ) {} //usiamo entity service per prendere i posts dallo store

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.posts$ = this.postEntityService.entities$;
  }

  takeId(id: string) {
    this.postId = id;
    console.log(this.postId);
    this.postDataSharing.passData(id);
  }

  updateTitle() {
    this.postEntityService.updateOneInCache({
      id: this.postId,
      title: this.newTitle,
    });
  }

  delete(post: Post) {
    this.postEntityService.delete(post);
  }

  // changeIsPosts(id: any) {
  //   this.isPosts = false;
  //   this.OnPost.emit(this.isPosts);
  // }

  // changeIsComments() {
  //   this.isComments = true;
  //   this.OnComments.emit(this.isComments);
  // }
}
