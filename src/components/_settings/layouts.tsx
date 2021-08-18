import styled from "styled-components";

type FlexProps = {
	display?: string,
	gap?: string,
	direction?: string,
	flex?: string,
	align?: string,
	justify?: string,
	wrap?: string,
	children?: any
}

const Flex = styled.div`
  display: ${ ( props: FlexProps ) => props.display ? props.display : 'flex' };
  gap: ${ ( props: FlexProps ) => props.gap ? props.gap : 'initial' };
  flex-direction: ${ ( props: FlexProps ) => props.direction ? props.direction : 'initial' };
  flex: ${ ( props: FlexProps ) => props.flex ? props.flex : 'initial' };
  align-items: ${ ( props: FlexProps ) => props.align ? props.align : 'initial' };
  justify-content: ${ ( props: FlexProps ) => props.justify ? props.justify : 'initial' };
  flex-wrap: ${ ( props: FlexProps ) => props.wrap ? props.wrap : 'initial' };
`


export const FlexBox = ( props: FlexProps ) => {
	return <Flex { ...props } />
}