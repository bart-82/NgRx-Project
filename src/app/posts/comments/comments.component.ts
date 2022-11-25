import { PostDataSharingService } from './../../Services/post-data-sharing.service';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentEntityService } from '../services/comments/comment-entity.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<Comment[]>;
  postId: string = '';

  constructor(
    private commentEntity: CommentEntityService,
    private postDataSharing: PostDataSharingService
  ) {}

  ngOnInit(): void {
    this.postDataSharing.cast.subscribe((id) => {
      this.postId = id;
    });

    this.comments$ = this.commentEntity.entities$.pipe(
      map((comments) =>
        comments.filter((comment) => comment.postId == this.postId)
      )
    );
  }
}
