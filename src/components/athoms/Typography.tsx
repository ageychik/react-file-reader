import { font } from '../_settings';
import styled from "styled-components";

const Text = styled.p`
  
`

export const Paragraph = (props: any) => {
    const { value } = props
    return (
        <Text>{value}</Text>
    )
}

export const Typography = (props: any) => {
    const { value, type = 'primary'} = props;
    const types = Object.keys(font);
    const fileType = font[types[types.indexOf(type)]];

    return (
        <>
            {fileType === 'primary' && <Paragraph value={ value } />}
        </>
    )
}

