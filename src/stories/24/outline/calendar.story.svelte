<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Calendar } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Calendar" icon="heroicons:calendar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Calendar" icon="heroicons:calendar">
		<Calendar class={className} />
	</Hst.Variant>
</Hst.Story>
