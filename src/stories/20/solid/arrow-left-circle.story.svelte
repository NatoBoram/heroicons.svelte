<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLeftCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowLeftCircle" icon="heroicons:arrow-left-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLeftCircle" icon="heroicons:arrow-left-circle">
		<ArrowLeftCircle class={className} />
	</Hst.Variant>
</Hst.Story>
