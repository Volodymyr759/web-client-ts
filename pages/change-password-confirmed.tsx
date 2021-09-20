import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Htag } from '../components';
import { AuthContext } from '../context/auth-context';
import { withLayout } from "../layouts/public/Layout";

function PasswordChanged(): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles) router.push('/login');
	}, []);

	return (
		<>
			<Htag tag="h3">Password changed</Htag>
		</>
	);
}

export default withLayout(PasswordChanged);