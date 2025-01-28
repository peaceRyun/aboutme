import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #000;
    color: #fff;
`;

export const Cont = styled.div`
    position: relative;
    max-width: var(--bp-laptop);
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => props.flexDir && 'column'};
    gap: 0.4rem;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
`;

export const FlexRow = styled.div`
    display: flex;
    gap: 0.4rem;
    flex: 1;
`;
