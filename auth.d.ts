declare module "#auth-utils" {
  interface UserSession {
    user: {
      sub: string;
      nickname: string;
      name: string;
      email: string;
      picture: string;
      updated_at: string;
      email_verified: boolean;
    };
  }
}
export { };
