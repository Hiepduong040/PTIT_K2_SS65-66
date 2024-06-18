import React from "react";
import { useSelector } from "react-redux";


interface Person {
  id: number;
  name: string;
  gender: string;
  age: string;
  address: string;
}

interface RootState {
  personReducer: {
    people: Person[];
  };
}

export default function Ex02() {
  const { people } = useSelector((state: RootState) => state.personReducer);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {people.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}