<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Backspace } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Backspace" icon="heroicons:backspace">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Backspace" icon="heroicons:backspace">
		<Backspace class={className} />
	</Hst.Variant>
</Hst.Story>
