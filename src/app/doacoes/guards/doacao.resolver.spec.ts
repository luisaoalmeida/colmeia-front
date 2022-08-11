import { TestBed } from '@angular/core/testing';

import { DoacaoResolver } from './doacao.resolver';

describe('DoacaoResolver', () => {
  let resolver: DoacaoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DoacaoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
