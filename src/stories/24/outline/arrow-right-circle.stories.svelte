<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightCircleSvelte from '../../../lib/24/outline/arrow-right-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowRightCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRightCircle" />
