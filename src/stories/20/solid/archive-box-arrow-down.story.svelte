<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArchiveBoxArrowDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArchiveBoxArrowDown" icon="heroicons:archive-box-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArchiveBoxArrowDown" icon="heroicons:archive-box-arrow-down">
		<ArchiveBoxArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
