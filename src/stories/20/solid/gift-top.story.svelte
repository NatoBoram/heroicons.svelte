<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { GiftTop } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/GiftTop" icon="heroicons:gift-top">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="GiftTop" icon="heroicons:gift-top">
		<GiftTop class={className} />
	</Hst.Variant>
</Hst.Story>
