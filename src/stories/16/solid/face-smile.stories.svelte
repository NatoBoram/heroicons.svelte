<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceSmileSvelte from '../../../lib/16/solid/face-smile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FaceSmileSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="FaceSmile" />
