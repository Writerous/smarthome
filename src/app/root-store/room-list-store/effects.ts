import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadRooms, LoadRoomsSucces, roomsActions} from './actions';
import {switchMap} from 'rxjs/operators';

import {of} from 'rxjs';
import {LoadRoomService} from '../../sevices/load-room.service';
import {Room} from '../../../models/room';

@Injectable()
export class RoomsEffects {
    @Effect()
    loadRooms$ = this.actions$.pipe(
        ofType<LoadRooms>(roomsActions.loadRooms),

        switchMap(() => this.loadRoomService.loadRoom()),
        switchMap((rooms: Room[]) => of(new LoadRoomsSucces({rooms}))),
    );

    constructor(
        private readonly actions$: Actions,
        private readonly loadRoomService: LoadRoomService,
    ) {}
}
