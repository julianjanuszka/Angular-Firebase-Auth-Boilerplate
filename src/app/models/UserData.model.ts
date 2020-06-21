
export interface IUserDataModel {
    userEmail: string;
    userPassword: string;
}

export class UserDataModel {
    readonly userEmail: string = '';
    readonly userPassword: string = '';

    constructor(args: any = {}) {
        if (args) {
            Object.keys(args).forEach((key) => {
                if (Object.prototype.hasOwnProperty.call(this, key)) {
                    this[key] = args[key];
                }
            });
        }
    }
}
