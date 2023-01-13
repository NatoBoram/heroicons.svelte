<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PaperClip } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PaperClip" icon="heroicons:paper-clip">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PaperClip" icon="heroicons:paper-clip">
		<PaperClip class={className} />
	</Hst.Variant>
</Hst.Story>
