import styled from 'styled-components';

export const Weather = styled.div`
  width: 300px;
  border-radius: 6px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: #fff;
  background-color: #333;
  margin: 20px auto 0 auto;
  padding: 0 20px 20px 20px;
  `

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.$alignitemprop};

  .weather-icon {
  width: 100px;
  }

  .details {
  width: 100%;
  padding-left: 20px;
}

.parameter-label {
  text-align: left;
  font-weight: 400;
  font-size: 12px;

  .parameter-value {
  text-align: right;
  font-weight: 600;
  font-size: 12px;
}
}

`

export const TopBottomParagraph = styled.p`
  font-weight: ${props => props.$fontweightprop};
  font-size: ${props => props.$fontsizeprop};
  line-height: ${props => props.$lineheightprop};
  margin: ${props => props.$marginprop};
  letter-spacing: ${props => props.$linespacingprop};
  width: ${props => props.$widthProp};
`