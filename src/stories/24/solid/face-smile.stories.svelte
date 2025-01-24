<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceSmileSvelte from '../../../lib/24/solid/face-smile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FaceSmileSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="FaceSmile" />
