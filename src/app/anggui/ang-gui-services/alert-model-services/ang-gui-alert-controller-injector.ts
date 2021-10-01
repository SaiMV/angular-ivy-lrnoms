import { Injector, Type, InjectionToken, InjectFlags } from '@angular/core';

export class AngGuiAlertControllerModelInjector implements Injector {
  constructor(
    private componentInjector: Injector,
    private injectionTokens: WeakMap<any, any>
  ) {}

  get<T>(
    token: Type<T> | InjectionToken<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T;
  get(token: any, notFoundValue?: any);
  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this.injectionTokens.get(token);
    if (value) return value;
    return this.componentInjector.get<any>(token, notFoundValue);
  }
}
