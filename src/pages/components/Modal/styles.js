import styled from 'styled-components';

export const ModalWrap = styled.div`

`;

export const ModalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: ${(props) => props.displayModal ? 'grid' : 'none'};
	place-items: center;
	position: fixed;
  z-index: 30;
	inset: 0 0;
  padding: 1rem;
	background-color: rgba(0, 0, 0, 0.2);
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 250px;
  max-height: 620px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 15px;
  overflow-y: auto;
  background-color: ${props => props.theme['white']};

`;

export const ContentBoxHeader = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    /* line-height: 100%; */
    font-size: 1rem;
    color: ${(props) => props.theme['black-f']};
  }
`;

export const CodeContainer = styled.div`
  flex: 1;
  border-radius: 15px;

  strong {
    font-weight: 600;
    color: ${(props) => props.theme['blue-700']};
  }

  pre {
    font-size: clamp(1rem, 1vw, 1.2rem);
    border-radius: 15px;
  }
`;
