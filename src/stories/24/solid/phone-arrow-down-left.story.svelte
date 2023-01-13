<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PhoneArrowDownLeft } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PhoneArrowDownLeft" icon="heroicons:phone-arrow-down-left">
		<PhoneArrowDownLeft class={className} />
	</Hst.Variant>
</Hst.Story>
