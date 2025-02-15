# Heroicons.Svelte

[![Node.js CI](https://github.com/NatoBoram/heroicons.svelte/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/heroicons.svelte/actions/workflows/node.js.yaml) [![GitHub Downloads](https://img.shields.io/github/downloads/NatoBoram/heroicons.svelte/total?logo=github&color=0969da)](https://github.com/NatoBoram/heroicons.svelte/releases) [![NPM Downloads](https://img.shields.io/npm/dt/%40natoboram/heroicons.svelte?logo=npm&color=CB3837)](https://www.npmjs.com/package/@natoboram/heroicons.svelte) [![Svelte](https://img.shields.io/npm/dependency-version/@natoboram/heroicons.svelte/dev/svelte?color=FF3E00&logo=svelte)](https://github.com/sveltejs/svelte) [![Heroicons](https://img.shields.io/npm/dependency-version/@natoboram/heroicons.svelte/dev/heroicons?color=8B5CF6)](https://github.com/tailwindlabs/heroicons) [![Maintainability](https://api.codeclimate.com/v1/badges/bf55494aef500e1de365/maintainability)](https://codeclimate.com/github/NatoBoram/heroicons.svelte/maintainability)

Exports [Heroicons](https://github.com/tailwindlabs/heroicons) for usage with [Svelte](https://github.com/sveltejs/svelte).

## Usage

Install `@natoboram/heroicons.svelte`:

```bash
pnpm add -D @natoboram/heroicons.svelte
```

Each icons can be imported individually as a Svelte component.

```svelte
<script lang="ts">
	// Import the component from its size and icon type
	import { ShieldCheck } from '@natoboram/heroicons.svelte/16/solid'

	// Import the icon type from its size
	import { Solid } from '@natoboram/heroicons.svelte/16'

	// Import the name of the icon type
	import { Micro } from '@natoboram/heroicons.svelte'

	// Import `Heroicons`, which imports everything
	import { Heroicons } from '@natoboram/heroicons.svelte'

	// Use the Heroicon component with the icon's name
	import { Heroicon } from '@natoboram/heroicons.svelte/16/solid'
</script>

<!-- Import the component from its size and icon type -->
<ShieldCheck />

<!-- Import the icon type from its size -->
<Solid.ShieldCheck />

<!-- Import the name of the icon type -->
<Micro.ShieldCheck />

<!-- Import `Heroicons`, which imports everything -->
<Heroicons.Micro.ShieldCheck />

<!-- Use the Heroicon component with the icon's name -->
<Heroicon icon="shield-check" />
```

You can send an arbitrary `class` to the components as if they were HTML elements. By default, they have a size set by the Tailwind classes `w-5 h-5` or `w-6 h-6`, but if you set another class, then these size classes are not applied.

The `Heroicon` components are there for when you need to dynamically set the icon. They will display a loading spinner until the icon is loaded. To avoid this spinner, directly import the appropriate component instead.

## Developing

Once you've installed dependencies with `pnpm install`, start a Storybook server:

```bash
pnpm storybook
```

The entire package is auto-generated by `scripts/build_heroicons.ts`, so you might want to check out this file first.

## Building

To create a production version:

```bash
pnpm build-heroicons
```
