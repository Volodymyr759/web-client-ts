import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Htag } from '../components';
import { AuthContext } from '../infrastructure/context/auth-context';
import { withLayout } from "../layouts/public/Layout";

function ProfileMessages(): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles) router.push('/login');
	}, []);

	return (
		<>
			<Htag tag="h3">My Messages</Htag>
		</>
	);
}

export default withLayout(ProfileMessages);