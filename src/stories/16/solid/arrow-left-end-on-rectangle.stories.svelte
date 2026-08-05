<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftEndOnRectangleSvelte from '../../../lib/16/solid/arrow-left-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLeftEndOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftEndOnRectangle" />
