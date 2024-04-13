'use client'; // client component를 사용하기 위해서! 안그럼 server component를 인식해서 js를 사용할 수 없다
import { useState } from 'react';
import Image from 'next/image';

export default function List() {
  const [number, setNumber] = useState([0, 0, 0]);
  const products = ['Tomatoes', 'Pasta', 'Coconut'];
  let copy = [...number]; // 배열 복사

  /**
   * number(state) 를 copy에 복사해서 사용하는 이유는?
   * 기존 state와 변경된 state를 비교하는 과정이 이루어지는데 number를 가지고 하면 state를 비교할 수 없기 때문에 안된다.
   * 복사해서 변경된 부분을 비교해야하는 것!!
   */

  return (
    <div>
      <h2>Products</h2>
      {products.map((item, i) => {
        return (
          <div className='food' key={i}>
            <Image src={`/food${i}.png`} width={200} height={200} />
            <h4>{item} $40</h4>
            <button
              onClick={() => {
                copy[i]--;
                setNumber(copy);
              }}
            >
              -
            </button>
            <span> {number[i]} </span>
            <button
              onClick={() => {
                copy[i]++;
                setNumber(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
