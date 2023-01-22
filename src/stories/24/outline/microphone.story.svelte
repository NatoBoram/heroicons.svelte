<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Microphone } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Microphone" icon="heroicons:microphone">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Microphone" icon="heroicons:microphone">
		<Microphone class={className} />
	</Hst.Variant>
</Hst.Story>
