const user: any = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      gender: "Male",
      age: "04/09/2005",
      address: "Hải Phòng",
    },
  ];
  const reducerProfile = (state = user, action: any) => {
    switch (action.type) {
      case "scan":
        return [...state];
      default:
        return state;
    }
  };
  export default reducerProfile;