<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallRightSvelte from '../../../lib/24/solid/arrow-small-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowSmallRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallRight" />
