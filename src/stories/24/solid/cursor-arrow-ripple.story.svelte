<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CursorArrowRipple } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CursorArrowRipple" icon="heroicons:cursor-arrow-ripple">
		<CursorArrowRipple class={className} />
	</Hst.Variant>
</Hst.Story>
