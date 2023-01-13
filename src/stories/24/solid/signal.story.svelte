<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Signal } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Signal" icon="heroicons:signal">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Signal" icon="heroicons:signal">
		<Signal class={className} />
	</Hst.Variant>
</Hst.Story>
