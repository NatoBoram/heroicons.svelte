<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EllipsisHorizontal } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EllipsisHorizontal" icon="heroicons:ellipsis-horizontal">
		<EllipsisHorizontal class={className} />
	</Hst.Variant>
</Hst.Story>
