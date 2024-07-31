import { TestBed } from '@angular/core/testing';

import { GeneratorChecklistService } from './generator-checklist.service';

describe('GeneratorChecklistService', () => {
  let service: GeneratorChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorChecklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
