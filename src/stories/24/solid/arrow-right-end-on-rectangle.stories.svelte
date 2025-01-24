<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightEndOnRectangleSvelte from '../../../lib/24/solid/arrow-right-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowRightEndOnRectangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowRightEndOnRectangle" />
