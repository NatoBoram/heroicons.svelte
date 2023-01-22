<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArchiveBoxXMark } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArchiveBoxXMark" icon="heroicons:archive-box-x-mark">
		<ArchiveBoxXMark class={className} />
	</Hst.Variant>
</Hst.Story>
