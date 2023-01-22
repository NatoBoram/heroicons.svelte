<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { XMark } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/XMark" icon="heroicons:x-mark">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="XMark" icon="heroicons:x-mark">
		<XMark class={className} />
	</Hst.Variant>
</Hst.Story>
