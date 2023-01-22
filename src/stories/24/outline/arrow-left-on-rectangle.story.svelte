<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLeftOnRectangle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
		<ArrowLeftOnRectangle class={className} />
	</Hst.Variant>
</Hst.Story>
