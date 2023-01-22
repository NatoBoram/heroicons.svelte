<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AcademicCap } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/AcademicCap" icon="heroicons:academic-cap">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AcademicCap" icon="heroicons:academic-cap">
		<AcademicCap class={className} />
	</Hst.Variant>
</Hst.Story>
