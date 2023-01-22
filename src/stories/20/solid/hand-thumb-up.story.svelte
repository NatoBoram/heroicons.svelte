<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { HandThumbUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/HandThumbUp" icon="heroicons:hand-thumb-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="HandThumbUp" icon="heroicons:hand-thumb-up">
		<HandThumbUp class={className} />
	</Hst.Variant>
</Hst.Story>
