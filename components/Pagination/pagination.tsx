import { PaginationProps } from "./pagination.props";
import styles from './pagination.module.css';

export const Pagination = ({ itemsPerPage, totalItems, paginate }: PaginationProps): JSX.Element => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className={styles.pagination}>
				{
					pageNumbers.map(number =>
						<li key={number} className={styles.pageitem}>
							<a href="!#" onClick={(e) => { e.preventDefault(); paginate(number); }} className={styles.pagelink}>
								{number}
							</a>
						</li>
					)
				}
			</ul>
		</nav>
	);
};