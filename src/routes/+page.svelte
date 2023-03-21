<script lang="ts">
	// Import the component from its size and icon type
	import { AcademicCap } from '$lib/20/solid/index.js'
	import { AdjustmentsHorizontal } from '$lib/24/outline/index.js'
	import { AdjustmentsVertical } from '$lib/24/solid/index.js'
	// Import the icon type from its size
	import { Solid as Solid20 } from '$lib/20/index.js'
	import { Outline as Outline24, Solid as Solid24 } from '$lib/24/index.js'
	// Import the name of the icon type, which is effectively the same as the import above
	import { Mini, Outline, Solid } from '$lib/index.js'
	// Import `Heroicons`, which imports everything
	import { Heroicons } from '$lib/index.js'
	// Use the Heroicon component with the icon's name
	import { Heroicon as HeroiconMini } from '$lib/20/solid/index.js'
	import { Heroicon as HeroiconOutline } from '$lib/24/outline/index.js'
	import { Heroicon as HeroiconSolid } from '$lib/24/solid/index.js'
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
