import { LinkButtonProps } from './link-button.props';
import styles from './link-button.module.css';
import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

export const LinkButton = ({ appearance, linkTo, children }: LinkButtonProps): JSX.Element => {
	return (
		<Link href={linkTo}>
			<a
				className={cn(styles.linkBtn, {
					[styles.linkBtnPrimary]: appearance == 'primary',
					[styles.linkBtnWhite]: appearance == 'white'
				})}
			>
				{children}
			</a>
		</Link>
	);
};