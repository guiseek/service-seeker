import { Injectable, Injector } from '../src';

@Injectable()
class SomeService {
  constructor() {}
}

describe('injector', () => {
  let injector: Injector;

  beforeEach(() => {
    injector = Injector.create([
      { provide: SomeService, useClass: SomeService },
    ]);
  });

  it('should return a some service instance', () => {
    const instance = injector.get<SomeService>(SomeService);

    expect(instance).toBeInstanceOf(SomeService);
  });
});
