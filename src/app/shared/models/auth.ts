export interface JwtToken {
  exp: number;
  iat: number;
  sub: string;
  email: string;
  role: string[]
}

export interface PendingUser {
  id: string;
  userName: string;
  email: string;
  isActive: boolean;
}

export interface ActivateUserRequest {
  id: string;
}