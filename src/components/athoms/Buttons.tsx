import styled from "styled-components";

const Btn = styled.div`
    
`


type BtnProps = {
    value: string,
    onClick?: () => void
}

export const Button = (props:BtnProps) => {
    const {value, onClick} = props;
    return (
        <Btn onClick={ onClick }>{ value }</Btn>
    )
}

