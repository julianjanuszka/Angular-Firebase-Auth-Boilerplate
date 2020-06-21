
import { UserDataModel } from './models/UserData.model';

export interface AppState {
  readonly loggedInUser: UserDataModel;
}