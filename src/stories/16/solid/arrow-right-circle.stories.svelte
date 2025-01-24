<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightCircleSvelte from '../../../lib/16/solid/arrow-right-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowRightCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowRightCircle" />
