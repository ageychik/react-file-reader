// import styled from "styled-components";
import { Typography } from "../athoms";
import { InputFile } from '../molecules';
import { FlexBox } from "../_settings";

export default function HeroDescription() {
	return (
		<FlexBox direction='column' gap='15px'>
			<Typography type='h1' value='Hello world' />
			<Typography value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, cum deleniti dolore doloremque exercitationem hic impedit incidunt inventore natus nesciunt nobis odio quibusdam recusandae tempore ullam velit vitae voluptate!' />
			<InputFile value='Download Files' onClick={ () => {
			} } />
		</FlexBox>
	)
}