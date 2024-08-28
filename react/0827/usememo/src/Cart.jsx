import { useState, createContext } from "react";
import { useCart } from "./useCart";

// createContext 사용을 위해 export
export const CartContext = createContext();

// children props를 가지는 CartProvider 함수 생성
const CartProvider = ({ children }) => {
  // 카트의 상태
  // 카트의 상태를 반영하는 초기값이 빈배열인 useState 생성
  const [cart, setCart] = useState([]);

  console.log("cart", cart);

  // 카트에 상품 추가하기
  // 매개변수(=product)를 가지는 addToCart함수 생성
  const addToCart = (product) => {
    // 매개변수(=prevCart)를 가지는 카트의 상태를 변경하는 함수
    setCart((prevCart) => {
      // 카트에 상품이 이미 존재하는지 확인
      // find() 메서드 : 배열에서 주어진 조건을 만족하는 첫 번째 요소를 반환하는 배열 메서드
      // item === prevCart 배열의 각 요소
      // product.id === item.id -> true일시 product.id 반환
      const isExist = prevCart.find((item) => product.id === item.id);
      console.log("isExist", isExist);
      console.log("product", product);
      console.log("prevCart", prevCart);

      // 상품이 이미 존재하는 경우
      if (isExist) {
        // prevCart에서 map 실행(배열)
        return prevCart.map((item) => {
          // 내가 찾고자 하는 상품과 일치하는 상품의 count 값을 증가시킵니다.
          return item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      }

      // 상품이 카트에 처음 들어가는 경우
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // 카트에서 제거하기
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => productId !== item.id));
  };

  // 카트에 담겨있는 상품의 총합 구하기
  const getTotalCount = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalCount }}
    >
      {children}
      {console.log("children", children)}
    </CartContext.Provider>
  );
};

const Header = () => {
  const { getTotalCount } = useCart();

  return (
    <header>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품의 개수: {getTotalCount()}</p>
    </header>
  );
};

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];

  return (
    <>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₩{product.price}
            <button onClick={() => addToCart(product)}>카트에 추가하기</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비었습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - 수량: {item.count}
              <button onClick={() => removeFromCart(item.id)}>삭제하기</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <MyCart />
    </CartProvider>
  );
};

export default App;
