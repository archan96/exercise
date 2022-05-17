const fetchUser = (state="lol", action)=>{
    switch (action.type) {
        case 'UPDATEUSER':
          return (state = action.payload);
        default:
          return state;
      }
}

export default fetchUser;