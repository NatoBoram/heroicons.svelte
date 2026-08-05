<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerWaveSvelte from '../../../lib/24/solid/speaker-wave.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SpeakerWaveSvelte,
		args: { class: '' },
	})
</script>

<Story name="SpeakerWave" />
