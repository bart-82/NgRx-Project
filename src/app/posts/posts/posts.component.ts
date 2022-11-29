import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from 'src/app/posts/models/post';
import { Comment } from '../models/comment';
import { PostHttpService } from '../services/post.http-service';
import { PostDataSharingService } from './../../Services/post-data-sharing.service';
import { PostEntityService } from './../services/post-entity.service';

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

  routeId: number = 0;

  @Output() OnPost = new EventEmitter();
  @Output() OnComments = new EventEmitter();

  constructor(
    private postEntityService: PostEntityService,
    private postDataSharing: PostDataSharingService,
    private route: ActivatedRoute,
    private postService: PostHttpService
  ) { } //usiamo entity service per prendere i posts dallo store

  ngOnInit(): void {


    this.route.paramMap.subscribe(
      params => {
        if (params.get('id') != null) {
          this.routeId = +params.get('id')!;
          this.posts$ = this.postService.getPost(this.routeId);
        } else {
          this.getAllPosts();

        }


      }
    );

  }

  getAllPosts() {
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
