<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Check } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Check" icon="heroicons:check">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Check" icon="heroicons:check">
		<Check class={className} />
	</Hst.Variant>
</Hst.Story>
