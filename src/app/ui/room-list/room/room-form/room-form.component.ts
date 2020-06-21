import { Component, OnDestroy } from '@angular/core';
import { RoomFormFacade, RoomFormStoreState } from '@store/room-form';
import { Observable, Subject } from 'rxjs';
import { filter, share, take, takeUntil } from 'rxjs/operators';
import { RoomFacade } from '@store/room';
import { Room } from '@models/room';
import { RoomListFacade } from '@store/room-list';

@Component({
	selector: 'app-room-form',
	templateUrl: './room-form.component.html',
	styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent implements OnDestroy {
	public readonly formState$: Observable<RoomFormStoreState.RoomFormState>;
	private readonly destroy$ = new Subject();
	public room$: Observable<Room>;

	constructor(
		public readonly roomFormFacade: RoomFormFacade,
		public readonly roomFacade: RoomFacade,
		public readonly roomListFacade: RoomListFacade,
	) {
		this.formState$ = this.roomFormFacade.roomFormState$;
		this.room$ = this.roomFacade.room$.pipe(share());
	}

	submitForm(): void {
		this.formState$
			.pipe(
				filter((fs) => fs.isValid && fs.isDirty),
				take(1),
				takeUntil(this.destroy$),
			)
			.subscribe(() => this.roomFormFacade.submitRoomForm());
	}

	reset(room: Room): void {
		this.roomFormFacade.loadRoomForm({ name: room.name });
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
