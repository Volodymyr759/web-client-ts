import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Htag } from '../components';
import { AuthContext } from '../context/auth-context';
import { withLayout } from "../layouts/public/Layout";

function ChangePassword(): JSX.Element {
	const router = useRouter();
	const { roles } = useContext(AuthContext);

	useEffect(() => {
		if (!roles) router.push('/login');
	}, []);

	return (
		<>
			<Htag tag="h3">Change your password</Htag>
		</>
	);
}

export default withLayout(ChangePassword);