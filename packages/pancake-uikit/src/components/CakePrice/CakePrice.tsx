import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://swap.moletech.io/swap?outputCurrency=0x33831bee1ce63c95dab6cf23f83ff0b6a29a2837"
      target="_blank"
    >
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
