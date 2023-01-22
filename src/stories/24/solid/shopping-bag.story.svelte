<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShoppingBag } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ShoppingBag" icon="heroicons:shopping-bag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShoppingBag" icon="heroicons:shopping-bag">
		<ShoppingBag class={className} />
	</Hst.Variant>
</Hst.Story>
