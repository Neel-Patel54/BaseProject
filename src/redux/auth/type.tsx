export type Login = {
    token: string;
}

export type LoginError = {
    error: string | null;
}

export type AuthState = {
    isLoggedIn: boolean;
    token: string;
    loadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}