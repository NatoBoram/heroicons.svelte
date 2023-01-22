<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CheckCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/CheckCircle" icon="heroicons:check-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CheckCircle" icon="heroicons:check-circle">
		<CheckCircle class={className} />
	</Hst.Variant>
</Hst.Story>
