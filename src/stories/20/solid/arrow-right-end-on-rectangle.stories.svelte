<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightEndOnRectangleSvelte from '../../../lib/20/solid/arrow-right-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowRightEndOnRectangleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowRightEndOnRectangle" />
