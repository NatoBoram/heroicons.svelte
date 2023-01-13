<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLeftCircle } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowLeftCircle" icon="heroicons:arrow-left-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLeftCircle" icon="heroicons:arrow-left-circle">
		<ArrowLeftCircle class={className} />
	</Hst.Variant>
</Hst.Story>
