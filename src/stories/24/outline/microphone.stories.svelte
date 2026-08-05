<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MicrophoneSvelte from '../../../lib/24/outline/microphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MicrophoneSvelte,
		args: { class: '' },
	})
</script>

<Story name="Microphone" />
