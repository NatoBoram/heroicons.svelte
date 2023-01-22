<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowsPointingIn } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowsPointingIn" icon="heroicons:arrows-pointing-in">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowsPointingIn" icon="heroicons:arrows-pointing-in">
		<ArrowsPointingIn class={className} />
	</Hst.Variant>
</Hst.Story>
