import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
	uuid: string;
	name: string;
	avatar: string | null;
	fullname: string | null;
}

export interface UserState {
	infoUser: IUser | null;
}

const initialState: UserState = {
	infoUser: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setInfoUser: (state, action: PayloadAction<IUser | null>) => {
			state.infoUser = action?.payload;
		},
	},
});

export const {setInfoUser} = userSlice.actions;
export default userSlice.reducer;