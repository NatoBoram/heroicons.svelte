<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArchiveBox } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArchiveBox" icon="heroicons:archive-box">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArchiveBox" icon="heroicons:archive-box">
		<ArchiveBox class={className} />
	</Hst.Variant>
</Hst.Story>
