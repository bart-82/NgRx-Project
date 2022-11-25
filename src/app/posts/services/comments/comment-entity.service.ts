import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Comment } from '../../models/comment';

@Injectable()
export class CommentEntityService extends EntityCollectionServiceBase<Comment> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Comment', serviceElementsFactory);
  }
}
