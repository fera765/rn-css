import styled from './src'

interface PropsUser {
  col?: string;
}

export const View = styled.View`
flex: 1;
align-items: center;
justify-content: center;
flex-direction: column;
background: green;
`
export const BoxTester = styled.View`
width: 100%;
height: auto;
background-color: black;
flex-direction: row;
border-radius: 50vh;
padding: 10px 10px 20px 20px;
`
export const Text = styled.Text<PropsUser>`
  color: ${props => props.col || 'black'};
`
