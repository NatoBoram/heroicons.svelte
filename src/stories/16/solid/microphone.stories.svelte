<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MicrophoneSvelte from '../../../lib/16/solid/microphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MicrophoneSvelte,
		args: { class: '' },
	})
</script>

<Story name="Microphone" />
