<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MusicalNote } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/MusicalNote" icon="heroicons:musical-note">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MusicalNote" icon="heroicons:musical-note">
		<MusicalNote class={className} />
	</Hst.Variant>
</Hst.Story>
