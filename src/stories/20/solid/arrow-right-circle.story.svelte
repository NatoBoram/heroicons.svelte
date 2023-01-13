<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowRightCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowRightCircle" icon="heroicons:arrow-right-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowRightCircle" icon="heroicons:arrow-right-circle">
		<ArrowRightCircle class={className} />
	</Hst.Variant>
</Hst.Story>
