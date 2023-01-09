# Heroicons.Svelte

[![Node.js CI](https://github.com/NatoBoram/heroicons.svelte/actions/workflows/node-js.yaml/badge.svg)](https://github.com/NatoBoram/heroicons.svelte/actions/workflows/node-js.yaml)

Exports [Heroicons](https://github.com/tailwindlabs/heroicons) for usage with [Svelte](https://github.com/sveltejs/svelte).

## Installation

In the project's `.npmrc`, add this line:

```properties
@NatoBoram:registry=https://npm.pkg.github.com
```

Install `@natoboram/heroicons.svelte`:

```bash
pnpm add -D @natoboram/heroicons.svelte
```

## Usage

Each icons can be imported individually as a Svelte component.

```svelte
<script lang="ts">
	// Import the component directly
	import AcademicCap from '@natoboram/heroicons.svelte/heroicons/20/solid/academic-cap.svelte'
	import AdjustmentsHorizontal from '@natoboram/heroicons.svelte/heroicons/24/outline/adjustments-horizontal.svelte'
	import AdjustmentsVertical from '@natoboram/heroicons.svelte/heroicons/24/solid/adjustments-vertical.svelte'

	// Import the component from its size and icon type
	import { ArchiveBoxArrowDown } from '@natoboram/heroicons.svelte/heroicons/20/solid'
	import { ArchiveBoxXMark } from '@natoboram/heroicons.svelte/heroicons/24/outline'
	import { ArchiveBox } from '@natoboram/heroicons.svelte/heroicons/24/solid'

	// Import the icon type from its size
	import { Solid as Solid20 } from '@natoboram/heroicons.svelte/heroicons/20'
	import { Outline as Outline24, Solid as Solid24 } from '@natoboram/heroicons.svelte/heroicons/24'

	// Import the name of the icon type, which is the same as the import above
	import { Mini, Outline, Solid } from '@natoboram/heroicons.svelte'

	// Import `Heroicons`, which imports everything
	import { Heroicons } from '@natoboram/heroicons.svelte'
</script>

<!-- Import the component directly -->
<AcademicCap class="h-5 w-5" />
<AdjustmentsHorizontal />
<AdjustmentsVertical />

<!-- Import the component from its size and icon type -->
<ArchiveBoxArrowDown />
<ArchiveBoxXMark class="h-6 w-6" />
<ArchiveBox />

<!-- Import the icon type from its size -->
<Solid20.ArrowDownCircle />
<Outline24.ArrowDownLeft />
<Solid24.ArrowDownOnSquareStack />

<!-- Import the name of the icon type, which is the same as the import above -->
<Mini.ArrowDownOnSquare />
<Outline.ArrowDownRight />
<Solid.ArrowDownTray />

<!-- Import `Heroicons`, which imports everything -->
<Heroicons.Mini.ArrowDown />
<Heroicons.Outline.ArrowLeftCircle />
<Heroicons.Solid.ArrowLeftOnRectangle />
```

You can send an arbitrary `class` to the components as if they were HTML elements. By default, they have a size set by the Tailwind classes `w-5 h-5` or `w-6 h-6`, but if you set another class, then these size classes are not applied.

## Developing

Once you've installed dependencies with `pnpm install`, start a Storybook server:

```bash
pnpm storybook
```

## Building

To create a production version:

```bash
pnpm build-heroicons
```
