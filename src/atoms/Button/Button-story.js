import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../Button";

storiesOf("Button", module)
	.add("default", () => (
		<Button>Get started</Button>
	))
	.add("primary", () => (
		<Button primary>Get started</Button>
	))
	.add("success", () => (
		<Button success>Get started</Button>
	))
	.add("warning", () => (
		<Button warning>Get started</Button>
	))
	.add("disabled", () => (
		<Button disabled>Get started</Button>
	));
