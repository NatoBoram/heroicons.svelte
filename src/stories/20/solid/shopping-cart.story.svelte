<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShoppingCart } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ShoppingCart" icon="heroicons:shopping-cart">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShoppingCart" icon="heroicons:shopping-cart">
		<ShoppingCart class={className} />
	</Hst.Variant>
</Hst.Story>
