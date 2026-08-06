<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownRightSvelte from '../../../lib/16/solid/arrow-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownRight" />
