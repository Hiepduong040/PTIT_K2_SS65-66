import React from "react";
import { useSelector } from "react-redux";


interface Fruit {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface RootState {
  fruitReducer: {
    fruits: Fruit[];
  };
}

export default function Ex03() {
  const { fruits } = useSelector((state: RootState) => state.fruitReducer);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{formatCurrency(item.price)}</td>
              <td>{item.quantity}</td>
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