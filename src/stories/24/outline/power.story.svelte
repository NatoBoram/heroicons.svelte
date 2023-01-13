<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Power } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Power" icon="heroicons:power">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Power" icon="heroicons:power">
		<Power class={className} />
	</Hst.Variant>
</Hst.Story>
