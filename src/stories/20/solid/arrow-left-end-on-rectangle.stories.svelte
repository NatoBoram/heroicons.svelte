<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftEndOnRectangleSvelte from '../../../lib/20/solid/arrow-left-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLeftEndOnRectangleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowLeftEndOnRectangle" />
