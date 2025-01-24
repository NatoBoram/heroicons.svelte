<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MicrophoneSvelte from '../../../lib/24/outline/microphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MicrophoneSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Microphone" />
