export class InjectionToken {
  constructor(protected injectionIdentifier: string) {}

  toString(): string {
    return this.injectionIdentifier;
  }
}
