<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Eye } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Eye" icon="heroicons:eye">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Eye" icon="heroicons:eye">
		<Eye class={className} />
	</Hst.Variant>
</Hst.Story>
