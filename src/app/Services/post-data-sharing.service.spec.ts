import { TestBed } from '@angular/core/testing';

import { PostDataSharingService } from './post-data-sharing.service';

describe('PostDataSharingService', () => {
  let service: PostDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
