import { UserActionTypes } from "./user.types";

export const googleSigninStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signinSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSigninStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
