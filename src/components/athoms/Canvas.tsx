import styled from "styled-components";
import {useRef} from "react";

const CanvasWrapper = styled.canvas`
  
`

export default function Canvas() {
    const ref = useRef(null);
    return <CanvasWrapper ref={ ref } />
};