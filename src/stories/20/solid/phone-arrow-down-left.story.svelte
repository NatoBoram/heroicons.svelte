<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PhoneArrowDownLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
		<PhoneArrowDownLeft class={className} />
	</Hst.Variant>
</Hst.Story>
