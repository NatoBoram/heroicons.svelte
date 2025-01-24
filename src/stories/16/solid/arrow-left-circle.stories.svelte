<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftCircleSvelte from '../../../lib/16/solid/arrow-left-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLeftCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowLeftCircle" />
