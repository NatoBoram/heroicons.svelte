<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUp } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowUp" icon="heroicons:arrow-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUp" icon="heroicons:arrow-up">
		<ArrowUp class={className} />
	</Hst.Variant>
</Hst.Story>
