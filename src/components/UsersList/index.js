import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/modules/users";

import { Container, NewBagContainer } from "./styles";

import UserCard from "../UserCard";

const UsersList = () => {
  const dispatch = useDispatch();
  const { list: usersList } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Container>
      {usersList.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default UsersList;
