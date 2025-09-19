export interface LoginResponseModel {
  token: string;
  refreshToken?: string;
  userId?: number;
  email?: string;
}
