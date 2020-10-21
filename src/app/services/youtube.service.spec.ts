import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  let service: YoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(YoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
