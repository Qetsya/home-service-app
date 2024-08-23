export interface User {
  _id: string;
  name: string;
  age?: string | number;
  email: string;
  password: string;
}

export interface UserRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
  user: User;
}

export type NewUser = Omit<User, '_id'>;
