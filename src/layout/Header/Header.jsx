import Logo from '../../assets/logo.svg';

import { Typography, Container, Box } from '@mui/material';

function Header() {
	return (
		<Box component="header">
			<Container>
				<Typography component="h1">
					<img src={Logo} alt="Youtube Store" width={100} />
				</Typography>
			</Container>
		</Box>
	)
}

export default Header
