<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { SpeakerWave } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/SpeakerWave" icon="heroicons:speaker-wave">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="SpeakerWave" icon="heroicons:speaker-wave">
		<SpeakerWave class={className} />
	</Hst.Variant>
</Hst.Story>
