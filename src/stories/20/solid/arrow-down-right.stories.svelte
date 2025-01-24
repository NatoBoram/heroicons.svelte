<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownRightSvelte from '../../../lib/20/solid/arrow-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowDownRight" />
