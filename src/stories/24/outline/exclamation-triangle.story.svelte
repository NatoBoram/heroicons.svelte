<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ExclamationTriangle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ExclamationTriangle" icon="heroicons:exclamation-triangle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ExclamationTriangle" icon="heroicons:exclamation-triangle">
		<ExclamationTriangle class={className} />
	</Hst.Variant>
</Hst.Story>
