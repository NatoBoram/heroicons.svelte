<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownCircleSvelte from '../../../lib/16/solid/arrow-down-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowDownCircle" />
