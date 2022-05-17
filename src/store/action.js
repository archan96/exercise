export const updateUser = (val, type) => {
  return {
    type: "UPDATEUSER",
    payload: val,
    modaltype: type,
  };
};
