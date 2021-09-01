import { TestBed } from '@angular/core/testing';

import { CadastroApiService } from './cadastro-api.service';

describe('CadastroApiService', () => {
  let service: CadastroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
