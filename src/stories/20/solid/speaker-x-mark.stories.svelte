<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SpeakerXMarkSvelte from '../../../lib/20/solid/speaker-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SpeakerXMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="SpeakerXMark" />
