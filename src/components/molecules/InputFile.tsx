import styled from "styled-components";
import { Button } from "../athoms";

const File = styled.label`
  input[type="file"]{
    display: none;
  }
`

type InputFileProps = {
    value: string,
    onClick: () => void
}

export const InputFile = (props:InputFileProps) => {
    const {onClick, value} = props;
    return (
        <File>
            <Button onClick={ onClick } value={value} />
            <input type="file" hidden={ true }/>
        </File>
    )
}