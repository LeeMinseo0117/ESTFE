import styled from "styled-components";
import {
  ContCard,
  ProductImg,
  ProductTitle,
  ProductSubTitle,
  ProductDiscreption,
  ProductPrice,
} from "./ContCard";

function App2() {
  return (
    <>
      <ContCard>
        <ProductImg
          src="https://picsum.photos/id/237/200/300"
          alt="검은 강아지"
        />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
        <ProductDiscreption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dignissimos repellat debitis nulla animi officiis facere sequi saepe
          minima quibusdam iusto labore corporis quasi maiores eveniet
          accusantium, ea a dolores!
        </ProductDiscreption>
        <ProductPrice price={1000} currencyCode="KRW" />
      </ContCard>
    </>
  );
}

export default App2;
