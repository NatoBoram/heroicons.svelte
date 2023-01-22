<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MinusCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/MinusCircle" icon="heroicons:minus-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MinusCircle" icon="heroicons:minus-circle">
		<MinusCircle class={className} />
	</Hst.Variant>
</Hst.Story>
