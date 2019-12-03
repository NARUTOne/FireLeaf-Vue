/**
 * store types
 */

export interface RootState extends IMobile{}

export interface IMobile {
  mobile: boolean;
}

// 用户

export interface UserState {
  id: string,
  name: string,
  avatar: string
}

export const SAVE_USER = "SAVE_USER";

