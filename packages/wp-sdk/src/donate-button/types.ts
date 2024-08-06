export interface DonateButtonAttributes {
	textAlign?: string;
	width?: number;
	height?: number;
	className?: string;
	code?: string;
	buttonText: string;
	style: Record<string, unknown> | string;
	children?: React.ReactNode;
}

export type selectedWidth = number | 'auto' | undefined;
