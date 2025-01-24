<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperClipSvelte from '../../../lib/24/solid/paper-clip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PaperClipSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PaperClip" />
