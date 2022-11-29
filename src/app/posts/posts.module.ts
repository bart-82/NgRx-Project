import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  EntityDataService, EntityDefinitionService, EntityMetadataMap
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostEditComponent } from './post-edit/post-edit.component';
import { PostsComponent } from './posts/posts.component';
import { PostEntityService } from './services/post-entity.service';
import { PostHttpService } from './services/post.http-service';
import { PostsDataService } from './services/posts-data.service';
import { PostsResolver } from './services/posts.resolver';

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
  // {
  //   path: ':postUrl',
  //   component: PostsComponent,
  //   resolve: {
  //     posts: PostsResolver,
  //   },
  // },
];

const entityMetadata: EntityMetadataMap = {
  //all'inizio lasciamo la configurazione della entity post vuota
  Post: {},
};

@NgModule({
  declarations: [

    PostsComponent,
    PostEditComponent,

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
  exports: [PostsComponent, PostEditComponent],
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
