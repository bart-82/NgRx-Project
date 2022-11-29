export interface AuthenticationResponse {
  user?: AuthUser;
  token?: string;
}

export interface AuthUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  __v: number;
}
