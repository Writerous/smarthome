import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHardware from './reducer';
import { hardwareAdapter } from './reducer';
import { Dictionary } from '@ngrx/entity';
import { Equipment } from '@models/equipment';
import { AppState } from '../state';

export const selectHardwareState = createFeatureSelector<AppState, fromHardware.HardwareState>(
	fromHardware.hardwareFeatureKey,
);

export const { selectIds, selectEntities, selectAll, selectTotal } = hardwareAdapter.getSelectors(
	selectHardwareState,
);

export const selectById = createSelector(
	selectEntities,
	(equipmentCollection: Dictionary<Equipment>, id: Equipment['id']) => equipmentCollection[id],
);

export const selectCallState = createSelector(selectHardwareState, (state) => state.callState);