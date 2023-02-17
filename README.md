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
	// Import the component from its size and icon type
	import { AcademicCap } from '$lib/20/solid'
	import { AdjustmentsHorizontal } from '$lib/24/outline'
	import { AdjustmentsVertical } from '$lib/24/solid'

	// Import the icon type from its size
	import { Solid as Solid20 } from '$lib/20'
	import { Outline as Outline24, Solid as Solid24 } from '$lib/24'

	// Import the name of the icon type, which is effectively the same as the import above
	import { Mini, Outline, Solid } from '$lib'

	// Import `Heroicons`, which imports everything
	import { Heroicons } from '$lib'

	// Use the Heroicon component with the icon's name
	import { Heroicon as HeroiconMini } from '$lib/20/solid'
	import { Heroicon as HeroiconOutline } from '$lib/24/outline'
	import { Heroicon as HeroiconSolid } from '$lib/24/solid'
</script>

<!-- Import the component from its size and icon type -->
<AcademicCap class="h-5 w-5" />
<AdjustmentsHorizontal />
<AdjustmentsVertical />

<!-- Import the icon type from its size -->
<Solid20.ArchiveBoxArrowDown />
<Outline24.ArchiveBoxXMark class="h-6 w-6" />
<Solid24.ArchiveBox />

<!-- Import the name of the icon type, which is effectively the same as the import above -->
<Mini.ArrowDownCircle />
<Outline.ArrowDownLeft />
<Solid.ArrowDownOnSquareStack class="h-6 w-6" />

<!-- Import `Heroicons`, which imports everything -->
<Heroicons.Mini.ArrowDownOnSquare class="h-5 w-5" />
<Heroicons.Outline.ArrowDownRight />
<Heroicons.Solid.ArrowDownTray />

<!-- Use the Heroicon component with the icon's name -->
<HeroiconMini icon="arrow-down" />
<HeroiconOutline icon="arrow-left-circle" class="h-6 w-6" />
<HeroiconSolid icon="arrow-left-on-rectangle" />
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
