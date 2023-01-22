<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { LockOpen } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/LockOpen" icon="heroicons:lock-open">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="LockOpen" icon="heroicons:lock-open">
		<LockOpen class={className} />
	</Hst.Variant>
</Hst.Story>
