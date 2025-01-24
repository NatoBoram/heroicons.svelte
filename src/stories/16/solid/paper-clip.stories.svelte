<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperClipSvelte from '../../../lib/16/solid/paper-clip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PaperClipSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PaperClip" />
