<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Language } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Language" icon="heroicons:language">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Language" icon="heroicons:language">
		<Language class={className} />
	</Hst.Variant>
</Hst.Story>
