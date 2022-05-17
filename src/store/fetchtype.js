const fetchType = (state="", action)=>{
    switch (action.type) {
        case 'UPDATEUSER':
          return (state = action.modaltype);
        default:
          return state;
      }
}

export default fetchType;