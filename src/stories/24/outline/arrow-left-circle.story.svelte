<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLeftCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowLeftCircle" icon="heroicons:arrow-left-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLeftCircle" icon="heroicons:arrow-left-circle">
		<ArrowLeftCircle class={className} />
	</Hst.Variant>
</Hst.Story>
