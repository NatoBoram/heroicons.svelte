<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BugAnt } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BugAnt" icon="heroicons:bug-ant">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BugAnt" icon="heroicons:bug-ant">
		<BugAnt class={className} />
	</Hst.Variant>
</Hst.Story>
