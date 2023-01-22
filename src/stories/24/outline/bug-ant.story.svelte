<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BugAnt } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/BugAnt" icon="heroicons:bug-ant">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BugAnt" icon="heroicons:bug-ant">
		<BugAnt class={className} />
	</Hst.Variant>
</Hst.Story>
