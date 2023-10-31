import { Anchor, AnchorProps } from "@mantine/core";
import { Link, LinkProps } from "@mongez/react-router";
import { itemsStyle } from "../../layouts/Sidebar/Sidebar.Style";

export function BaseLink(props: AnchorProps & LinkProps) {
  const { classes } = itemsStyle();
  return <Anchor className={classes.anchor} {...props} component={Link} />;
}

export default BaseLink;
