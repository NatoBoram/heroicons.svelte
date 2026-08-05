<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongDownSvelte from '../../../lib/24/outline/arrow-long-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLongDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongDown" />
