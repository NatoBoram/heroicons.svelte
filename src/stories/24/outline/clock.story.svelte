<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Clock } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Clock" icon="heroicons:clock">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Clock" icon="heroicons:clock">
		<Clock class={className} />
	</Hst.Variant>
</Hst.Story>
