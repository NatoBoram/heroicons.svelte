<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Sun } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Sun" icon="heroicons:sun">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Sun" icon="heroicons:sun">
		<Sun class={className} />
	</Hst.Variant>
</Hst.Story>
