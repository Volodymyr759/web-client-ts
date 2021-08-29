import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous" />
				</body>
			</Html>
		);
	}
}

export default AppDocument;