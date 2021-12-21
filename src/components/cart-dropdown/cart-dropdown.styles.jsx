import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: #fff;
    top: 80px;
    right: 0;
    z-index: 5;

    button {
        margin-top: auto;
    }
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const EmptyMessage = styled.span`
    font-size: 18;
    margin: 50px auto;
`