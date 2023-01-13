<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bell } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Bell" icon="heroicons:bell">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bell" icon="heroicons:bell">
		<Bell class={className} />
	</Hst.Variant>
</Hst.Story>
