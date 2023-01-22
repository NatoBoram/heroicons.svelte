<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { SpeakerWave } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/SpeakerWave" icon="heroicons:speaker-wave">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="SpeakerWave" icon="heroicons:speaker-wave">
		<SpeakerWave class={className} />
	</Hst.Variant>
</Hst.Story>
