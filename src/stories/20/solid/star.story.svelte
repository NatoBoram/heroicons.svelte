<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Star } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Star" icon="heroicons:star">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Star" icon="heroicons:star">
		<Star class={className} />
	</Hst.Variant>
</Hst.Story>
