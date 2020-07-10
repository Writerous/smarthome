import { Injectable } from '@angular/core';
import { LoadableFacade } from '@models/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Equipment } from '@models/equipment';
import { Hardware } from '@models/hardware';
import { selectById, selectCallState, selectHardware } from './selectors';
import { HardwareState } from './reducer';
import { LoadHardware } from './actions';

@Injectable()
export class HardwareFacade extends LoadableFacade<HardwareState> {
	public readonly hardware$: Observable<Hardware>;

	constructor(store: Store<HardwareState>) {
		super(store, selectCallState);
		this.hardware$ = this.store.pipe(select(selectHardware));
	}

	public equipmentById(id: Equipment['id']): Observable<Equipment> {
		return this.store.pipe(select(selectById, id));
	}

	public loadHardware(id: Hardware['id']): void {
		this.store.dispatch(new LoadHardware({ id }));
	}
}
