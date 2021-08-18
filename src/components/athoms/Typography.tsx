import {font} from '../_settings';
import styled from "styled-components";

const Text = styled.p``
const Title1 = styled.h1``
const Title2 = styled.h2``
const Title3 = styled.h3``
const Title4 = styled.h4``

type TypographyStyles = {
    color?: string;
    textTransform?: string;
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: string;
    fontStyle?: string;
    FF?: string;
    FZ?: string;
    LH?: string;
    FW?: string;
    FS?: string;
}

// const StylesDefault = {
//     // color: props.styles.color ? props.styles.color : ''
// }

type TypographyProps = {
    value: string;
    type?: string;
    styles?: TypographyStyles
}

const Paragraph = (props: TypographyProps) => <Text>{props.value}</Text>
const H1 = (props: TypographyProps) => <Title1>{props.value}</Title1>
const H2 = (props: TypographyProps) => <Title2>{props.value}</Title2>
const H3 = (props: TypographyProps) => <Title3>{props.value}</Title3>
const H4 = (props: TypographyProps) => <Title4>{props.value}</Title4>

export const Typography = (props: TypographyProps) => {
    const {value, type = 'primary'} = props;
    const types = Object.keys(font);
    const fileType: string = types[types.indexOf(type)];

    return (
        <>
            {fileType === 'primary' && <Paragraph styles={font[fileType]} value={value}/>}
            {fileType === 'h1' && <H1 styles={font[fileType]} value={value}/>}
            {fileType === 'h2' && <H2 styles={font[fileType]} value={value}/>}
            {fileType === 'h3' && <H3 styles={font[fileType]} value={value}/>}
            {fileType === 'h4' && <H4 styles={font[fileType]} value={value}/>}
        </>
    )
}

