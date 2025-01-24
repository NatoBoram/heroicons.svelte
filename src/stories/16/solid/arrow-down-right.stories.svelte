<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownRightSvelte from '../../../lib/16/solid/arrow-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowDownRight" />
