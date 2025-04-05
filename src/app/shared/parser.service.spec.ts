import {TestBed} from '@angular/core/testing';

import {ParserService} from './parser.service';
import {beforeEach, describe, expect, it} from 'vitest';

describe('[Parser Service]:', () => {
  let service: ParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
