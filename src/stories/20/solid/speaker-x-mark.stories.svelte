<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerXMarkSvelte from '../../../lib/20/solid/speaker-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SpeakerXMarkSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="SpeakerXMark" />
