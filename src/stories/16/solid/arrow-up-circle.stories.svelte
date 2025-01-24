<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpCircleSvelte from '../../../lib/16/solid/arrow-up-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUpCircle" />
