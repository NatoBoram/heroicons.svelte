# Heroicons.Svelte

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/NatoBoram/heroicons.svelte/node-js.yaml?logo=github)](https://github.com/NatoBoram/heroicons.svelte/actions/workflows/node-js.yaml) [![npm](https://img.shields.io/npm/v/@natoboram/heroicons.svelte?color=CB3837&logo=npm)](https://www.npmjs.com/package/@natoboram/heroicons.svelte) [![Svelte](https://img.shields.io/npm/dependency-version/@natoboram/heroicons.svelte/dev/svelte?color=FF3E00&logo=svelte)](https://github.com/sveltejs/svelte) [![Heroicons](https://img.shields.io/npm/dependency-version/@natoboram/heroicons.svelte/dev/heroicons?color=8B5CF6)](https://github.com/tailwindlabs/heroicons) [![Maintainability](https://api.codeclimate.com/v1/badges/bf55494aef500e1de365/maintainability)](https://codeclimate.com/github/NatoBoram/heroicons.svelte/maintainability)

Exports [Heroicons](https://github.com/tailwindlabs/heroicons) for usage with [Svelte](https://github.com/sveltejs/svelte).

## Usage

Install `@natoboram/heroicons.svelte`:

```bash
pnpm add -D @natoboram/heroicons.svelte
```

Each icons can be imported individually as a Svelte component.

```svelte
<script lang="ts">
	// Import the component directly
	import AcademicCap from '@natoboram/heroicons.svelte/20/solid/academic-cap.svelte'
	import AdjustmentsHorizontal from '@natoboram/heroicons.svelte/24/outline/adjustments-horizontal.svelte'
	import AdjustmentsVertical from '@natoboram/heroicons.svelte/24/solid/adjustments-vertical.svelte'

	// Import the component from its size and icon type
	import { ArchiveBoxArrowDown } from '@natoboram/heroicons.svelte/20/solid'
	import { ArchiveBoxXMark } from '@natoboram/heroicons.svelte/24/outline'
	import { ArchiveBox } from '@natoboram/heroicons.svelte/24/solid'

	// Import the icon type from its size
	import { Solid as Solid20 } from '@natoboram/heroicons.svelte/20'
	import { Outline as Outline24, Solid as Solid24 } from '@natoboram/heroicons.svelte/24'

	// Import the name of the icon type, which is effectively the same as the import above
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
<Solid24.ArrowDownOnSquareStack class="h-6 w-6" />

<!-- Import the name of the icon type, which is effectively the same as the import above -->
<Mini.ArrowDownOnSquare class="h-5 w-5" />
<Outline.ArrowDownRight />
<Solid.ArrowDownTray />

<!-- Import `Heroicons`, which imports everything -->
<Heroicons.Mini.ArrowDown />
<Heroicons.Outline.ArrowLeftCircle class="h-6 w-6" />
<Heroicons.Solid.ArrowLeftOnRectangle />
```

You can send an arbitrary `class` to the components as if they were HTML elements. By default, they have a size set by the Tailwind classes `w-5 h-5` or `w-6 h-6`, but if you set another class, then these size classes are not applied.

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
