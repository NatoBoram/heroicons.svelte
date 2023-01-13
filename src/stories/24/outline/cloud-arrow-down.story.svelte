<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CloudArrowDown } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/CloudArrowDown" icon="heroicons:cloud-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CloudArrowDown" icon="heroicons:cloud-arrow-down">
		<CloudArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
