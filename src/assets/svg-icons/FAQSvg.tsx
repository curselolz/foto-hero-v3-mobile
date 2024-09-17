import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

export const FAQSvg = ({focused, color}: {focused: boolean; color: string}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={focused ? color : '#fff'}
        d="M9.6 13.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm.8-1.6c0-.45.326-.98.742-1.21a3.217 3.217 0 0 0 1.608-3.378 3.221 3.221 0 0 0-2.577-2.576 3.22 3.22 0 0 0-2.63.699A3.194 3.194 0 0 0 6.4 7.786a.8.8 0 0 0 1.6 0 1.6 1.6 0 1 1 2.37 1.402c-.924.51-1.57 1.584-1.57 2.612a.8.8 0 1 0 1.6 0Zm8.8 4V4.6c0-2.206-1.794-4-4-4H4c-2.206 0-4 1.794-4 4v11.2c0 2.205 1.794 4 4 4h11.2c2.206 0 4-1.795 4-4Zm-4-13.6c1.323 0 2.4 1.076 2.4 2.4v11.2c0 1.323-1.077 2.4-2.4 2.4H4a2.403 2.403 0 0 1-2.4-2.4V4.6c0-1.324 1.077-2.4 2.4-2.4h11.2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .6h19.2v19.2H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
