<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpCircleSvelte from '../../../lib/20/solid/arrow-up-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowUpCircle" />
