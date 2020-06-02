import {
	Actions,
	addGroupControl,
	formGroupReducer,
	removeGroupControl,
	reset,
	setValue,
} from 'ngrx-forms';
import { EquipmentFormState, EquipmentFormValue, initialEquipmentFormState } from './state';
import { EquipmentFormActions, EquipmentFormUnion } from './actions';
import { EquipmentGroup } from '@models/equipment';

export const equipmentFormReducer = function (
	state: EquipmentFormState = initialEquipmentFormState,
	action: EquipmentFormUnion | Actions<EquipmentFormValue>,
): EquipmentFormState {
	state = formGroupReducer(state, action);

	switch (action.type) {
		case EquipmentFormActions.loadEquipmentFormSuccess: {
			const { group, name, value } = action.payload.equipment;

			if (!state.controls.value) {
				state = addGroupControl(state, 'value', '');
			}

			if (group === EquipmentGroup.DEVICE) {
				return setValue(state, { name, value });
			}
			state = removeGroupControl(state, 'value');

			return setValue(state, { name });
		}
		case EquipmentFormActions.loadEquipmentFormError: {
			return state;
		}

		case EquipmentFormActions.submitEquipmentForm: {
			//disable to check state in effects
			return reset(state);
		}
		case EquipmentFormActions.submitEquipmentFormSuccess: {
			return reset(state);
		}
		default:
			return state;
	}
};
