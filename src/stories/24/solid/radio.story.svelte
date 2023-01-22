<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Radio } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Radio" icon="heroicons:radio">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Radio" icon="heroicons:radio">
		<Radio class={className} />
	</Hst.Variant>
</Hst.Story>
