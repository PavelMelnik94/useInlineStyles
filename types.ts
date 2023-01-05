export interface BaseMarginProps {
	mt?: number | string;
	mb?: number | string;
	mr?: number | string;
	ml?: number | string;
	m?: number | string;
}

export interface ColorProps {
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	textDecorationColor?: string;
}

export interface TextProps {
	fontSize?: number | string;
	fontWeight?: number | string;
	lineHeight?: number | string;
	letterSpacing?: number | string;
	textAlign?: "center" | "left" | "right";
}

export interface BasePaddingsProps {
	pt?: number | string;
	pb?: number | string;
	pr?: number | string;
	pl?: number | string;
	p?: number | string;
}

export interface BaseSizeProps {
	w?: number | string;
	width?: number | string;
	height?: number | string;
	h?: number | string;
	minWidth?: number | string;
	miw?: number | string;
	maxWidth?: number | string;
	maw?: number | string;
	minHeight?: number | string;
	mih?: number | string;
	maxHeight?: number | string;
	mah?: number | string;
}

export interface PositionProps {
	position?: "relative" | "absolute" | "fixed";
	top?: number | string;
	right?: number | string;
	bottom?: number | string;
	left?: number | string;
}

export interface BaseUniProps extends BaseMarginProps, BasePaddingsProps, BaseSizeProps, PositionProps, ColorProps, TextProps {}



export interface GroupsOfStyles {
	positions: "positions";
	gaps: "gaps";
	sizes: "sizes";
	fonts: "fonts";
	colors: "colors";
	all: "all";
}

export interface UseInlineStylesProps {
  style?: React.CSSProperties;
	uniStyles: BaseUniProps & any;
	include?: {
		[key in keyof GroupsOfStyles]?: boolean;
	};
}