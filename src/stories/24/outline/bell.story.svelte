<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bell } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Bell" icon="heroicons:bell">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bell" icon="heroicons:bell">
		<Bell class={className} />
	</Hst.Variant>
</Hst.Story>
