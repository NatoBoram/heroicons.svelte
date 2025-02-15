<script lang="ts">
	import { Solid } from '$lib/16/index.js'
	import { Heroicon, ShieldCheck } from '$lib/16/solid/index.js'
	import { Heroicons, Micro } from '$lib/index.js'
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
