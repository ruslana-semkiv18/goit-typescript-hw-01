type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
 const defaultValues: User = {
    name: 'Name',
    surname: 'Surname',
    email: 'name.surname@gmail.com',
    password: 'password',
  };
  return {
    ...defaultValues,
    ...initialValues,
  };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});