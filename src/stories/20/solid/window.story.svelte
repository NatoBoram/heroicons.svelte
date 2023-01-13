<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Window } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Window" icon="heroicons:window">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Window" icon="heroicons:window">
		<Window class={className} />
	</Hst.Variant>
</Hst.Story>
