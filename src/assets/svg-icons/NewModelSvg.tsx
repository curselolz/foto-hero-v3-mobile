import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

export const NewModelSvg = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <G fill={focused ? color : '#fff'} clipPath="url(#a)">
      <Path d="M18.4 8.801h-1.6v-1.6a.8.8 0 0 0-1.6 0v1.6h-1.6a.8.8 0 0 0 0 1.6h1.6v1.6a.8.8 0 0 0 1.6 0v-1.6h1.6a.8.8 0 1 0 0-1.6ZM7.2 9.601a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM7.2 11.201a7.208 7.208 0 0 0-7.2 7.2.8.8 0 0 0 .8.8h12.8a.8.8 0 0 0 .8-.8 7.208 7.208 0 0 0-7.2-7.2Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.2v19.2H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
