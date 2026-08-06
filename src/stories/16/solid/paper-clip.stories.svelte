<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperClipSvelte from '../../../lib/16/solid/paper-clip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PaperClipSvelte,
		args: { class: '' },
	})
</script>

<Story name="PaperClip" />
