<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { EyeDropper } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/EyeDropper" icon="heroicons:eye-dropper">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="EyeDropper" icon="heroicons:eye-dropper">
		<EyeDropper class={className} />
	</Hst.Variant>
</Hst.Story>
