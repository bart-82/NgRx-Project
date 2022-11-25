import { AppModule } from './../app.module';
import { CommentEntityService } from './services/comments/comment-entity.service';
import { EffectsModule } from '@ngrx/effects';
import { PostEntityService } from './services/post-entity.service';
import {
  EntityMetadataMap,
  EntityDefinitionService,
  EntityDataService,
} from '@ngrx/data';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './../posts/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsResolver } from './services/posts.resolver';
import { PostHttpService } from './services/post.http-service';
import { PostsDataService } from './services/posts-data.service';
import { StoreModule } from '@ngrx/store';
import { CommentsModule } from './comments/comments.module';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
  {
    path: ':postUrl',
    component: HomeComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
];

const entityMetadata: EntityMetadataMap = {
  //all'inizio lasciamo la configurazione della entity post vuota
  Post: {},
};

@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    PostEditComponent,
    HeaderComponent,
  ],
  providers: [
    PostEntityService,
    PostsResolver,
    PostHttpService,
    PostsDataService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(postsRoutes),
    EffectsModule.forFeature([]),
    StoreModule,
  ],
  exports: [HeaderComponent, HomeComponent, PostsComponent, PostEditComponent],
})
export class PostsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private postsDataService: PostsDataService
  ) {
    this.eds.registerMetadataMap(entityMetadata);
    this.entityDataService.registerService('Post', this.postsDataService);
  }
}
