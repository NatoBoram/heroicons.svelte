<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLeftOnRectangle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLeftOnRectangle" icon="heroicons:arrow-left-on-rectangle">
		<ArrowLeftOnRectangle class={className} />
	</Hst.Variant>
</Hst.Story>
