<script lang="ts">
	// Import the component directly
	import AcademicCap from '$lib/20/solid/academic-cap.svelte'
	import AdjustmentsHorizontal from '$lib/24/outline/adjustments-horizontal.svelte'
	import AdjustmentsVertical from '$lib/24/solid/adjustments-vertical.svelte'
	// Import the component from its size and icon type
	import { ArchiveBoxArrowDown } from '$lib/20/solid'
	import { ArchiveBoxXMark } from '$lib/24/outline'
	import { ArchiveBox } from '$lib/24/solid'
	// Import the icon type from its size
	import { Solid as Solid20 } from '$lib/20'
	import { Outline as Outline24, Solid as Solid24 } from '$lib/24'
	// Import the name of the icon type, which is effectively the same as the import above
	import { Mini, Outline, Solid } from '$lib'
	// Import `Heroicons`, which imports everything
	import { Heroicons } from '$lib'
	// Use the Heroicon component with the icon's name
	import { default as HeroiconMini } from '$lib/20/solid/Heroicon.svelte'
	import { default as HeroiconOutline } from '$lib/24/outline/Heroicon.svelte'
	import { default as HeroiconSolid } from '$lib/24/solid/Heroicon.svelte'
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

<!-- Use the Heroicon component with the icon's name -->
<HeroiconMini icon="arrow-left" />
<HeroiconOutline icon="arrow-long-down" />
<HeroiconSolid icon="arrow-long-left" />
