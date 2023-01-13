<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { SpeakerXMark } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/SpeakerXMark" icon="heroicons:speaker-x-mark">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="SpeakerXMark" icon="heroicons:speaker-x-mark">
		<SpeakerXMark class={className} />
	</Hst.Variant>
</Hst.Story>
