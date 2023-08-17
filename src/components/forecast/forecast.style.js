import styled from 'styled-components';

export const Title = styled.label`
  font-size: 1.4375em;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin: 1.2rem;
`

export const DailyItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 15px;
  height: 2.5em;
  margin: 5px;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 0.875em;
  padding: 5px 20px;

  .day {
  cursor: inherit;
  color: #212121;
  flex: 1 1;
  font-weight: 600;
  margin-left: 15px;
}

.min-max-temperature {
  color: #757575;
}

.icon-small {
  width: 2.5em;
}

.description {
  cursor: inherit;
  flex: 1 1;
  margin-right: 15px;
  text-align: right;
}

`
export const DetailGrid = styled.div`
grid-row-gap: 0;
  grid-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
  display: grid;
  flex: 1 1;
  grid-template-columns: auto auto;
  padding: 5px 15px;
  row-gap: 0;

  .details-grid-item {
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: space-between;

  label:first-child {
  color: #757575;
}

label:last-child {
  color: #212121;
}
}
`