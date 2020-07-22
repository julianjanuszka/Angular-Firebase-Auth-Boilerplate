
import { UserDataModel } from '../models/UserData.model';

export const ADD_USER = 'ADD_USER';

export function addUserModel(state: UserDataModel = {} as UserDataModel, action) {
  switch (action.type) {
	case ADD_USER:
		return [action.payload];
	default:
		return state;
	}
}