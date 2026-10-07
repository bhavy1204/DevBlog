export type User = {
    id:string;
    username:string;
    email:string;
}

export type GetUsersData = {
  users: User[];
};