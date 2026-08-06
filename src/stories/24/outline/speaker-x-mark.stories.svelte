<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerXMarkSvelte from '../../../lib/24/outline/speaker-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SpeakerXMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="SpeakerXMark" />
