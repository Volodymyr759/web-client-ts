import { PaginationProps } from "./pagination.props";
import styles from './pagination.module.css';

export const Pagination = ({ itemsPerPage, totalItems, paginate }: PaginationProps): JSX.Element => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={styles.navcontainer}>
			<nav aria-label="Page navigation example">
				<ul className={styles.pagination}>
					{
						pageNumbers.map(number =>
							<li key={number} className="page-item">
								<a className="page-link" href="!#" onClick={(e) => { e.preventDefault(); paginate(number); }} >
									{number}
								</a>
							</li>
						)
					}
				</ul>
			</nav>
		</div>
	);
};