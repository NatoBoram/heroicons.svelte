<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongDownSvelte from '../../../lib/24/outline/arrow-long-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLongDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLongDown" />
