<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Wallet } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Wallet" icon="heroicons:wallet">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Wallet" icon="heroicons:wallet">
		<Wallet class={className} />
	</Hst.Variant>
</Hst.Story>
