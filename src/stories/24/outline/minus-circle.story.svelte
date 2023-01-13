<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MinusCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/MinusCircle" icon="heroicons:minus-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MinusCircle" icon="heroicons:minus-circle">
		<MinusCircle class={className} />
	</Hst.Variant>
</Hst.Story>
