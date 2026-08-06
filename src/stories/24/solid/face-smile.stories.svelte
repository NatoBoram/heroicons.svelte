<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceSmileSvelte from '../../../lib/24/solid/face-smile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FaceSmileSvelte,
		args: { class: '' },
	})
</script>

<Story name="FaceSmile" />
