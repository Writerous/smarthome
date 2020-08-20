import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadableFacade } from '@models/common';
import { RoomList } from '@models/room-list';
import { Room } from '@models/room';
import { Dictionary } from '@ngrx/entity';
import { Hardware } from '@models/hardware';
import { Equipment } from '@models/equipment';
import { RoomListState } from './reducer';
import {
	AddRoom,
	DeleteRoom,
	LoadRoomList,
	UpdateRoom,
	UpsertRoomListWhenLeft,
	UpsertRoomWhenLeft,
} from './actions';
import {
	selectCallState,
	selectEquipmentById,
	selectHardware,
	selectHardwareById,
	selectRoom,
	selectRoomById,
	selectRoomList,
	selectRoomListEntities,
	selectRooms,
} from './selectors';

@Injectable()
export class RoomListFacade extends LoadableFacade<RoomListState> {
	public readonly rooms$: Observable<Room[]>;

	public readonly roomListEntities$: Observable<Dictionary<Room>>;

	public readonly roomList$: Observable<RoomList>;

	public readonly room$: Observable<Room | undefined>;

	public readonly hardware$: Observable<Hardware | undefined>;

	constructor(store: Store<RoomListState>) {
		super(store, selectCallState);

		this.rooms$ = this.store.pipe(select(selectRooms));
		this.roomList$ = this.store.pipe(select(selectRoomList));
		this.roomListEntities$ = this.store.pipe(select(selectRoomListEntities));
		this.room$ = this.store.pipe(select(selectRoom));
		this.hardware$ = this.store.pipe(select(selectHardware));
	}

	public roomById$(id: Room['id']): Observable<Room> {
		return this.store.pipe(select(selectRoomById, id));
	}

	public hardwareById$(roomId: Room['id'], hardwareId: Hardware['id']): Observable<Hardware> {
		return this.store.pipe(select(selectHardwareById, { roomId, hardwareId }));
	}

	public equipmentById$(
		roomId: Room['id'],
		hardwareId: Hardware['id'],
		equipmentId: Equipment['id'],
	): Observable<Equipment> {
		return this.store.pipe(select(selectEquipmentById, { roomId, hardwareId, equipmentId }));
	}

	public updateRoom(room: Room): void {
		this.store.dispatch(new UpdateRoom({ room }));
	}

	public addRoom(room: Room): void {
		this.store.dispatch(new AddRoom({ room }));
	}

	public deleteRoom(room: Room): void {
		this.store.dispatch(new DeleteRoom({ room }));
	}

	public upsertRoomWhenLeft(room: Room): void {
		this.store.dispatch(new UpsertRoomWhenLeft({ room }));
	}

	public upsertRoomListWhenLeft(roomList: RoomList): void {
		this.store.dispatch(new UpsertRoomListWhenLeft({ roomList }));
	}

	public loadRooms(): void {
		this.store.dispatch(new LoadRoomList());
	}
}