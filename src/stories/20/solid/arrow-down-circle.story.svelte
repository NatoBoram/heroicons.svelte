<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowDownCircle" icon="heroicons:arrow-down-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownCircle" icon="heroicons:arrow-down-circle">
		<ArrowDownCircle class={className} />
	</Hst.Variant>
</Hst.Story>
