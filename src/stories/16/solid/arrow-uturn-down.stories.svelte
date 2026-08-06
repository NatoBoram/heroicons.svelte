<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnDownSvelte from '../../../lib/16/solid/arrow-uturn-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUturnDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUturnDown" />
