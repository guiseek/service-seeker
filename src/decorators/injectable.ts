import { INJECTABLE_METADATA_KEY } from '../utilities/injectable';

export function Injectable() {
  return function (target: any) {
    // o target, neste caso, é a classe que está sendo decorada.
    Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    return target;
  };
}
