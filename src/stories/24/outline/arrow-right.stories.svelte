<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightSvelte from '../../../lib/24/outline/arrow-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRight" />
