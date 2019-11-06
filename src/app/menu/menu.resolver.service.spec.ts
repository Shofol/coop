import { TestBed } from '@angular/core/testing';

import { MenuResolverService } from './menu.resolver.service';

describe('Menu.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuResolverService = TestBed.get(MenuResolverService);
    expect(service).toBeTruthy();
  });
});
