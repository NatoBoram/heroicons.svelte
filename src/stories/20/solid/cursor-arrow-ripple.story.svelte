<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CursorArrowRipple } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
		<CursorArrowRipple class={className} />
	</Hst.Variant>
</Hst.Story>
