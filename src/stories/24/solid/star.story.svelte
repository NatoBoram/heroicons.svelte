<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Star } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Star" icon="heroicons:star">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Star" icon="heroicons:star">
		<Star class={className} />
	</Hst.Variant>
</Hst.Story>
