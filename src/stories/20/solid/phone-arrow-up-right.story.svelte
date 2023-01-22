<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PhoneArrowUpRight } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PhoneArrowUpRight" icon="heroicons:phone-arrow-up-right">
		<PhoneArrowUpRight class={className} />
	</Hst.Variant>
</Hst.Story>
