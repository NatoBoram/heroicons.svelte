<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { XCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/XCircle" icon="heroicons:x-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="XCircle" icon="heroicons:x-circle">
		<XCircle class={className} />
	</Hst.Variant>
</Hst.Story>
