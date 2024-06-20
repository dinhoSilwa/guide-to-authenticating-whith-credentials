export interface IRegisterUser {
  username : string;
  email : string;
  password : string;
  createdAt?:any;
  updateAt?:any
}

export interface ILoginUser {
  email : string;
  password : string
}
