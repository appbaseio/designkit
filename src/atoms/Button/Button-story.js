import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../Button";

storiesOf("Button", module)
	.add("default", () => (
		<Button>Click me</Button>
	))
	.add("primary", () => (
		<Button primary>Click me</Button>
	));
