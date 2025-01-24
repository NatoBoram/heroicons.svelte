<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperClipSvelte from '../../../lib/24/outline/paper-clip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PaperClipSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PaperClip" />
