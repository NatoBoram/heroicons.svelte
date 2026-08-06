<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnDownSvelte from '../../../lib/20/solid/arrow-uturn-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUturnDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUturnDown" />
