<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MinusSmall } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/MinusSmall" icon="heroicons:minus-small">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MinusSmall" icon="heroicons:minus-small">
		<MinusSmall class={className} />
	</Hst.Variant>
</Hst.Story>
