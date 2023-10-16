import TextStrings from '@constants/strings';
import themeStatus from '@theme/statusBarTheme';
import React, { useEffect, useState } from 'react';
import type { StatusBarStyle } from 'react-native';
import { StatusBar } from 'react-native';

export default function ManagedStatusBar() {
  const STYLES = ['default', 'light-content'] as const;
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );
  const theme: string = TextStrings.ThemeDark;

  useEffect(() => {
    if (theme === TextStrings.ThemeLight) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[1]);
    }
  }, [theme]);

  return (
    <StatusBar
      backgroundColor={
        theme === TextStrings.ThemeLight
          ? themeStatus.statusBarLightTheme
          : themeStatus.statusBarDarkTheme
      }
      barStyle={statusBarStyle}
    />
  );
}
