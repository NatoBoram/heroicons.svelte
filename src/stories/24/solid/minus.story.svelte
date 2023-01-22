<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Minus } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Minus" icon="heroicons:minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Minus" icon="heroicons:minus">
		<Minus class={className} />
	</Hst.Variant>
</Hst.Story>
