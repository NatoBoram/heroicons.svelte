<script lang="ts">
	// Import the component from its size and icon type
	import { ShieldCheck } from '$lib/16/solid/index.js'

	// Import the icon type from its size
	import { Solid } from '$lib/16/index.js'

	// Import the name of the icon type, which is effectively the same as the import above
	import { Micro } from '$lib/index.js'

	// Import `Heroicons`, which imports everything
	import { Heroicons } from '$lib/index.js'

	// Use the Heroicon component with the icon's name
	import { Heroicon } from '$lib/16/solid/index.js'
</script>

<!-- Import the component from its size and icon type -->
<ShieldCheck />

<!-- Import the icon type from its size -->
<Solid.ShieldCheck />

<!-- Import the name of the icon type, which is effectively the same as the import above -->
<Micro.ShieldCheck />

<!-- Import `Heroicons`, which imports everything -->
<Heroicons.Micro.ShieldCheck />

<!-- Use the Heroicon component with the icon's name -->
<Heroicon icon="shield-check" class="h-6 w-6" />
