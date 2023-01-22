<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Radio } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Radio" icon="heroicons:radio">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Radio" icon="heroicons:radio">
		<Radio class={className} />
	</Hst.Variant>
</Hst.Story>
