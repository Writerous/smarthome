import { RoomActions, RoomActionTypes } from './actions';
import { RoomListActionsTypes } from '../room-list-store/actions';
import { CallState, LoadingState } from '@models/error-loading';
import { BaseRoom, Room } from '@models/room';
import { HardwareStoreActions } from '@store/hardware';
import { RoomListStoreActions } from '@store/room-list';
import { HardwareActionTypes } from '../hardware-store/actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hardware } from '@models/hardware';

export const ROOM_FEATURE_KEY = 'room';

export interface RoomState extends EntityState<Hardware> {
	baseRoom: BaseRoom;
	callState: CallState;
	activeHardware: Hardware;
}

export const roomAdapter: EntityAdapter<Hardware> = createEntityAdapter<Hardware>({
	selectId: (hardware: Hardware) => hardware.id,
	sortComparer: false,
});
export const initialState: RoomState = roomAdapter.getInitialState({
	baseRoom: BaseRoom.initial,
	callState: LoadingState.INIT,
	activeHardware: Hardware.initial,
});

export function roomReducer(
	state = initialState,
	action:
		| RoomActions
		| RoomListStoreActions.RoomListActions
		| HardwareStoreActions.HardwareActions,
): RoomState {
	switch (action.type) {
		case RoomActionTypes.getRoom:
		case RoomListActionsTypes.moveHardware: {
			return { ...state, callState: LoadingState.LOADING };
		}
		case RoomActionTypes.getRoomSuccess: {
			const { hardwares, activeHardware } = action.payload.room;
			return roomAdapter.addAll(hardwares, {
				...state,
				baseRoom: Room.getBase(action.payload.room),
				activeHardware,
				callState: LoadingState.LOADED,
			});
		}
		case RoomActionTypes.getRoomError: {
			return { ...state, callState: action.payload };
		}
		case RoomListActionsTypes.moveHardwareSuccess: {
			const room = action.payload.roomList.rooms.find(
				(room) => state.baseRoom.id === room.id,
			);
			return roomAdapter.addAll(room.hardwares, {
				...state,
				activeHardware: room.activeHardware,
				baseRoom: Room.getBase(room),
				callState: LoadingState.LOADED,
			});
		}
		case RoomListActionsTypes.upsertRoomListWhenLeft: {
			return initialState;
		}

		case RoomActionTypes.updateOneHardwareSuccess:
		case HardwareActionTypes.UpdateOneEquipmentSuccess: {
			return roomAdapter.upsertOne(action.payload.hardware, state);
		}
		default:
			return state;
	}
}
