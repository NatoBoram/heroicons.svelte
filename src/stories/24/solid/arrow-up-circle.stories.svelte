<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpCircleSvelte from '../../../lib/24/solid/arrow-up-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpCircle" />
