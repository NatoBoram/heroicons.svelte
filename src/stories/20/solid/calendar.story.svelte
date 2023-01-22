<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Calendar } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Calendar" icon="heroicons:calendar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Calendar" icon="heroicons:calendar">
		<Calendar class={className} />
	</Hst.Variant>
</Hst.Story>
