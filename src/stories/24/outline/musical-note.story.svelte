<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MusicalNote } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/MusicalNote" icon="heroicons:musical-note">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MusicalNote" icon="heroicons:musical-note">
		<MusicalNote class={className} />
	</Hst.Variant>
</Hst.Story>
