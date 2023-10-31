import { Anchor, AnchorProps } from "@mantine/core";
import { Link, LinkProps } from "@mongez/react-router";
import React from "react";

function _UnStyledLink(
  props: Omit<AnchorProps, "component"> & LinkProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return <Anchor {...props} unstyled ref={ref} component={Link} />;
}

export const UnStyledLink = React.forwardRef(_UnStyledLink);

export type UnStyledLinkProps = Parameters<typeof _UnStyledLink>[0];

function _BaseLink(
  props: Omit<AnchorProps, "component"> & LinkProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return <Anchor ref={ref} {...props} component={Link} />;
}

export const BaseLink = React.forwardRef(_BaseLink);
