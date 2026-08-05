<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallRightSvelte from '../../../lib/20/solid/arrow-small-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowSmallRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallRight" />
