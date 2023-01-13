<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CloudArrowUp } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/CloudArrowUp" icon="heroicons:cloud-arrow-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CloudArrowUp" icon="heroicons:cloud-arrow-up">
		<CloudArrowUp class={className} />
	</Hst.Variant>
</Hst.Story>
