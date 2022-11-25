import { CommentEntityService } from './services/comments/comment-entity.service';
import { PostEntityService } from './services/post-entity.service';
import { map, Observable, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from '../reducers';
import { AuthState } from '../auth/reducers';
import { logout } from '../auth/auth.actions';
import { ActivatedRoute } from '@angular/router';
import { Post } from './models/post';
import { Comment } from './models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  UserName!: string;

  isPosts!: boolean;
  isComments!: boolean;

  post$!: Observable<Post | undefined>;
  comments$!: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostEntityService,
    private commentService: CommentEntityService
  ) {}

  ngOnInit(): void {
    const postUrl = this.route.snapshot.paramMap.get('postUrl');

    if (postUrl) {
      this.isComments = true;
      this.isPosts = false;
    } else {
      this.isComments = false;
      this.isPosts = true;
    }

    this.post$ = this.postService.entities$.pipe(
      map((posts) => posts.find((post) => post.id == postUrl))
    );

    this.comments$ = this.commentService.entities$;
    // .pipe(
    //   withLatestFrom(this.post$),
    //   map(([post,comments])=>
    //   comments.filter(comment=>comment.postId==post.id))
    // )
  }

  updateIsPosts(x: boolean) {
    this.isPosts = x;
  }

  updateIsComments(y: boolean) {
    this.isComments = y;
  }
}
