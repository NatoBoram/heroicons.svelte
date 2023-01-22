<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Language } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Language" icon="heroicons:language">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Language" icon="heroicons:language">
		<Language class={className} />
	</Hst.Variant>
</Hst.Story>
