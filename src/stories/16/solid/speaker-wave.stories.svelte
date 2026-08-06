<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerWaveSvelte from '../../../lib/16/solid/speaker-wave.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SpeakerWaveSvelte,
		args: { class: '' },
	})
</script>

<Story name="SpeakerWave" />
