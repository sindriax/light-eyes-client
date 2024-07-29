export interface JwtToken {
  exp: number;
  iat: number;
  sub: string;
  email: string;
  role: string[]
}