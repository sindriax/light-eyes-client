export interface User {
    userId?: number;
    userName: string;
    password: string;
}

export interface UserRegister{
    userName: string;
    email: string;
    password: string;
}

export interface UserLogin{
    userName: string;
    password: string;
}

export interface UserResponse{
    userName: string;
    email: string;
    token: string;
}
