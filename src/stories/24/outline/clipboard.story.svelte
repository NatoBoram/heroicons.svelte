<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Clipboard } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Clipboard" icon="heroicons:clipboard">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Clipboard" icon="heroicons:clipboard">
		<Clipboard class={className} />
	</Hst.Variant>
</Hst.Story>
