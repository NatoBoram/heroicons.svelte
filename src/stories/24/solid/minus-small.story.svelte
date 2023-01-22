<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MinusSmall } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/MinusSmall" icon="heroicons:minus-small">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MinusSmall" icon="heroicons:minus-small">
		<MinusSmall class={className} />
	</Hst.Variant>
</Hst.Story>
