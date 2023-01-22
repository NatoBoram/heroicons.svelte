<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ViewfinderCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ViewfinderCircle" icon="heroicons:viewfinder-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ViewfinderCircle" icon="heroicons:viewfinder-circle">
		<ViewfinderCircle class={className} />
	</Hst.Variant>
</Hst.Story>
