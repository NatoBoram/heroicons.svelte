<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowRightOnRectangle } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowRightOnRectangle" icon="heroicons:arrow-right-on-rectangle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowRightOnRectangle" icon="heroicons:arrow-right-on-rectangle">
		<ArrowRightOnRectangle class={className} />
	</Hst.Variant>
</Hst.Story>
