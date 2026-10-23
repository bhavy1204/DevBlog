export type User = {
    id:string;
    username:string;
    email:string;
}

export type GetUsersData = {
  users: User[];
};

export type CreateUserData = {
  createUser: {
    id: string;
    username: string;
    email: string;
  };
};

export type CreateUserVariables = {
  username: string;
  email: string;
  password: string;
};



