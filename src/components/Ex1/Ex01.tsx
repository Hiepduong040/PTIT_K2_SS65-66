import React from "react";
import { useSelector } from "react-redux";

interface Profile {
  id: number;
  name: string;
  gender: string;
  age: string;
  address: string;
}

interface RootState {
  profileReducer: {
    profile: Profile;
  };
}

export default function Ex01() {
  const { profile } = useSelector((state: RootState) => state.profileReducer);

  return (
    <div>
      <h4>Thông tin cá nhân</h4>
      <ul style={{ listStyle: "none" }}>
        <li>ID: {profile.id}</li>
        <li>Họ và tên: {profile.name}</li>
        <li>Giới tính: {profile.gender === "Male" ? "Nam" : "Nữ"}</li>
        <li>Ngày sinh: {profile.age}</li>
        <li>Địa chỉ: {profile.address}</li>
      </ul>
    </div>
  );
}