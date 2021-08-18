import styled from "styled-components";
import {useEffect, useRef} from "react";

const CanvasWrapper = styled.canvas`
  
`

export default function Canvas(props:any) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if(canvasRef.current){
            canvasCtxRef.current = canvasRef.current?.getContext('2d');
            const ctx = canvasCtxRef.current;
            props.event(canvasRef.current, ctx)
        }
    }, [])

    return <CanvasWrapper ref={ canvasRef } />
};