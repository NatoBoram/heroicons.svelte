<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { LockClosed } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/LockClosed" icon="heroicons:lock-closed">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="LockClosed" icon="heroicons:lock-closed">
		<LockClosed class={className} />
	</Hst.Variant>
</Hst.Story>
