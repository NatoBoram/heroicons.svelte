<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShoppingCart } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ShoppingCart" icon="heroicons:shopping-cart">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShoppingCart" icon="heroicons:shopping-cart">
		<ShoppingCart class={className} />
	</Hst.Variant>
</Hst.Story>
