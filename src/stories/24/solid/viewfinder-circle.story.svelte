<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ViewfinderCircle } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ViewfinderCircle" icon="heroicons:viewfinder-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ViewfinderCircle" icon="heroicons:viewfinder-circle">
		<ViewfinderCircle class={className} />
	</Hst.Variant>
</Hst.Story>
