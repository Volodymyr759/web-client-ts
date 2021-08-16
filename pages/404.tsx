import React from 'react';
import { Htag, P } from '../components';
import { withLayout } from '../layouts/public/Layout';

export function Error404(): JSX.Element {
	return (
		<>
			<Htag tag='h2'>Oops! That page can’t be found.</Htag>
			<P appearance="centered">
				It looks like nothing was found at this location. Maybe try one of the links below or a search?
			</P>
		</>
	);
}

export default withLayout(Error404);