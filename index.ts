import { useMemo } from 'react';
import { ColorProps, TextProps, BaseUniProps, UseInlineStylesProps } from './types';

const useInlineStyles = ({
	uniStyles,
	include = {
		positions: false,
		gaps     : false,
		sizes    : false,
		fonts    : false,
		colors   : false,
		all      : false,
	},
}: UseInlineStylesProps) => {
	const {
		height,
		h,

		width,
		w,

		maxWidth,
		maw,

		maxHeight,
		mah,

		minWidth,
		miw,

		minHeight,
		mih,

		pt,
		pr,
		pb,
		pl,
		p,
		mt,
		mr,
		mb,
		ml,
		m,

		position,
		bottom,
		top,
		left,
		right,

		fontSize,
		fontWeight,
		letterSpacing,
		lineHeight,
		textAlign,

		color,
		backgroundColor,
		borderColor,
		textDecorationColor,
	} = uniStyles;

	const positionGroup = useMemo(
		() =>
			({
				top   : typeof top === "number" ? `${top}px` : top,
				left  : typeof left === "number" ? `${left}px` : left,
				right : typeof right === "number" ? `${right}px` : right,
				bottom: typeof bottom === "number" ? `${bottom}px` : bottom,
				position,
			} as BaseUniProps),
		[bottom, top, left, right, position]
	);

	const gapsGroup = useMemo(
		() =>
			({
				paddingTop   : typeof pt === "number" ? `${pt}px` : pt,
				paddingRight : typeof pr === "number" ? `${pr}px` : pr,
				paddingBottom: typeof pb === "number" ? `${pb}px` : pb,
				paddingLeft  : typeof pl === "number" ? `${pl}px` : pl,
				padding      : typeof p === "number" ? `${p}px` : p,
				marginTop    : typeof mt === "number" ? `${mt}px` : mt,
				marginRight  : typeof mr === "number" ? `${mr}px` : mr,
				marginBottom : typeof mb === "number" ? `${mb}px` : mb,
				marginLeft   : typeof ml === "number" ? `${ml}px` : ml,
				margin       : typeof m === "number" ? `${m}px` : m,
			} as BaseUniProps),
		[pt, pr, pb, pl, p, mt, mr, mb, ml, m]
	);

	const sizesGroup = useMemo(
		() =>
			({
				height   : (typeof height === "number" ? `${height}px` : height) || (typeof h === "number" ? `${h}px` : h),
				width    : (typeof width === "number" ? `${width}px` : width) || (typeof w === "number" ? `${w}px` : w),
				maxWidth : (typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth) || (typeof maw === "number" ? `${maw}px` : maw),
				maxHeight: (typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight) || (typeof mah === "number" ? `${mah}px` : mah),
				minWidth : (typeof minWidth === "number" ? `${minWidth}px` : minWidth) || (typeof miw === "number" ? `${miw}px` : miw),
				minHeight: (typeof minHeight === "number" ? `${minHeight}px` : minHeight) || (typeof mih === "number" ? `${mih}px` : mih),
			} as BaseUniProps),
		[height, width, maxWidth, maxHeight, minWidth, minHeight, h, w, maw, mah, miw, mih]
	);

	const fontGroup = useMemo(
		() =>
			({
				fontSize     : typeof fontSize === "number" ? `${fontSize}px` : fontSize,
				fontWeight,
				letterSpacing: typeof letterSpacing === "number" ? `${letterSpacing}px` : letterSpacing,
				lineHeight   : typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight,
				textAlign,
			} as TextProps),
		[fontSize, fontWeight, letterSpacing, lineHeight, textAlign]
	);

	const colorGroup = useMemo(
		() =>
			({
				color,
				backgroundColor,
				borderColor,
				textDecorationColor,
			} as ColorProps),
		[color, backgroundColor, borderColor, textDecorationColor]
	);

	return useMemo(() => {
		const styles = {};
		if (include.all) {
			Object.keys(positionGroup).forEach((key) => {
				if (positionGroup[key] !== undefined) {
					styles[key] = positionGroup[key];
				}
			});
			Object.keys(gapsGroup).forEach((key) => {
				if (gapsGroup[key] !== undefined) {
					styles[key] = gapsGroup[key];
				}
			});
			Object.keys(sizesGroup).forEach((key) => {
				if (sizesGroup[key] !== undefined) {
					styles[key] = sizesGroup[key];
				}
			});
			Object.keys(fontGroup).forEach((key) => {
				if (fontGroup[key] !== undefined) {
					styles[key] = fontGroup[key];
				}
			});
			Object.keys(colorGroup).forEach((key) => {
				if (colorGroup[key] !== undefined) {
					styles[key] = colorGroup[key];
				}
			});
		} else {
			if (include.positions) {
				Object.keys(positionGroup).forEach((key) => {
					if (positionGroup[key] !== undefined) {
						styles[key] = positionGroup[key];
					}
				});
			}
			if (include.gaps) {
				Object.keys(gapsGroup).forEach((key) => {
					if (gapsGroup[key] !== undefined) {
						styles[key] = gapsGroup[key];
					}
				});
			}
			if (include.sizes) {
				Object.keys(sizesGroup).forEach((key) => {
					if (sizesGroup[key] !== undefined) {
						styles[key] = sizesGroup[key];
					}
				});
			}
			if (include.fonts) {
				Object.keys(fontGroup).forEach((key) => {
					if (fontGroup[key] !== undefined) {
						styles[key] = fontGroup[key];
					}
				});
			}
			if (include.colors) {
				Object.keys(colorGroup).forEach((key) => {
					if (colorGroup[key] !== undefined) {
						styles[key] = colorGroup[key];
					}
				});
			}
		}
		return styles;
	}, [positionGroup, gapsGroup, sizesGroup, fontGroup, colorGroup, include]);
};

export default useInlineStyles;