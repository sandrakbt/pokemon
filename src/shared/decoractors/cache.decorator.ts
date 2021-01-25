import { Observable } from 'rxjs';

const cache = new Map<string, Observable<any>>();

export function Cache(): MethodDecorator {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]): any {
      const key = `${target.constructor.name}|${propertyKey.toString()}|${args.join(',')}`;
      console.log(key, cache.has(key));
      if (cache.has(key)) {
        return cache.get(key);
      }
      const val = originalMethod.apply(this, args);
      save(key, val);
      return val;
    };
  };
}

function save(key: string, val: Observable<any>): void {
  cache.set(key, val);
}
