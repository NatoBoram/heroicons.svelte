<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpCircle } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowUpCircle" icon="heroicons:arrow-up-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpCircle" icon="heroicons:arrow-up-circle">
		<ArrowUpCircle class={className} />
	</Hst.Variant>
</Hst.Story>
