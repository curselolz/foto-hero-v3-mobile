import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

export const ProfileSvg = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <G fill={focused ? color : '#fff'} clipPath="url(#a)">
      <Path d="M16.8 19.2h-1.6v-4.035a2.368 2.368 0 0 0-2.365-2.366H6.366A2.368 2.368 0 0 0 4 15.165v4.034H2.4v-4.034a3.97 3.97 0 0 1 3.966-3.966h6.469a3.97 3.97 0 0 1 3.965 3.966v4.034ZM9.6 9.6a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6Zm0-8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.2v19.2H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
