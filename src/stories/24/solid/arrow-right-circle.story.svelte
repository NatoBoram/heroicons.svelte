<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowRightCircle } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowRightCircle" icon="heroicons:arrow-right-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowRightCircle" icon="heroicons:arrow-right-circle">
		<ArrowRightCircle class={className} />
	</Hst.Variant>
</Hst.Story>
