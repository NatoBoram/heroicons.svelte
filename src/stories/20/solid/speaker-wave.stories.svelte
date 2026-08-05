<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerWaveSvelte from '../../../lib/20/solid/speaker-wave.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SpeakerWaveSvelte,
		args: { class: '' },
	})
</script>

<Story name="SpeakerWave" />
