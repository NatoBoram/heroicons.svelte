<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EllipsisHorizontalCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/EllipsisHorizontalCircle" icon="heroicons:ellipsis-horizontal-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EllipsisHorizontalCircle" icon="heroicons:ellipsis-horizontal-circle">
		<EllipsisHorizontalCircle class={className} />
	</Hst.Variant>
</Hst.Story>
