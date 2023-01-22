<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PhoneArrowUpRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
		<PhoneArrowUpRight class={className} />
	</Hst.Variant>
</Hst.Story>
