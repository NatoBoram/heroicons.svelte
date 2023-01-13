<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Envelope } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Envelope" icon="heroicons:envelope">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Envelope" icon="heroicons:envelope">
		<Envelope class={className} />
	</Hst.Variant>
</Hst.Story>
