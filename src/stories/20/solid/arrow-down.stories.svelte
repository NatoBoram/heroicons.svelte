<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownSvelte from '../../../lib/20/solid/arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDown" />
