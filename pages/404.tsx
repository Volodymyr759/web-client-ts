import React from 'react';
import { CenterTextCard } from '../components';
import { withLayout } from '../layouts/public/Layout';

export function Error404(): JSX.Element {
	return (
		<CenterTextCard
			htagText="Oops! That page can’t be found."
		>
			<p className="lead mb-4">It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
		</CenterTextCard>
	);
}

export default withLayout(Error404);