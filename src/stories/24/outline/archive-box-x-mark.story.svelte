<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArchiveBoxXMark } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
		<ArchiveBoxXMark class={className} />
	</Hst.Variant>
</Hst.Story>
