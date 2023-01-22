<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowsPointingOut } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowsPointingOut" icon="heroicons:arrows-pointing-out">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowsPointingOut" icon="heroicons:arrows-pointing-out">
		<ArrowsPointingOut class={className} />
	</Hst.Variant>
</Hst.Story>
