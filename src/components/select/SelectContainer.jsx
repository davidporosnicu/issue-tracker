import React, { useState } from "react";
import { connect } from "react-redux";
import { assignUser } from "../../redux/card/cards.actions";
import Select from "react-select";
import Button from "../generic/button/Button";

const SelectContainer = ({ card, users, assignUser }) => {
  const [selectedUser, setSelectedUser] = useState([]);

  const usersMap = Object.values(users).map(user => {
    return {
      value: user.name,
      label: user.name,
    };
  });

  const handleOnClick = () => {
    assignUser(card.id, selectedUser.value);
    setSelectedUser([]);
  };

  return (
    <React.Fragment>
      <Select
        closeMenuOnSelect={false}
        placeholder={"Choose user"}
        value={selectedUser}
        name="categories"
        options={usersMap}
        className="products-categories"
        classNamePrefix="products-categories-select"
        autoBlur={false}
        onChange={selectedOption => {
          setSelectedUser(selectedOption);
        }}
      />
      <br />
      <Button
        onClick={handleOnClick}
        text={card.assignedTo ? "Change user" : "Assign user"}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { users: state.users.entries };
};

const mapDispatchToProps = {
  assignUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
