<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FaceSmileSvelte from '../../../lib/20/solid/face-smile.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FaceSmileSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="FaceSmile" />
