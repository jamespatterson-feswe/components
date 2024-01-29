import { Injectable } from '@angular/core';
import { ENVIRONMENTS, ENV_CONFIGS } from '../../configurations/config';
import { Observable, Subject } from 'rxjs';
import { ENV_CONFIG } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private environment: Subject<ENV_CONFIG> = new Subject();

  public environment$: Observable<ENV_CONFIG> = this.environment.asObservable();

  constructor() {
    this.setEnvironmentConfiguration(ENVIRONMENTS.PROD);
  }

  public setEnvironmentConfiguration(environment: string): void {
    this.environment.next(ENV_CONFIGS[environment ?? ENVIRONMENTS.PROD]);
  }
}
