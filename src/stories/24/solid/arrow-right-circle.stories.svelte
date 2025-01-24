<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightCircleSvelte from '../../../lib/24/solid/arrow-right-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowRightCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowRightCircle" />
