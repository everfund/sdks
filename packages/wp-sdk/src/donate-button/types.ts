export interface BlockAttributes {
	textAlign?: string;
	width?: number;
	className?: string;
	code?: string;
	buttonText: string;
	style: Record<string, unknown> | string;
	children?: React.ReactNode;
}
