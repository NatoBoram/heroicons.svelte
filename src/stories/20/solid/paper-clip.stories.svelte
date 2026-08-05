<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperClipSvelte from '../../../lib/20/solid/paper-clip.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PaperClipSvelte,
		args: { class: '' },
	})
</script>

<Story name="PaperClip" />
