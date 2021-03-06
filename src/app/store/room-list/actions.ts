import { Action } from '@ngrx/store';
import { Room } from '@models/room/room';
import { RoomList } from '@models/room-list';
import { Hardware } from '@models/hardware';
import { Equipment } from '@models/equipment';

export enum RoomListActionsTypes {
	loadRoomList = '[Room list] Load Room List',
	loadRoomListSuccess = '[Room list] Load Room List Success',
	loadRoomListError = '[Room list] Load Room List Error',
	moveHardware = '[Room list] Move Hardware',
	moveHardwareSuccess = '[Room list] Move Hardware Success',
	moveHardwareError = '[Room list] Move Hardware Error',
	updateRoom = '[Room list] Update Room',
	updateRoomSuccess = '[Room list] Update Room Success',
	updateRoomFailure = '[Room list] Update Room Failure',
	addRoom = '[Room list] Add Room',
	addRoomSuccess = '[Room list] Add Room Success',
	addRoomFailure = '[Room list] Add Room Failure',
	DeleteRoom = '[Room list] Delete Room',
	DeleteRoomSuccess = '[Room list] Delete Room Success',
	DeleteRoomFailure = '[Room list] Delete Room Failure',
	upsertRoomWhenLeft = '[Room list] Upsert Room When Left',
	upsertRoomListWhenLeft = '[Room list] Upsert RoomList When Left',
	UpsertRoomListCanceled = '[Room List] Upsert Room List Canceled',
	updateOneHardware = '[Room list] Update One Hardware',
	updateOneHardwareSuccess = '[Room list] Update One Hardware Success',
	updateOneHardwareFailure = '[Room list] Update One Hardware Failure',
	UpdateOneEquipment = '[Room list] Update One Equipment',
	UpdateOneEquipmentSuccess = '[Room list] Update One Equipment Success',
	UpdateOneEquipmentFailure = '[Room list] Update One Equipment Failure',
}

export class LoadRoomList implements Action {
	readonly type = RoomListActionsTypes.loadRoomList;
}

export class LoadRoomListSuccess implements Action {
	readonly type = RoomListActionsTypes.loadRoomListSuccess;

	constructor(public payload: { roomList: RoomList }) {}
}

export class LoadRoomListError implements Action {
	readonly type = RoomListActionsTypes.loadRoomListError;

	constructor(public payload: { errorMsg: string }) {}
}

export class MoveHardware implements Action {
	readonly type = RoomListActionsTypes.moveHardware;

	constructor(public payload: { roomList: RoomList }) {}
}

export class MoveHardwareSuccess implements Action {
	readonly type = RoomListActionsTypes.moveHardwareSuccess;

	constructor(public payload: { roomList: RoomList }) {}
}

export class MoveHardwareError implements Action {
	readonly type = RoomListActionsTypes.moveHardwareError;

	constructor(public payload: { errorMsg: string }) {}
}

export class UpdateRoom implements Action {
	readonly type = RoomListActionsTypes.updateRoom;

	constructor(public payload: { room: Room }) {}
}

export class UpdateRoomSuccess implements Action {
	readonly type = RoomListActionsTypes.updateRoomSuccess;

	constructor(public payload: { room: Room }) {}
}

export class UpdateRoomFailure implements Action {
	readonly type = RoomListActionsTypes.updateRoomFailure;

	constructor(public payload: { errorMsg: string }) {}
}

export class UpsertRoomWhenLeft implements Action {
	readonly type = RoomListActionsTypes.upsertRoomWhenLeft;

	constructor(public payload: { room: Room }) {}
}

export class UpsertRoomListWhenLeft implements Action {
	readonly type = RoomListActionsTypes.upsertRoomListWhenLeft;

	constructor(public payload: { roomList: RoomList }) {}
}

export class UpsertRoomListCanceled implements Action {
	readonly type = RoomListActionsTypes.UpsertRoomListCanceled;
}

export class AddRoom implements Action {
	readonly type = RoomListActionsTypes.addRoom;

	constructor(public payload: { room: Room }) {}
}

export class AddRoomSuccess implements Action {
	readonly type = RoomListActionsTypes.addRoomSuccess;

	constructor(public payload: { room: Room }) {}
}

export class AddRoomFailure implements Action {
	readonly type = RoomListActionsTypes.addRoomFailure;

	constructor(public payload: { errorMsg: string }) {}
}

export class DeleteRoom implements Action {
	readonly type = RoomListActionsTypes.DeleteRoom;

	constructor(public payload: { room: Room }) {}
}

export class DeleteRoomSuccess implements Action {
	readonly type = RoomListActionsTypes.DeleteRoomSuccess;

	constructor(public payload: { room: Room }) {}
}

export class DeleteRoomFailure implements Action {
	readonly type = RoomListActionsTypes.DeleteRoomFailure;

	constructor(public payload: { errorMsg: string }) {}
}

export class UpdateOneHardware implements Action {
	readonly type = RoomListActionsTypes.updateOneHardware;

	constructor(public payload: { hardware: Hardware; room: Room }) {}
}

export class UpdateOneHardwareSuccess implements Action {
	readonly type = RoomListActionsTypes.updateOneHardwareSuccess;

	constructor(public payload: { hardware: Hardware; room: Room }) {}
}

export class UpdateOneHardwareFailure implements Action {
	readonly type = RoomListActionsTypes.updateOneHardwareFailure;

	constructor(public payload: { errorMsg: string }) {}
}

export class UpdateOneEquipment implements Action {
	readonly type = RoomListActionsTypes.UpdateOneEquipment;

	constructor(public payload: { equipment: Equipment; room: Room; hardware: Hardware }) {}
}

export class UpdateOneEquipmentSuccess implements Action {
	readonly type = RoomListActionsTypes.UpdateOneEquipmentSuccess;

	constructor(public payload: { equipment: Equipment; room: Room; hardware: Hardware }) {}
}

export class UpdateOneEquipmentFailure implements Action {
	readonly type = RoomListActionsTypes.UpdateOneEquipmentFailure;

	constructor(public payload: { errorMsg: string }) {}
}

export type RoomListActions =
	| LoadRoomList
	| LoadRoomListSuccess
	| LoadRoomListError
	| MoveHardware
	| MoveHardwareError
	| MoveHardwareSuccess
	| UpdateRoom
	| UpdateRoomSuccess
	| UpdateRoomFailure
	| UpsertRoomWhenLeft
	| UpsertRoomListWhenLeft
	| UpsertRoomListCanceled
	| AddRoom
	| AddRoomSuccess
	| AddRoomFailure
	| DeleteRoom
	| DeleteRoomSuccess
	| DeleteRoomFailure
	| UpdateOneHardware
	| UpdateOneHardwareSuccess
	| UpdateOneHardwareFailure
	| UpdateOneEquipment
	| UpdateOneEquipmentSuccess
	| UpdateOneEquipmentFailure;
