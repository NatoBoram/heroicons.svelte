<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MicrophoneSvelte from '../../../lib/20/solid/microphone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MicrophoneSvelte,
		args: { class: '' },
	})
</script>

<Story name="Microphone" />
