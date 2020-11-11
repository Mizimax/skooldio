import styled from 'styled-components'

const SimpleCard = styled.div`
  padding: 16px 24px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0);
  width: ${(props) => props.width};
`

export default SimpleCard
