<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AcademicCap } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/AcademicCap" icon="heroicons:academic-cap">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AcademicCap" icon="heroicons:academic-cap">
		<AcademicCap class={className} />
	</Hst.Variant>
</Hst.Story>
