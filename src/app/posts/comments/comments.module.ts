import { PostsModule } from './../posts.module';

import { AppModule } from './../../app.module';
import { CommentsDataService } from './../services/comments/comments-data.service';
import { EffectsModule } from '@ngrx/effects';

import {
  EntityMetadataMap,
  EntityDefinitionService,
  EntityDataService,
} from '@ngrx/data';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { CommentsComponent } from './comments.component';
import { CommentEntityService } from '../services/comments/comment-entity.service';
import { CommentsResolver } from '../services/comments/comments.resolver';

export const commentsRoutes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {
      posts: CommentsResolver,
    },
  },
  {
    path: ':commentUrl',
    component: CommentsComponent,
    resolve: {
      posts: CommentsResolver,
    },
  },
];

const entityMetadata: EntityMetadataMap = {
  //all'inizio lasciamo la configurazione della entity post vuota

  Comment: {},
};

@NgModule({
  declarations: [CommentsComponent],
  providers: [CommentsResolver, CommentEntityService, CommentsDataService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(commentsRoutes),
    EffectsModule.forFeature([]),
    StoreModule,
  ],
})
export class CommentsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private commentsDataService: CommentsDataService
  ) {
    this.eds.registerMetadataMap(entityMetadata);
    this.entityDataService.registerService('Comment', this.commentsDataService);
  }
}
