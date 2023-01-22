<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PaperClip } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PaperClip" icon="heroicons:paper-clip">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PaperClip" icon="heroicons:paper-clip">
		<PaperClip class={className} />
	</Hst.Variant>
</Hst.Story>
