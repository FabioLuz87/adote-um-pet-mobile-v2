import { TestBed } from '@angular/core/testing';
import { EntidadeAcolhedoraService } from './entidade-acolhedora-service';

describe('EntidadeAcolhedoraService', () => {
  let service: EntidadeAcolhedoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadeAcolhedoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
