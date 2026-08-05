<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightOnRectangleSvelte from '../../../lib/20/solid/arrow-right-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowRightOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRightOnRectangle" />
