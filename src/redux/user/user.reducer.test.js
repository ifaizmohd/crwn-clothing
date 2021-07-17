import { UserActionTypes } from "./user.types";
import userReducer from "./user.reducer";

describe("currentUser", () => {
  it("Should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({ currentUser: null });
  });
});
