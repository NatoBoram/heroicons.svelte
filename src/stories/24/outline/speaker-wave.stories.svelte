<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerWaveSvelte from '../../../lib/24/outline/speaker-wave.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SpeakerWaveSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="SpeakerWave" />
