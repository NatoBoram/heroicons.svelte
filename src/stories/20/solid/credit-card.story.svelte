<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CreditCard } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CreditCard" icon="heroicons:credit-card">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CreditCard" icon="heroicons:credit-card">
		<CreditCard class={className} />
	</Hst.Variant>
</Hst.Story>
