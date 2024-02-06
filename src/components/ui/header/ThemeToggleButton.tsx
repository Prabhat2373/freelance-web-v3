import cx from "clsx";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import classes from "./ActionToggle.module.css";

export function ThemeToggleButton() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  console.log("colorScheme", colorScheme);

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun
          className={cx("icon w-22 h-22", {
            hidden: colorScheme === "light",
          })}
          stroke={1.5}
        />
        <IconMoon
          className={cx("icon w-22 h-22", {
            hidden: colorScheme === "dark",
          })}
          stroke={1.5}
        />
      </ActionIcon>
    </Group>
  );
}
