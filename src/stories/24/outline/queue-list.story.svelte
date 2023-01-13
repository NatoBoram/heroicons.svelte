<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { QueueList } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/QueueList" icon="heroicons:queue-list">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="QueueList" icon="heroicons:queue-list">
		<QueueList class={className} />
	</Hst.Variant>
</Hst.Story>
