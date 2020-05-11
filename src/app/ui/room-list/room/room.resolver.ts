import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomStoreSelectors, RoomStoreState } from '@store';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Injectable()
export class RoomResolver implements Resolve<any> {
	constructor(private readonly store: Store<RoomStoreState.RoomState>) {}

	resolve(
		_route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<any> | Promise<any> | any {
		return this.store.pipe(select(RoomStoreSelectors.selectLoaded), take(1));
	}
}
