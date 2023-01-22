<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ShoppingBag } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ShoppingBag" icon="heroicons:shopping-bag">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ShoppingBag" icon="heroicons:shopping-bag">
		<ShoppingBag class={className} />
	</Hst.Variant>
</Hst.Story>
