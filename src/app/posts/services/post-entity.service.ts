import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase,
} from '@ngrx/data';
import { Post } from 'src/app/posts/models/post';

@Injectable()
export class PostEntityService extends EntityCollectionServiceBase<Post> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Post', serviceElementsFactory);
  }
}
