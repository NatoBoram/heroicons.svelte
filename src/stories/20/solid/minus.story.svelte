<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Minus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Minus" icon="heroicons:minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Minus" icon="heroicons:minus">
		<Minus class={className} />
	</Hst.Variant>
</Hst.Story>
