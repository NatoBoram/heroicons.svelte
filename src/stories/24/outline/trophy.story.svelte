<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Trophy } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Trophy" icon="heroicons:trophy">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Trophy" icon="heroicons:trophy">
		<Trophy class={className} />
	</Hst.Variant>
</Hst.Story>
