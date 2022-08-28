import React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { match, P } from "ts-pattern";
import clsx from "clsx";
import styles from "./button.module.scss";

type ButtonProps = Pick<ComponentPropsWithoutRef<"button">, "onClick"> & {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
};

const getStyle = ({
  primary,
  size,
}: {
  primary: NonNullable<ButtonProps["primary"]>;
  size: NonNullable<ButtonProps["size"]>;
}) => {
  const base = primary
    ? styles["storybook-button--primary"]
    : styles["storybook-button"];
  const sizeClassname = match(size)
    .with("large", () => styles["storybook-button--large"])
    .with("medium", () => styles["storybook-button--medium"])
    .with("small", () => styles["storybook-button--small"])
    .exhaustive();

  return clsx(base, sizeClassname);
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={getStyle({ primary, size })} {...props}>
      {label}
    </button>
  );
};
