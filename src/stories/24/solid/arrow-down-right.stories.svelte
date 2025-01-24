<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownRightSvelte from '../../../lib/24/solid/arrow-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowDownRight" />
