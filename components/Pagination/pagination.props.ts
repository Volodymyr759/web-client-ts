export interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	paginate: (x: number) => void;
}