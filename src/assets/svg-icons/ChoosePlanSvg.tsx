import * as React from 'react';
import Svg, {SvgProps, G, Mask, Path, Defs, ClipPath} from 'react-native-svg';

export const ChoosePlanSvg = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={20}
        height={20}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <Path fill={focused ? color : '#fff'} d="M0 .8h19.115v19.114H0V.8Z" />
      </Mask>
      <G
        stroke={focused ? color : '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={22.926}
        strokeWidth={1.12}
        mask="url(#b)">
        <Path d="M9.558 19.354c4.955 0 8.997-4.042 8.997-8.998 0-4.955-4.042-8.997-8.997-8.997C4.602 1.359.56 5.401.56 10.356c0 4.956 4.041 8.998 8.997 8.998Z" />
        <Path d="M9.558 17.113c3.722 0 6.757-3.035 6.757-6.757 0-3.722-3.035-6.757-6.757-6.757-3.722 0-6.757 3.035-6.757 6.757 0 3.722 3.035 6.757 6.757 6.757Z" />
        <Path d="m9.558 7.334 1.725 2.23L13.338 9l-1.046 3.652h-5.48L5.777 9l2.056.563 1.725-2.23Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .8h19.115v19.116H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
