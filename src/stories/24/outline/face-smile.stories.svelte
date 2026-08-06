<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceSmileSvelte from '../../../lib/24/outline/face-smile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FaceSmileSvelte,
		args: { class: '' },
	})
</script>

<Story name="FaceSmile" />
