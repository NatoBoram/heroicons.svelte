<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ExclamationCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ExclamationCircle" icon="heroicons:exclamation-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ExclamationCircle" icon="heroicons:exclamation-circle">
		<ExclamationCircle class={className} />
	</Hst.Variant>
</Hst.Story>
