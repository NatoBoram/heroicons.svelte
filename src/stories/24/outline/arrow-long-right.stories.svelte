<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongRightSvelte from '../../../lib/24/outline/arrow-long-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLongRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongRight" />
